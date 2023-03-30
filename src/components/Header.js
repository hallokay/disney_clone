import { useEffect } from "react";
import styled from "styled-components";
import { NavMenu, UserInfo } from "./index";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
// 파이어베이스 - 이메일과 비밀번호로 로그인 할 때
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// 리덕스 저장소
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLoginDetails,
  setSignOut,
  selectUserName,
  selectUserPhoto,
} from "../store/features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    // auth정보가 있으면 유저로 받아서 홈으로 이동시켜주고 아니면 로그인페이지에..
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, [auth]);

  const handleAuth = async () => {
    if (!userName) {
      // await createUserWithEmailAndPassword(auth, email, password)
      await signInWithPopup(auth, provider)
        .then((result) => {
          // 여기 받아온 로그인 유저 정보를 리덕스에 저장
          console.log(result);
          // setUser(result?.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      auth.signOut().then(() => {
        dispatch(setSignOut());
        navigate("/");
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      })
    );
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      {/* 만약 유저가 있다면 메뉴를 없다면 로그인 버튼 */}
      {!userName ? (
        <LoginBtn onClick={handleAuth}>Login</LoginBtn>
      ) : (
        <>
          <NavMenu />
          <UserInfo
            userPhoto={userPhoto}
            userName={userName}
            handleAuth={handleAuth}
          />
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
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

  /* 모바일 테블릿 상태일때 */
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;
const Logo = styled.a`
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

  /* 모바일 테블릿 상태일때 */
  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginBtn = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
