import React from 'react';
import { shallow } from 'enzyme';
import SearchContainer from './../components/SearchBar';
import SearchBar from './../components/SearchBar/SearchBar';

describe('<SearchContainer />', () => {
    let wrapped;
    let handleSearchResults = () => {};
    let searchValue = 'test';

    beforeEach(() => {
        wrapped = shallow(
            <SearchContainer
                handleSearchResults={handleSearchResults}
                defaultValue={searchValue}
            />
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('renders an searchbar component', () => {
        expect(wrapped.find(SearchBar).length).toEqual(1);
    });
});