import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from '../redux/actions';

const Modal = () => {
  const dispatch = useDispatch();
  const { movie, genders } = useSelector((state) => state);
  const handlerCloseModal = () => {
    dispatch(closeModal());
  };

  const { title, poster_path, overview, genre_ids } = movie;

  //filtering an array of objects genders based on array of genders ids
  const listGenders = genders.filter((gender) => genre_ids.includes(gender.id));

  return (
    <StyledWrapper>
      <Dialog>
        <ThumbnailWrapper>
          <Thumbnail
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            title={title}
            width='220'
            height='330'
            loading='lazy'
          />
        </ThumbnailWrapper>
        <Content>
          <Title>{title}</Title>
          <Overview>{overview}</Overview>
          <Details>
            <li>2021</li>

            <li className='tags'>
              {listGenders.map((gender) => (
                <Tag key={gender.id}>{gender.name}</Tag>
              ))}
            </li>
          </Details>
          <ButtonActions>
            <Button isPrimary>
              <BsFillPlayFill />
              VER AHORA
            </Button>
            <Button>
              <AiOutlinePlus />
              VER DESPUÉS
            </Button>
          </ButtonActions>
        </Content>
        <ButtonClose onClick={handlerCloseModal}>
          <IoMdClose />
        </ButtonClose>
      </Dialog>
    </StyledWrapper>
  );
};

const Tag = styled.span`
  border: 1px solid #a7a9be;
  border-radius: 5px;
  padding: 3px;
`;
const StyledWrapper = styled.div`
  background: hsl(246, 24%, 7%, 0.92);
  position: fixed;
  z-index: 2;
  inset: 0;

  display: flex;

  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  position: relative;
  display: flex;

  gap: 2rem;
  padding: 0 1rem;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 50%;
  }
`;

const ThumbnailWrapper = styled.div`
  text-align: center;
  flex-shrink: 0;
`;

const Thumbnail = styled.img`
  border-radius: 4px;
  max-width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.6rem;
`;

const Overview = styled.p`
  color: #fff;
  line-height: 1.5rem;
  font-size: 1rem;
  text-overflow: ellipsis;
`;

const Details = styled.ul`
  list-style: none;
  color: #a7a9be;
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;

  .tags {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;

const ButtonActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.625rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  background: ${({ isPrimary }) => (isPrimary ? '#FED941' : 'transparent')};
  border: 1px solid #fed941;
  color: ${({ isPrimary }) => isPrimary || '#FED941'};

  &:active {
    transform: scale(0.96);
  }
`;

const ButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: -24px;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;

  &:active {
    transform: scale(0.96);
  }
`;
export default Modal;
