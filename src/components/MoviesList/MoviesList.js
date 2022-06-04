import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {MoviesCart} from "../MoviesCart";
import {moviesAction} from "../../redux";
import {MovieCartLoader} from "../MovieCartLoader";

const MoviesList = ({dispatch}) => {


    const {Movies, pageNum, genreId, isLoaded} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(moviesAction.getMovies({pageNum, genreId}));
    }, [pageNum, genreId]);


    return (
        <div className="movies_list">
            {isLoaded
                ? Movies.map(movie =>
                    <MoviesCart
                        key={movie.id}
                        dispatch={dispatch}
                        movie={movie}/>)
                : Array(20).fill(<MovieCartLoader/>)
            }
        </div>
    );
};

export {MoviesList};
