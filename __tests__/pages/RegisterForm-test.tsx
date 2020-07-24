import React from 'react';
import RegisterForm from '../../src/pages/Register/RegisterForm';
import renderer from 'react-test-renderer';

describe('RegisterForm should render correctly', () => {
    it('match snapshot', () => {
        const registerform = renderer
            .create(<RegisterForm />)
            .toJSON();
        expect(registerform).toMatchSnapshot();
    });
})