import React from 'react';
import './userInfo.css'

const UserInfo = ( props ) => {

    const git_url = 'https://github.com/EduLkz/';
    const games_url = 'https://musloth-studios.itch.io/';
    const study_url = 'https://edurocha.itch.io/';
    const { user } = props;

    return (
        <div className="user">
            <img className='userAvatar' src={user.avatar_url} alt='user avatar'/>
            <div className="user-info">
                <span>User: </span><h2 className='login'>{user.login}</h2>
                <p>Git bio:</p>
                <p className='bio'>{user.bio}</p>
                <div className="links">
                    <p>Github: &ensp; 
                        <a href={git_url} target='_blank' rel="noreferrer">{git_url}</a>
                    </p>
                    <p>Jogos Publicados: &ensp; 
                        <a href={games_url} target='_blank' rel="noreferrer">{games_url}</a>
                    </p>
                    <p>Jogos de Estudos: &ensp; 
                        <a href={study_url} target='_blank' rel="noreferrer">{study_url}</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;