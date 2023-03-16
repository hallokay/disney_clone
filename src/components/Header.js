import styled from 'styled-components'
import { auth, provider } from '../firebase.js'
import { NavMenu } from './index'


const Header = () => {
    const handleAuth = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            alert(err.message)
        })
    }
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <NavMenu />
      <LoginBtn onClick={handleAuth}>Login</LoginBtn>
    </Nav>
  );
}

const Nav = styled.nav `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 1.6px;
    z-index: 3;
`
const Logo = styled.a `
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`
const LoginBtn = styled.a`
    background: rgba(0,0,0, .6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;
    cursor: pointer;

    &:hover {
        background: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

export default Header