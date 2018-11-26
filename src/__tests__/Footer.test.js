import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../components/Footer';

describe('<Footer />', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<Footer />);
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('renders the social links', () => {
        expect(wrapped.find('a').at(1).text()).toEqual('Personal');
        expect(wrapped.find('a').at(2).text()).toEqual('GitHub');
        expect(wrapped.find('a').at(3).text()).toEqual('Twitter');
        expect(wrapped.find('a').at(4).text()).toEqual('LinkedIn');
    });
});
