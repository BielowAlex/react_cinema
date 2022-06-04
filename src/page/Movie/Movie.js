import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";

import {createMovieDBImage} from "../../hooks";
import {moviesService} from "../../services";
import {Trailer} from "../../components";

const Movie = () => {
    const [trailer, setTrailer] = useState(null);
    const {Genres, actualMovie} = useSelector(state => state.movies);
    const {backdrop_path, id, genre_ids, original_title, overview, vote_average} = actualMovie;

    useEffect(() => {
            moviesService.getMovieByID(id)
                .then(({data}) => setTrailer(
                        data.videos.results.find(vid => vid.name === 'Official Trailer')
                    )
                );
        },
        []);

    return (
        <div className="movie">

            <div className="desc">
                <div className="poster">
                    <img width={250} height={250} src={createMovieDBImage(backdrop_path)} alt="poster"/>
                    <StarRatings
                        rating={vote_average / 2}
                        starDimension='40px'
                        numberOfStars={5}
                        starSpacing="1px"
                        starRatedColor='orange'/>
                </div>
                <div className="title">
                    <div className="title_top">
                        <h2>{original_title}</h2>
                        <p>{overview}</p>
                    </div>
                    <ul className="title_bottom">
                        {genre_ids.length > 1 && genre_ids
                            .map(id => <li key={id}>{Genres.find(genre => genre.id === id).name}</li>)}
                        {genre_ids.length === 1 &&
                            <li>{Genres.find(genre => genre.id === genre_ids[0]).name}</li>}
                    </ul>
                </div>
            </div>
            <Trailer trailer={trailer}/>

        </div>
    );

};

export {Movie};
