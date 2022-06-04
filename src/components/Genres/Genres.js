import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {moviesAction} from "../../redux";

const Genres = ({dispatch}) => {
    const {Genres, genreId} = useSelector(state => state.movies);

    const genreToggle = (genre) => {
        dispatch(moviesAction.setFilterGenre(genre.id));
    }

    useEffect(() => {
        dispatch(moviesAction.getAllGenres())
    }, [])


    return (
        <ul className="categories">
            <li className={genreId === '' ? "_active" : ""}
                onClick={() => genreToggle({id: ''})}>All
            </li>
            {Genres && Genres.map(genre =>
                <li key={genre.id}
                    className={genreId === genre.id ? "_active" : ""}
                    onClick={() => genreToggle(genre)}>{genre.name}</li>
            )}
        </ul>
    );
};

export {Genres};
