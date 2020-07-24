import React from 'react';
import Card from '../../src/components/Card';
import renderer from 'react-test-renderer';

describe('Card should render correctly', () => {
    it('match snapshot', () => {
        const card = renderer
            .create(<Card background="#fff" />)
            .toJSON();
        expect(card).toMatchSnapshot();
    });
})