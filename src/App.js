import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import LayoutMovies from './components/LayoutMovies';
import { initStateMovies } from './redux/actions';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initStateMovies());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <LayoutMovies>
        <Outlet />
      </LayoutMovies>
    </>
  );
};

export default App;
