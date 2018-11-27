import React from 'react';
import { string, object } from 'prop-types';
import './tweet.css';

const Tweet = ({ id, user, status, score, date }) => {
    let scoreClass;
    let checkScore = parseInt(score.score);

    if (checkScore > 0) {
        scoreClass = 'positive';
    } else if (checkScore < 0) {
        scoreClass = 'negative';
    } else {
        scoreClass = 'default';
    }
    return (
        <div className={`tweet-wrapper ${scoreClass}`}>
            <div className='img-container'>
                <img src={user.profile_image_url_https} alt='User Avatar' />
                <h3>{user.screen_name}</h3>
            </div>
            <a
                href={`https://twitter.com/${user.screen_name}/status/${encodeURI(id)}`}
                className='status'
            >
                {status}
            </a>
            <div className='score'>{score.score}</div>
        </div>
    );
};

Tweet.propTypes = {
    id: string,
    user: object,
    status: string,
    score: object,
    date: string
};

export default Tweet;