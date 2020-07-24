import React from 'react';
import Register from '../../src/pages/Register';
import renderer from 'react-test-renderer';

describe('Register should render correctly', () => {
    it('match snapshot', () => {
        const register = renderer
            .create(<Register />)
            .toJSON();
        expect(register).toMatchSnapshot();
    });
})