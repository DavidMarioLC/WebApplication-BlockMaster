import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { searchByName, setFilterMovies } from '../redux/actions';
import { Wrapper } from './Wrapper';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();
  const isActiveLink = useSelector((state) => state.filter);

  const handlerSearch = (e) => {
    if (!searchValue) return;
    e.preventDefault();
    setSearchParams({ search: searchValue });
    dispatch(searchByName(searchValue));
    dispatch(setFilterMovies('search'));
    resetForm();
  };

  const handlerLinks = (value) => {
    dispatch(setFilterMovies(value));
  };

  const handlerInput = (e) => {
    setSearchValue(e.target.value);
  };

  const resetForm = () => {
    setSearchValue('');
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
            <div style={{ display: 'flex' }}>
              <input
                value={searchValue}
                onChange={handlerInput}
                className='search-input'
                type='text'
                placeholder='Search by name...'
                name='search'
              />
              <button aria-label='boton buscar' className='search-button'>
                <BsSearch />
              </button>
            </div>
          </Search>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Navigation = styled.nav``;

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
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
    width: 100%;
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
    /* height: 80px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    //others styled_slider
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .header-content {
      flex-direction: row;
    }
  }
`;

export default Header;
