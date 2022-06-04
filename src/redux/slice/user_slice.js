import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const getUser = createAsyncThunk(
    'userSlice/getUser',
    async ()=>{
       const {data} = await axios.get('https://bielowalex.github.io/portfolio/user_db.json');
       return data.user
    }
);

const initialState = {
    user:{}
};
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    extraReducers:{
        [getUser.fulfilled]:(state,action)=>{
            state.user = action.payload;
        }
    }
});

const {reducer:userReducer} = userSlice

export {
    userReducer,
    getUser
}