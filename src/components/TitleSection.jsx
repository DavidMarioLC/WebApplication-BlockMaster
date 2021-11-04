import styled from "styled-components";

const TitleSection = ({ children }) => {
  return <StyledTitleSection>{children}</StyledTitleSection>;
};

const StyledTitleSection = styled.h1`
  color: #fff;
`;

export default TitleSection;
