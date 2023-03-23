import React from 'react'
import { Container, Content, Wrap } from "../assets/constants/commonCss";
import {Link} from 'react-router-dom'

const Recommends = () => {
  return (
    <Container>
        <h4>당신을 위한 추천</h4>
        <Content>
            <Wrap>
                <Link to={`/`}>
                <img src="" alt="" />
                </Link>
            </Wrap>
        </Content>
    </Container>
  )
}



export default Recommends