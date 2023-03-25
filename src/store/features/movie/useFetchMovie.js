// import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";

// firebaseconfig 에서 import한 db
import { db } from "./config/firebase";
// db에 접근해서 데이터를 꺼내게 도와줄 애들
import { collection, getDocs } from "firebase/firestore";

const useFetchMovie = () => {

      const dispatch = useDispatch();
      //   const userName = useSelector(selectUserName);
      const data = {
        recommends: [],
        newDisneys: [],
        originals: [],
        trending: [],
      };
      // 파이어베이스 스토어 movies 컬렉션에서 데이터를 가져옴
      // const moviesCollectionRef = collection(db, 'movies');

      const fetchData = async () => {
        // 비동기로 파이어베이스 스토어에서 데이터 받기
        // const snapshot = await getDocs(moviesCollectionRef);
        // const dataArr = snapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
        // console.log(dataArr);
        const snapshot = await getDocs(collection(db, "movies"));
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case "recommend":
              data.recommends = [
                ...data.recommends,
                {
                  id: doc.id,
                  ...doc.data(),
                },
              ];
              break;
            case "new":
              data.newDisneys = [
                ...data.newDisneys,
                {
                  id: doc.id,
                  ...doc.data(),
                },
              ];
              break;

            case "original":
              data.originals = [
                ...data.originals,
                {
                  id: doc.id,
                  ...doc.data(),
                },
              ];
              break;

            case "trending":
              data.trending = [
                ...data.trending,
                {
                  id: doc.id,
                  ...doc.data(),
                },
              ];
              break;
          }
        });
        dispatch(
          setMovies({
            recommend: data.recommends,
            newDisney: data.newDisneys,
            original: data.originals,
            trending: data.trending,
          })
        );
      };
  return fetchData;
}

export default useFetchMovie