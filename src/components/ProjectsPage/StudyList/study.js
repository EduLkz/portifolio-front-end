import React from 'react';

const Study = ({ title, url, cover_url, short_text, published_at, has_repository, repository_url}) => {

    return (
        <div className='study'>
            <img className='study-cover' src={cover_url} alt={`${title} cover`}/>
            <div className='study-info'>
                <a onClick={() => {}} href={url} target='_blank' rel="noreferrer">
                    <p className='study-title'>{title}</p>
                </a>
                <div className="extra-info">
                    <p className='study-description'>{short_text}</p>
                    <p className='study-published-at'>{published_at}</p>
                </div>

                {
                has_repository  && (
                <a href={repository_url} target='_blank' rel="noreferrer" className='repo-link'>
                    <img src='/images/github.svg' alt='github icon'/>
                </a>
                )
                }
            </div>
        </div>
    );
}

export default Study;