import React from 'react';
import GoogleButtom from '../../src/components/GoogleButtom';
import renderer from 'react-test-renderer';

describe('GoogleButtom should render correctly', () => {
    it('match snapshot', () => {
        const googleButtom = renderer
            .create(<GoogleButtom />)
            .toJSON();
        expect(googleButtom).toMatchSnapshot();
    });
})