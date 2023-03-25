import styled from "styled-components";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const AddMovie = () => {
  const [bgUrl, setBgUrl] = useState("");
  const [cardUrl, setCardUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [title, setTitle] = useState("");
  const [titleImg, setTitleImg] = useState("");
  const [type, setType] = useState("recommend");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      backgroundImg: bgUrl,
      cardImg: cardUrl,
      description: desc,
      subTitle,
      title,
      titleImg,
      type,
    };
    console.log("hi", data);
    try {
      const res = await addDoc(collection(db, "movies"), data);
      setBgUrl("");
      setCardUrl("");
      setDesc("");
      setSubTitle("");
      setTitle("");
      setTitleImg("");
      setType("recommend");
      alert("등록되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setBgUrl(e.target.value)}
            placeholder="backgroundImg"
            value={bgUrl}
          />
          <input
            type="text"
            onChange={(e) => setCardUrl(e.target.value)}
            placeholder="cardImg"
            value={cardUrl}
          />
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="description"
            value={desc}
          />
          <input
            type="text"
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="subTitle"
            value={subTitle}
          />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            value={title}
          />
          <input
            type="text"
            onChange={(e) => setTitleImg(e.target.value)}
            placeholder="titleImg"
            value={titleImg}
          />
          <select onChange={(e) => setType(e.target.value)} value={type}>
            <option key="recommend" value="recommend">
              recommend
            </option>
            <option key="trending" value="trending">
              trending
            </option>
            <option key="new" value="new">
              newDisney
            </option>
            <option key="original" value="original">
              original
            </option>
          </select>
          <button>등록</button>
        </form>
      </Content>
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    position: absolute;
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
  input {
    display: block;
    height: 40px;
    width: 50%;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      width: 100%
    }
  }
`;
const Content = styled.div``;
export default AddMovie;
