import React from 'react';
import Input from 'components/Shared/Input';
import { string } from 'prop-types';

const SearchBar = ({ searchValue = "" }) => (
    <Input
        value={searchValue}
    />
);

SearchBar.propTypes = {
    searchValue: string
};

export default React.memo(SearchBar);