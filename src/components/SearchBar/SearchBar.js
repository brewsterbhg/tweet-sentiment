import React, { Fragment } from 'react';
import search from './search.svg';
import './search-bar.css';
import { string, func } from 'prop-types';

const SearchBar = ({ value, onChange, onKeyPress, onClick }) => (
    <Fragment>
        <div className='search-wrapper'>
            <input
                type='text'
                className='searchbar'
                id='search-tweets'
                required
                autoComplete="off"
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <label htmlFor='search-tweets'>
                <span>Check hate status</span>
            </label>
        </div>
        <img
            src={search}
            alt='search icon'
            className='search-icon'
            onClick={onClick}
        />
    </Fragment>
);

SearchBar.propTypes = {
    value: string,
    onChange: func.isRequired,
    onKeyPress: func.isRequired,
    onClick: func.isRequired
};

export default React.memo(SearchBar);