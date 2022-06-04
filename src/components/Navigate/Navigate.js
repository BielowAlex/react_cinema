import React from 'react';
import {useSelector} from "react-redux";
import {moviesAction} from "../../redux";

const Navigate = ({dispatch}) => {
    const {pageNum,pageTotal} = useSelector(state => state.movies);

    const nextPage = ()=>{
        if(pageNum<500 && pageNum<pageTotal){
            dispatch(moviesAction.nextPage())
        }
    }
    const previousPage = ()=>{
        if(pageNum>1){
            dispatch(moviesAction.previousPage())
        }
    }

    return (
        <div className='navigate'>
            <span className="btn" onClick={previousPage}>previous</span>
            <b>{pageNum} ... {pageTotal>500?500:pageTotal}</b>
            <span className="btn" onClick={nextPage}>next</span>
        </div>
    );
};

export {Navigate};
