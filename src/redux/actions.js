import movieService from '../services/movie';
import * as actions from './actionTypes';

export const initStateMovies = () => async (dispatch, getSatate) => {
  const { page } = getSatate();

  const movies = await movieService.getAll(page);

  dispatch({
    type: actions.INIT_MOVIES,
    payload: {
      value: movies,
    },
  });
};

export const initGenderMovies = () => async (dispatch) => {
  const { genres } = await movieService.getAllGenders();
  dispatch({
    type: actions.INIT_GENDERS,
    payload: {
      value: genres,
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

export const showModal = (movie) => ({
  type: actions.SHOW_MODAL,
  payload: {
    value: movie,
  },
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL,
});
