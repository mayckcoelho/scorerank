import React from 'react';
import Buttom from '../../src/components/Buttom';
import renderer from 'react-test-renderer';

describe('Buttom should render correctly', () => {
    it('match snapshot', () => {
        const buttom = renderer
            .create(<Buttom text="Teste" color="#fff" />)
            .toJSON();
        expect(buttom).toMatchSnapshot();
    });
})