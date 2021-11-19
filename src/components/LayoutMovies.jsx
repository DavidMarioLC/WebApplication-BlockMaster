import styled from 'styled-components';
import { Wrapper } from './Wrapper';
const LayoutMovies = ({ children }) => {
  return (
    <StyledLayoutMovies>
      <Wrapper>{children}</Wrapper>
    </StyledLayoutMovies>
  );
};

const StyledLayoutMovies = styled.main`
  padding: 2rem 0;
`;

export default LayoutMovies;
