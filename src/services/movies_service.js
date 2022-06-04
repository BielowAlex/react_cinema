import {axiosService} from "./axios_service";
import {urls} from "../constants";

const moviesService = {
    getMovie:(pageNum,genreId)=>axiosService
        .get(`${urls.movies}?page=${pageNum}&with_genres=${genreId}`),

    getMovieByID:(movieID)=> axiosService
        .get(`${urls.movie}/${movieID}?append_to_response=videos`),

    getGenres:()=>axiosService.get(urls.genres),

    search:(value,pageNum)=>axiosService
        .get(`${urls.search}?query=${value}&page=${pageNum}`),
}

export {
    moviesService
}
