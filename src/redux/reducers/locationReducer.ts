import { LocationActionTypes } from '../actions/types';

const initialState: LocationPayload = {
  lat: 0,
  lng: 0,
  loading: false,
  error: undefined,
};

export default function (
  state = initialState,
  action: { type: LocationActionTypes; payload: LocationPayload }
) {
  switch (action.type) {
    case LocationActionTypes.SET_LOCATION: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case LocationActionTypes.FETCH_SOMETHING_LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case LocationActionTypes.FETCH_SOMETHING_LOADING_DONE: {
      return {
        ...state,
        loading: false,
      };
    }

    case LocationActionTypes.FETCH_SOMETHING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
