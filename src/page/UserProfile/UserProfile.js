import React from 'react';
import {useSelector} from "react-redux";

const UserProfile = () => {

    const {user:{userName,name,surname,email}} = useSelector(state=>state.user)

    return (
        <div className="user_profile">
            <img width={300} height={300} src="/img/anonim.png" alt="avatar"/>
            <ul className="user_info">
                <li>
                    <h3>Username:</h3>
                    <span>{userName}</span>
                </li>
                <li>
                    <h3>Name:</h3>
                    <span>{name}</span>
                </li>
                <li>
                    <h3>Surname:</h3>
                    <span>{surname}</span>
                </li>
                <li>
                    <h3>Email:</h3>
                    <span>{email}</span>
                </li>


            </ul>
        </div>
    );
};

export {UserProfile};
