import React from 'react';
import { shallow } from 'enzyme';
import TopBanner from './../components/TopBanner';

describe('<TopBanner />', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<TopBanner />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('renders the a header', () => {
        expect(wrapped.exists('h1')).toEqual(true);
        expect(wrapped.find('h1').text()).toEqual(`What Am I Supposed To Hate?`);
    });

    it('renders the subheader', () => {
        expect(wrapped.exists('h2')).toEqual(true);
        expect(wrapped.find('h2').text()).toEqual(`It's hard to keep up with what we need to be mad at, but this handy tool will help you gauge the internet's current sentiments.`);
    });
});