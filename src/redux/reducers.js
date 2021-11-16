import * as actions from './actionTypes';

const initialState = {
  page: 1,
  movies: [],
  searchMoviesList: [],
  filter: 'all',
  loading: true,
  modal: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.value.results],
        loading: false,
      };

    case actions.SEARCH:
      return {
        ...state,
        searchMoviesList: action.payload.value.results,
        loading: false,
      };

    case actions.SET_FILTER:
      return {
        ...state,
        filter: action.payload.value,
        // loading: false,
      };

    case actions.LOADING:
      return {
        ...state,
        loading: true,
      };

    case actions.SHOW_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};
