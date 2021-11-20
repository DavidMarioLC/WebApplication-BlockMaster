import { useSelector } from 'react-redux';
import styled from 'styled-components';
import notFound from '../assets/images/notFound.svg';
const NotFoundSearch = () => {
  // const dispatch = useDispatch();
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
      {/* <ButtonBack onClick={() => dispatch(setFilterMovies('all'))}>
        Regresar
      </ButtonBack> */}
    </StyledNotFoundSearch>
  );
};

const ButtonBack = styled.button`
  cursor: pointer;
  background: none;
  color: #fed941;
  border: 1px solid #fed941;
  padding: 0.7rem 2rem;
  border-radius: 8px;
`;
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
