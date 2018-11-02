import React, { Fragment } from 'react';
import './input.css';

const Input = () => (
    <Fragment>
        <div id='input-container'>
            <div id='input'></div>
            <input />
        </div>
    </Fragment>
);

export default React.memo(Input);