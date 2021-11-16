import styled from 'styled-components';
import { Wrapper } from './Wrapper';
const LayoutMovies = ({ children }) => {
  return (
    <StyledLayoutMovies>
      <Wrapper>{children}</Wrapper>
    </StyledLayoutMovies>
  );
};

const StyledLayoutMovies = styled.main``;

export default LayoutMovies;
