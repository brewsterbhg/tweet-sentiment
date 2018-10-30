import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import SearchBar from 'components/SearchBar';

describe('<App />', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('renders a search bar', () => {
        expect(wrapped.find(SearchBar).length).toEqual(1);
    });
});