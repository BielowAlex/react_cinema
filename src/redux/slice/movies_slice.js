import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const getAllGenres = createAsyncThunk(
    'moviesSlice/getAllGenres',
    async () => {
        const {data} = await moviesService.getGenres();
        return data.genres;
    }
);

const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({pageNum, genreId}) => {
        const {data} = await moviesService.getMovie(pageNum, genreId);
        return data;
    }
);

const searchMovie = createAsyncThunk(
    'moviesSlice/searchMovie',
    async ({value,pageNum}) => {
        const {data} = await moviesService.search(value,pageNum);
        return data;
    }
);



const initialState = {
    Movies: [],
    Genres: [],
    isLoaded:false,
    actualMovie: null,
    genreId: '',
    pageNum: 1,
    pageTotal:500
};
const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setFilterGenre: (state, action) => {
            state.genreId = action.payload;
            state.pageNum = 1
        },
        nextPage: (state) => {
            state.pageNum = state.pageNum + 1;
            state.isLoaded = !state.isLoaded
        },
        previousPage: (state) => {
            state.pageNum -= 1;
            state.isLoaded = !state.isLoaded
        },
        setActualMovie: (state, action) => {
            // localStorage.setItem("movieID",action.payload);
            state.actualMovie = action.payload
        },
        setLoading:(state)=>{
        }


    },
    extraReducers: {
        [getAllGenres.fulfilled]: (state, action) => {
            state.Genres = action.payload;
        },
        [getMovies.fulfilled]: (state, action) => {
            state.Movies = action.payload.results;
            state.pageTotal = action.payload.total_pages;
            state.isLoaded = true;

        },
        [searchMovie.fulfilled]: (state, action) => {
            console.log(action.payload.results);
            state.Movies = action.payload.results;
            // state.pageTotal = action.payload.total_pages;

        },


    }
});

const {
    reducer: moviesReducer,
    actions: {setFilterGenre, nextPage, previousPage, setActualMovie}
} = moviesSlice

const moviesAction = {
    getAllGenres,
    setFilterGenre,
    getMovies,
    nextPage,
    previousPage,
    setActualMovie,
    searchMovie
}

export {
    moviesAction,
    moviesReducer
}