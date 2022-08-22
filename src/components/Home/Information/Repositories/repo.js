import React from 'react';

const Repo = ( props ) => {
    
    const { title, url, cover, live_view } = props.repo;

    return (
        <div className="repo">
            <div className="repo-wrapper">
                <div className="repo-cover">
                    <div className="repo-options">
                        <a href={url} target='_blank' rel='noreferrer'>
                            <img src='./assets/images/code.svg' alt='view code'/>
                        </a>
                        <a href={live_view} target='_blank' rel='noreferrer'>
                            <img src='./assets/images/live-view.svg' alt='live view'/>
                        </a>
                    </div>
                    <img  src={cover} alt={`project ${title} cover`} />
                </div>
                {/* <p className="description">{description}</p> */}
                <p className="title">
                        {title}
                </p>
            </div>
        </div>   
    )
}

export default Repo;