import {combineReducers} from 'redux';
import getPhotos from './getPhotos/reducer';

const reducers = combineReducers({
  getPhotos,
});

export default reducers;
