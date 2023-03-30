import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    photo: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // 로그인 했을때 정보 받아서 저장
        setUserLoginDetails: (state, action) => {
            console.log( '유저정보저장소',action);
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        // 로그아웃했을 때 정보 없애기
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }

})

export const { setUserLoginDetails, setSignOut } = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;