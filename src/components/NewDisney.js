import React from 'react'
import { Container, Content, Wrap } from "../assets/constants/commonCss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../store/features/movie/movieSlice";

const NewDisney = () => {
  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <h4>새로운 Disney+</h4>
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


export default NewDisney