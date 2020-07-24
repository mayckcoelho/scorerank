import React from 'react';
import SignIn from '../../src/pages/SignIn';
import renderer from 'react-test-renderer';

describe('SignIn should render correctly', () => {
    it('match snapshot', () => {
        const signin = renderer
            .create(<SignIn />)
            .toJSON();
        expect(signin).toMatchSnapshot();
    });
})