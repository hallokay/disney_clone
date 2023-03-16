import styled from "styled-components";
import { navMenu } from "../assets/constants/constants";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <NavMenuList>
      {navMenu.map((menu, i) => (
        <Link key={i} to={menu.to}>
          <img src={menu.icon} alt={menu.name} />
          <span>{menu.name}</span>
        </Link>
      ))}
    </NavMenuList>
     
  );
};

const NavMenuList = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-transform: uppercase;
    img {
      height: 20px;
      min-width: 20px;
      margin-right: 3px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        display: block;
        bottom: -6px;
        left: 0;
        right: 100%;
        background: #fff;
        height: 1px;
        transition: all 0.5s ease-in-out;
      }
    }

    &:hover {
      span::before {
        right: 0;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavMenu;
