import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import styles from './styles';

import {
  Header,
  FilterAndView,
  ListView,
  GridView,
  FloatingActionButton,
  SpinnerLoader,
  ImagePreviewModal,
} from '../../components';
import {getPhotos} from '../../redux/getPhotos/action';
import Util from '../../util';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      rightTabIcon: 'list',
      rightTabText: 'List View',
      numColumns: 3,
      data: [],
      showModal: false,
      selectedImageUrl: '',
    };
  }

  // componentDidMount() {
  //   this.props.getPhotos();
  // }

  navigationEventsHandler = () => {
    this.setState({isLoading: true});
    this.handleGetImageList();
  };

  handleGetImageList = async () => {
    // Get item from asyncstorage
    let imageList = await Util.getItem('imageList');
    this.setState({data: imageList ? imageList : [], isLoading: false});
  };

  handleNavigation = (screenName) => {
    this.props.navigation.navigate(screenName);
  };

  // Handler for control list and grid views
  handleViews = () => {
    const {rightTabIcon, rightTabText} = this.state;
    this.setState({
      numColumns: rightTabText === 'List View' ? 1 : 3,
      rightTabIcon: rightTabIcon === 'list' ? 'grid-outline' : 'list',
      rightTabText: rightTabText === 'List View' ? 'Grid View' : 'List View',
    });
  };

  render() {
    const {
      rightTabIcon,
      rightTabText,
      data,
      numColumns,
      isLoading,
      showModal,
      selectedImageUrl,
    } = this.state;
    return (
      <View style={{...styles.container}}>
        {/* Handler for navigation events */}
        <NavigationEvents onDidFocus={this.navigationEventsHandler} />
        <SpinnerLoader isLoading={isLoading} />
        <Header {...this.props} />
        <FilterAndView
          rightTabIcon={rightTabIcon}
          rightTabText={rightTabText}
          rightTabPress={this.handleViews}
        />
        {data.length > 0 ? (
          <View
            style={
              rightTabText === 'List View'
                ? styles.gridCardContainer
                : styles.listCardContainer
            }>
            {/* Resource List */}
            <FlatList
              key={rightTabText === 'List View' ? '#' : '_'}
              numColumns={numColumns}
              keyExtractor={(item) => `${item.Id}`}
              data={data}
              renderItem={({item}) =>
                rightTabText === 'List View' ? (
                  <GridView
                    imageUrl={item.ThumbnailUrl}
                    cardText={item.Title}
                    cardPress={() =>
                      this.setState({
                        showModal: true,
                        selectedImageUrl: item.Url,
                      })
                    }
                  />
                ) : (
                  <ListView
                    imageUrl={item.ThumbnailUrl}
                    cardText={item.Title}
                    cardPress={() =>
                      this.setState({
                        showModal: true,
                        selectedImageUrl: item.Url,
                      })
                    }
                  />
                )
              }
            />
          </View>
        ) : (
          // Warning msg when no data exists
          <View style={{...styles.nothingTextContainer}}>
            {!isLoading ? (
              <Text style={{...styles.nothingText}}>Nothing to show!</Text>
            ) : null}
          </View>
        )}
        <FloatingActionButton
          actionBtnPress={() => this.handleNavigation('AddPhoto')}
        />
        {/* Modal for image preview */}
        <ImagePreviewModal
          isVisible={showModal}
          onBackdropPress={() => this.setState({showModal: false})}
          imageUrl={selectedImageUrl}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {photos: state.getPhotos.photos};
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPhotos: getPhotos}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
