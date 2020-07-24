import React from 'react';
import ModalDetail from '../../src/components/ModalDetail';
import renderer from 'react-test-renderer';

describe('ModalDetail should render correctly', () => {
    it('match snapshot', () => {
        const modal = renderer
            .create(<ModalDetail
                isVisible={true}
                close={() => { }} />)
            .toJSON();
        expect(modal).toMatchSnapshot();
    });
})