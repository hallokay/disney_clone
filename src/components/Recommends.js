import React from 'react'
import { Container, Content, Wrap } from "../assets/constants/commonCss";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectRecommend} from '../store/features/movie/movieSlice'

const Recommends = () => {
  const movies = useSelector(selectRecommend);
  return (
    <Container>
        <h4>당신을 위한 추천</h4>
        <Content>
          {movies && movies?.map( (movie, i) => (
            <Wrap key={i}>
                <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
                </Link>
            </Wrap>
          ))
        }
        </Content>
    </Container>
  )
}



export default Recommends