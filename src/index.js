import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AllMovies from './components/AllMovies';
import LeastValuedMovies from './components/LeastValuedMovies';
import MostValuedMovies from './components/MostValuedMovies';
import NotFound from './components/NotFound';
import SearchMovies from './components/SearchMovies';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<AllMovies />} />
            <Route path='mas-valoradas' element={<MostValuedMovies />} />
            <Route path='menos-valoradas' element={<LeastValuedMovies />} />
            <Route path='search' element={<SearchMovies />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
