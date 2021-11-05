import styled from "styled-components";

const TitleSection = ({ children }) => {
  return <StyledTitleSection>{children}</StyledTitleSection>;
};

const StyledTitleSection = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
`;

export default TitleSection;
