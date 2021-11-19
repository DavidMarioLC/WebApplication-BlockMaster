import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { showModal } from '../redux/actions';
import { getAverage } from '../utils/getAverage';

const Card = ({ movie }) => {
  const dispatch = useDispatch();

  const { poster_path, vote_average, title } = movie;

  const handlerCLickCard = () => {
    dispatch(showModal(movie));
  };

  return (
    <StyledCard onClick={() => handlerCLickCard()}>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        title={title}
        loading='lazy'
      />
      <VoteAverage average={getAverage(vote_average)}>
        {vote_average}
      </VoteAverage>
    </StyledCard>
  );
};

const StyledCard = styled.div.attrs({ tabIndex: 0 })`
  position: relative;
  cursor: pointer;

  &:focus-visible {
    border-radius: 0.5rem;
    outline: 4px solid #f1f506;
  }
`;

const Poster = styled.img`
  display: block;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 30px -3px rgba(0, 0, 0, 0.507);
  width: 100%;
`;

const VoteAverage = styled.p`
  height: 50px;
  width: 50px;
  background: #0f0e17c5;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${({ average }) => (average ? 'red' : 'yellow')};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #fff;
`;

export default Card;
