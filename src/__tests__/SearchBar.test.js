import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from 'components/SearchBar';
import Input from 'components/Shared/Input';

describe('<SearchBar />', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<SearchBar />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('renders a search bar', () => {
        expect(wrapped.find(Input).length).toEqual(1);
    });
});