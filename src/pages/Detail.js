import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
// 특정페이지만 가져오기
import { doc, getDoc } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  // console.log('id', id);

  const fetchData = async () => {
    const detailRef = doc(db, "movies", id);
    // console.log(detailRef);
    const res = await getDoc(detailRef);
    // console.log(res.data());
    setDetail(res.data());
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detail.backgroundImg} alt={detail.title} />
      </Background>

      <ImageTitle>
        <img alt={detail.title} src={detail.titleImg} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="trailer" />
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            {/* <div> */}
              <img src="/images/group-icon.png" alt="group-icon" />
            {/* </div> */}
          </GroupWatch>
        </Controls>
          <SubTitle>{detail.subTitle}</SubTitle>
          <Description>{detail.description}</Description>
      </ContentMeta>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: 100%;
      /* height: auto; */
    }
  }
`;
const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  --webkit-box-pack: start;
  margin: 0 auto;
  width: 100%;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;

  img {
    width: 35vw;
    max-width: 600px;
    min-width: 200px;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    margin: 0px 10px 0px 0px;
    padding: 0px 12px;
    font-size: 12px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  width: 44px;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background: #fff;
    display: inline-block;
    transition: all 0.5s ease-in;
    /* 가로 */
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    /* 세로 */
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
  &:hover {
    span {
      &:first-child {
        transform: translate(1px, 0px) rotate(-90deg);
      }
      &:nth-child(2) {
        transform: translateX(-8px) rotate(-90deg);
      }
    }
  }
`;
const GroupWatch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgb(0, 0, 0);
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
