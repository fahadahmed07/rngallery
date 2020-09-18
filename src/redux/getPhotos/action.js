import {simpleApiGetWithoutToken} from '../../services/apiCalls';
import {photos_Api} from '../../config/WebServices';
export const GET_PHOTOS = 'GET_PHOTOS';

export const getPhotos = (payload) => {
  return async (dispatch) => {
    try {
      let response = await simpleApiGetWithoutToken(photos_Api);
      dispatch({
        type: GET_PHOTOS,
        payload: {...response},
      });
    } catch (error) {
      console.log(error, 'erroeeer');
    }
  };
};
