import React from 'react'
import { Container, Content, Wrap } from "../assets/constants/commonCss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../store/features/movie/movieSlice";


const Originals = () => {
  const movies = useSelector(selectOriginal);

  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies?.map((movie, i) => (
            <Wrap key={i}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Originals