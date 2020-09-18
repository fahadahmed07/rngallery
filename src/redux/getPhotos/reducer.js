import {GET_PHOTOS} from './action';

const initialState = {
  photos: null,
  acceptedTerm: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {...state, photos: action.payload};
    default:
      return state;
  }
}
