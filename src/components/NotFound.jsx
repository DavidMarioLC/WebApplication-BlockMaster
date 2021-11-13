import styled from 'styled-components';

import imageNotFound from '../assets/images/404.svg';

const NotFound = () => {
  return (
    <StyledNotFound>
      <div>
        <Image src={imageNotFound} alt='Error de 404' title='Error de 404' />
        <h2>Lo sentimos, no tenemos peliculas para mostrar aqui</h2>
      </div>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
`;

export default NotFound;
