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
  top:0;
  left: 0;
  right: 0;
  opacity: .8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }

`;
const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  
`;
export default Detail;
