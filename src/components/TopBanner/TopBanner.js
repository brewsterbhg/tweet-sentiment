import React, { Fragment } from 'react';
import './top-banner.css';

const TopBanner = () => (
    <Fragment>
        <div className='banner-wrapper'>
            <h1>What Am I Supposed To Hate?</h1>
            <h2>It's hard to keep up with what we need to be mad at, but this handy tool will help you gauge the internet's current sentiments.</h2>
        </div>
    </Fragment>
);

export default React.memo(TopBanner);