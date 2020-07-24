import React from 'react';
import CardDetail from '../../src/components/CardDetail';
import renderer from 'react-test-renderer';

describe('CardDetail should render correctly', () => {
    it('match snapshot', () => {
        const cardDetail = renderer
            .create(<CardDetail
                icon="close"
                color="#fff"
                title="Test"
                description="Test"
                image=""
                sub=""
                imageDescription="Test"
                bottom="Test"
                onPress={() => { }} />)
            .toJSON();
        expect(cardDetail).toMatchSnapshot();
    });
})