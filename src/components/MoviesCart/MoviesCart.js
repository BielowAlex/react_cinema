import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";
import {moviesAction} from "../../redux";
import {createMovieDBImage} from "../../hooks";

const MoviesCart = ({movie,dispatch}) => {
    const {backdrop_path, original_title, overview, vote_average} = movie;

    const setActualMovie = () => {
        dispatch(moviesAction.setActualMovie(movie))
    }

    return (
        <Link to="/movie" className="movies_cart" onClick={setActualMovie}>
            <div className="desc">
                <img width={200} height={200} className="poster" src={createMovieDBImage(backdrop_path)} alt="poster">
                </img>
                <img width={50} height={50} className="play" src="img/play-1.png" alt="play"/>
                <h3>{original_title}</h3>

            </div>
            <p className="overview">
                {overview}
            </p>
            <div className="rating">
                <StarRatings
                    rating={vote_average / 2}
                    starDimension='20px'
                    numberOfStars={5}
                    starSpacing="1px"
                    starRatedColor='orange'/> {vote_average}
            </div>
        </Link>
    );
};

export {MoviesCart};
