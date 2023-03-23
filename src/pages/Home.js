import styled from 'styled-components';
import { ImgSlider, NewDisney, Recommends, Viewers } from '../components/index'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import {setMovies} from '../store/features/movie/movieSlice'
import {selectUserName} from '../store/features/user/userSlice'
// firebaseconfig 에서 import한 db
import { db } from '../config/firebase';
// db에 접근해서 데이터를 꺼내게 도와줄 애들
import {collection, getDocs} from 'firebase/firestore';

const Home = () => {
    // const dispatch = useDispatch();
    // const userName = useSelector(selectUserName);
    
    // 파이어베이스 스토어 movies 컬렉션에서 데이터를 가져옴
    // const moviesCollectionRef = collection(db, 'movies');
    
    const fetchData = async () => {
      // 비동기로 파이어베이스 스토어에서 데이터 받기
      const snapshot = await getDocs(collection(db, "movies"));
      // const snapshot = await getDocs(moviesCollectionRef);
        const dataArr = snapshot.docs.map( doc => ({
            id: doc.id,
            ...doc.data()
        }))
        console.log(dataArr);
    }
    
    useEffect(() => {
fetchData();
    }, []);
  return (
  <Container>
    <ImgSlider />
    <Viewers />
    <Recommends />
    <NewDisney />
  </Container>
  );
}

const Container = styled.main `
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: 0 calc(3.5vw + 5px);

    &::after {
        position: absolute;
        content: '';
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`




export default Home