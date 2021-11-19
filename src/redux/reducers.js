import * as actions from './actionTypes';

const initialState = {
  page: 1,
  movies: [],
  searchMoviesList: [],
  genders: [],
  filter: 'all',
  loading: true,
  modal: false,
  movie: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.value.results],
        loading: false,
        page: state.page + 1,
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
        modal: true,
        movie: action.payload.value,
      };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };

    case actions.INIT_GENDERS:
      return {
        ...state,
        genders: [...state.genders, ...action.payload.value],
      };
    // case actions.LOAD_MORE_MOVIES:
    //   return {
    //     ...state,
    //     // page: state.page + 1,
    //     movies: [...state.movies, ...action.payload.value.results],
    //   };
    default:
      return state;
  }
};
