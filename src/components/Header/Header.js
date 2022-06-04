import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux";

const Header = () => {
    const {user: {userName}} = useSelector(state => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <header className="header">
            <Link to="/" className='logo'>
                <img width={50} height={50} src="/img/cinema.png" alt="logo"/>
                <div className="logo_text">
                    <h3>REACT CINEMA</h3>
                    <span>Best cinema in the world!</span>
                </div>
            </Link>
            <div className="user">
                <img className="avatar" src="/img/anonim.png" alt="avatar"/>
                <Link to="user" className="username">{userName}</Link>
            </div>
        </header>
    );
};

export {Header};
