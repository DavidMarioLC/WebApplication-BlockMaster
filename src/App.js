import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import LayoutMovies from './components/LayoutMovies';
import Slider from './components/Slider';
import { initGenderMovies, initStateMovies } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initGenderMovies());
    dispatch(initStateMovies());

    const observer = new IntersectionObserver(([e]) => {
      const { isIntersecting } = e;

      if (isIntersecting) {
        console.log(isIntersecting);
        dispatch(initStateMovies());
      }
    });
    observer.observe(window.intersector);
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider />
      <LayoutMovies>
        <Outlet />
      </LayoutMovies>
      <div id='intersector'></div>
    </>
  );
};

export default App;
