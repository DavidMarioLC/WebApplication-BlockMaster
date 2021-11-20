import { useSelector } from 'react-redux';
import styled from 'styled-components';
import notFound from '../assets/images/notFound.svg';
const NotFoundSearch = () => {
  const { searchWord } = useSelector((state) => state);

  return (
    <StyledNotFoundSearch>
      <Image
        width={450}
        height={450}
        src={notFound}
        alt='Imagen de busqueda no encontrada'
        title='Imagen de busqueda no encontrada'
      />
      <Title>
        No se encontrarón resultados para la busqueda de "{searchWord}"
      </Title>
    </StyledNotFoundSearch>
  );
};

const StyledNotFoundSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
`;
export default NotFoundSearch;
