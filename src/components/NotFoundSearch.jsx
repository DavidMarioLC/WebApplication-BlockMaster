import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import notFound from '../assets/images/notFound.svg';
const NotFoundSearch = () => {
  const [searchParams] = useSearchParams();
  const searchedWord = searchParams.get('search');

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
        No se encontrarón resultados para la busqueda de "{searchedWord}"
      </Title>
    </StyledNotFoundSearch>
  );
};

const StyledNotFoundSearch = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
`;
export default NotFoundSearch;
