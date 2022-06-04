import React from 'react';
import {Genres, MoviesList, Navigate} from "../../components";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div className="content">
            <Genres dispatch={dispatch}/>
            <MoviesList dispatch={dispatch}/>
            <Navigate dispatch={dispatch}/>
        </div>
    );
};

export {Home};
