import React from 'react';
import FacebookButtom from '../../src/components/FacebookButtom';
import renderer from 'react-test-renderer';

describe('FacebookButtom should render correctly', () => {
    it('match snapshot', () => {
        const facebookButtom = renderer
            .create(<FacebookButtom />)
            .toJSON();
        expect(facebookButtom).toMatchSnapshot();
    });
})