import CardMovie from "./components/CardMovie";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Slider from "./components/Slider";
import LayoutMovies from "./components/LayoutMovies";
import TitleSection from "./components/TitleSection";
import GridMovies from "./components/GridMovies";
import Spinner from "./components/Spinner";

const GlobalStyle = createGlobalStyle`
  

  body{
    background: #0f0e17;
    margin: 0;
    font-family: 'Montserrat', sans-serif;

  }
  p{
    margin:0;
  }


`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Slider></Slider> */}
      <LayoutMovies>
        <TitleSection>Todas las peliculas</TitleSection>
        <GridMovies>
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </GridMovies>
        <Spinner />
      </LayoutMovies>
    </>
  );
};

export default App;
