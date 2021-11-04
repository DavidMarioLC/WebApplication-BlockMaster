import styled from "styled-components";

const GridMovies = ({ children }) => {
  return <StyledGridMovies>{children}</StyledGridMovies>;
};

const StyledGridMovies = styled.section`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(min-content, 220px));
  place-content: center;
  gap: 1rem;
`;

export default GridMovies;
