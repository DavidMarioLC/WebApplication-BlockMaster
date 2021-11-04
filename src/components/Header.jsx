import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import logo from "../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div className="header-content">
          <a href="!#">
            <Logo
              src={logo}
              width="100"
              height="64"
              title="Logo Block Master"
              alt="Logo Block Master"
            />
          </a>
          <Navigation>
            <Menu>
              <MenuItem>
                <a href="!#">Todas</a>
              </MenuItem>
              <MenuItem>
                <a href="!#">Más valoradas</a>
              </MenuItem>
              <MenuItem>
                <a href="!#">Menos valoradas</a>
              </MenuItem>
            </Menu>
          </Navigation>
          <Search>
            <input
              class="search-input"
              type="text"
              placeholder="Search by name..."
            />
            <button class="search-button">
              <BsSearch />
            </button>
          </Search>
          <div className="header-actions">
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

const Search = styled.div.attrs({
  "aria-label": "Search",
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
