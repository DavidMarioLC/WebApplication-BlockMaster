import { AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { searchByName, setFilterMovies } from '../redux/actions';
import { Wrapper } from './Wrapper';

const Header = () => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const isActiveLink = useSelector((state) => state.filter);

  const handlerSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: e.target.search.value });
    dispatch(searchByName(e.target.search.value));
    dispatch(setFilterMovies('search'));
  };

  const handlerLinks = (value) => {
    dispatch(setFilterMovies(value));
  };

  return (
    <StyledHeader>
      <Wrapper>
        <div className='header-content'>
          <NavLink to='/' onClick={() => handlerLinks('all')}>
            <Logo
              src={logo}
              width='100'
              height='64'
              title='Logo Block Master'
              alt='Logo Block Master'
            />
          </NavLink>
          <Navigation>
            <Menu>
              <MenuItem>
                <NavLink
                  onClick={() => handlerLinks('all')}
                  style={{
                    color: isActiveLink === 'all' ? 'yellow' : 'white',
                  }}
                  to='/'
                >
                  Todas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => handlerLinks('most-valued')}
                  style={{
                    color: isActiveLink === 'most-valued' ? 'yellow' : 'white',
                  }}
                  to='/?filterby=mas-valoradas'
                >
                  Más valoradas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  onClick={() => handlerLinks('least-valued')}
                  style={{
                    color: isActiveLink === 'least-valued' ? 'yellow' : 'white',
                  }}
                  to='/?filterby=menos-valoradas'
                >
                  Menos valoradas
                </NavLink>
              </MenuItem>
            </Menu>
          </Navigation>
          <Search onSubmit={handlerSearch}>
            <input
              className='search-input'
              type='text'
              placeholder='Search by name...'
              name='search'
            />
            <button className='search-button'>
              <BsSearch />
            </button>
          </Search>
          <div className='header-actions'>
            <ButtonSearch>
              <BsSearch />
            </ButtonSearch>
            <ButtonMenu>
              <AiOutlineMenu />
            </ButtonMenu>
          </div>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const ButtonSearch = styled.button`
  height: 3rem;
  width: 3rem;
  background: none;
  border: none;
  color: #fed941;
  font-size: 1.5rem;
`;
const ButtonMenu = styled.button`
  height: 3rem;
  width: 3rem;
  background: none;
  border: none;
  color: #fed941;
  font-size: 1.5rem;
`;

const Navigation = styled.nav``;

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  gap: 48px;
  font-weight: bold;
  color: #fff;
`;

const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Search = styled.form.attrs({
  'aria-label': 'Search',
})`
  display: flex;

  .search-input {
    border: none;
    font-size: 1.25rem;
    padding: 0.625rem 1.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .search-button {
    border: none;
    padding: 0.625rem 1.5rem;
    font-size: 1.25rem;
    background: #fed941;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

const StyledHeader = styled.header`
  .header-content {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-actions {
    display: flex;
    gap: 1rem;
  }

  ${Navigation},${Search} {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .header-actions {
      display: none;
    }

    ${Navigation},${Search} {
      display: flex;
    }
  }
`;

export default Header;
