import styled from 'styled-components';
import { getAverage } from '../utils/getAverage';

const Card = ({ movie }) => {
  const { poster_path, vote_average } = movie;
  return (
    <StyledCard>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt='image picsum'
        title='image title'
        width='220'
        height='330'
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
  width: 13.75rem;
  height: 20.625rem;
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
