import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { showModal } from '../redux/actions';

const Modal = () => {
  const dispatch = useDispatch();

  const handlerCloseModal = () => {
    dispatch(showModal());
  };
  return (
    <StyledWrapper>
      <Dialog>
        <ThumbnailWrapper>
          <Thumbnail src='https://picsum.photos/220/330' alt='' />
        </ThumbnailWrapper>
        <Content>
          <Title>Title modal</Title>
          <Overview>
            Arielle nació en un pueblo pequeño, pero sueña con ser famosa. Tras
            conocer a Dean, un delincuente, la pareja empieza a asaltar negocios
            y presumir de sus fechorías en las redes sociales, en busca de una
            notoriedad manchada de sangre.
          </Overview>
          <Details>
            <li>2020</li>
            <li className='dots'>Crimen/Suspenso</li>
            <li>1h 40m</li>
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
`;

const Thumbnail = styled.img`
  border-radius: 4px;
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
`;

const Details = styled.ul`
  list-style: none;
  color: #a7a9be;
  display: flex;
  gap: 2rem;
  font-size: 1rem;

  .dots {
    position: relative;
  }

  .dots::before {
    content: '●';
    left: -16px;
    color: #a7a9be;
    position: absolute;
  }
  .dots::after {
    content: '●';
    right: -16px;
    color: #a7a9be;
    position: absolute;
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
