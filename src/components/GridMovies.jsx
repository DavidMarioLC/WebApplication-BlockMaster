import styled from 'styled-components';

const GridMovies = ({ children }) => {
  return <StyledGridMovies>{children}</StyledGridMovies>;
};

const StyledGridMovies = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  place-content: center;
  align-items: center;
  gap: 1rem;
`;

export default GridMovies;
