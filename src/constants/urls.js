const baseURL = process.env.REACT_APP_API;
const imageURL = process.env.REACT_APP_API_IMAGE;

const urls = {
    movies:'/discover/movie',
    movie:'/movie',
    genres:'/genre/movie/list',
}

export {
    baseURL,
    imageURL,
    urls
}