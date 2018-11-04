import React, { Fragment } from 'react';
import './top-banner.css';

const TopBanner = () => (
    <Fragment>
        <div className='banner-wrapper'>
            <h1>Who Am I Supposed To Hate?</h1>
            <h2>It's hard to keep up with who we need to be mad at, but this handy tool will help you visualize where to direct your anger</h2>
        </div>
    </Fragment>
);

export default React.memo(TopBanner);