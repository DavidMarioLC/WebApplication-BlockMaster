import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return <StyledSpinner></StyledSpinner>;
};

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const StyledSpinner = styled.div`
  height: 50px;
  width: 50px;
  border: 5px solid hsl(246, 24%, 10%);
  border-radius: 50%;
  border-left: 5px solid #fed941;
  animation: ${rotate} 1s linear infinite;
`;

export default Spinner;
