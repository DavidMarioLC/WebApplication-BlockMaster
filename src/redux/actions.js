import movieService from '../services/movie';
import * as actions from './actionTypes';

export const initStateMovies = () => async (dispatch) => {
  const movies = await movieService.getAll();
  dispatch({
    type: actions.INIT_MOVIES,
    payload: {
      value: movies,
    },
  });
};

export const searchByName = (value) => async (dispatch) => {
  dispatch(loading());
  const movies = await movieService.getByName(value);

  dispatch({
    type: actions.SEARCH,
    payload: {
      value: movies,
    },
  });
};

export const setFilterMovies = (value) => ({
  type: actions.SET_FILTER,
  payload: {
    value,
  },
});

export const loading = () => ({
  type: actions.LOADING,
});

export const showModal = (value) => (dispatch) => {};
