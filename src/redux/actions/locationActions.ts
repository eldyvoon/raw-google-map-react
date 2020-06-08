import { LocationActionTypes } from './types';

export const changeLocation = (location) => {
  return async (dispatch) => {
    dispatch({
      type: LocationActionTypes.FETCH_SOMETHING_LOADING_START,
    });

    //thunk demo with fake side effect
    const fakePromise = () =>
      new Promise((resolve, reject) => setTimeout(resolve, 800));

    try {
      // eslint-disable-next-line
      const response = await fakePromise();

      dispatch({
        type: LocationActionTypes.FETCH_SOMETHING_LOADING_DONE,
      });

      dispatch({
        type: LocationActionTypes.SET_LOCATION,
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: LocationActionTypes.FETCH_SOMETHING_ERROR,
        payload: 'something went wrong',
      });
    }
  };
};
