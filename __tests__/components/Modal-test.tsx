import React from 'react';
import Modal from '../../src/components/Modal';
import renderer from 'react-test-renderer';

describe('Modal should render correctly', () => {
    it('match snapshot', () => {
        const modal = renderer
            .create(<Modal
                isVisible={true}
                image=""
                title="test"
                description=""
                sub=""
                actionText=""
                close={() => { }}
                action={() => { }} />)
            .toJSON();
        expect(modal).toMatchSnapshot();
    });
})