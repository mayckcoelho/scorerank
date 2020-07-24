import React from 'react';
import SignInForm from '../../src/pages/SignIn/SignInForm';
import renderer from 'react-test-renderer';

describe('SignInForm should render correctly', () => {
    it('match snapshot', () => {
        const signinform = renderer
            .create(<SignInForm />)
            .toJSON();
        expect(signinform).toMatchSnapshot();
    });
})