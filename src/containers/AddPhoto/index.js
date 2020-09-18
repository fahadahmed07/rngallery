import React, {Component} from 'react';
import {View} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';

import {
  Header,
  ChooseImageCard,
  CustomTextInput,
  ErrorText,
  CustomButton,
  SelectedImageCard,
  SpinnerLoader,
} from '../../components';
import Util from '../../util';

class AddPhoto extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: null,
      imageTitle: '',
      formError: '',
      isLoading: false,
    };
  }

  handleNavigation = (screenName) => {
    this.props.navigation.navigate(screenName);
  };

  handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Image picker modal
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        this.setState({
          selectedImage: source,
        });
      }
    });
  };

  onChangeImageTitle = (text) => this.setState({imageTitle: text});

  // Control form validations
  checkValidation = () => {
    const {selectedImage, imageTitle} = this.state;
    if (!selectedImage) {
      this.setState({
        formError: 'Image is required.',
      });
      setTimeout(() => {
        this.setState({
          formError: '',
        });
      }, 5000);
    } else if (!imageTitle) {
      this.setState({
        formError: 'Image title is required.',
      });
      setTimeout(() => {
        this.setState({
          formError: '',
        });
      }, 5000);
    } else {
      this.handlePost();
    }
  };

  handlePost = async () => {
    this.setState({isLoading: true});
    const {selectedImage, imageTitle} = this.state;
    let imageList = await Util.getItem('imageList');
    const newImage = {
      Id: imageList ? imageList.length + 1 : 1,
      Title: imageTitle,
      Url: selectedImage.uri,
      ThumbnailUrl: selectedImage.uri,
    };
    if (imageList) {
      // Set item in asyncstorage
      await Util.setItem('imageList', [newImage, ...imageList]);
      this.setState({isLoading: false}, () => {
        // Confirmation alert after success
        Util.showConfirmAlert('Success', 'Successfully posted.', () =>
          this.handleNavigation('Home'),
        );
      });
    } else {
      // Set item in asyncstorage
      await Util.setItem('imageList', [newImage]);
      this.setState({isLoading: false}, () => {
        // Confirmation alert after success
        Util.showConfirmAlert('Success', 'Successfully posted.', () =>
          this.handleNavigation('Home'),
        );
      });
    }
  };

  render() {
    const {selectedImage, imageTitle, formError, isLoading} = this.state;
    return (
      <View style={{...styles.container}}>
        <SpinnerLoader isLoading={isLoading} />
        <Header
          {...this.props}
          leftIcon={'chevron-back'}
          leftBtnPress={() => this.handleNavigation('Home')}
        />
        {selectedImage ? (
          <SelectedImageCard
            imageUri={selectedImage}
            selectedImagePress={this.handleImagePicker}
          />
        ) : (
          <ChooseImageCard
            cardText={'Choose Image'}
            chooseImagePress={this.handleImagePicker}
          />
        )}
        <View style={{...styles.formContainer}}>
          <CustomTextInput
            value={imageTitle}
            placeholderText={'Image Title'}
            onChange={(text) => this.onChangeImageTitle(text)}
          />
          {/* Shows form errors */}
          {formError ? <ErrorText errorText={formError} /> : null}
          <CustomButton
            btnText={'Post'}
            btnPress={() => this.checkValidation()}
          />
        </View>
      </View>
    );
  }
}

export default AddPhoto;
