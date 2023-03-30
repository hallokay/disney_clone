import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null

}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
        setMovies: (state, action) => {
            // console.log('영화 셋팅페이로드', action.payload);
            
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }

  }
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;

export const selectRecommend = state => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
