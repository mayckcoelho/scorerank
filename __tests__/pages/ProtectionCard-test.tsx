import React from 'react';
import ProtectionCard from '../../src/pages/Dashboard/ProtectionCard';
import IProtection from "../../src/interfaces/IProtection"
import renderer from 'react-test-renderer';

describe('ProtectionCard should render correctly', () => {
    it('match snapshot', () => {
        const protectioncard = renderer
            .create(<ProtectionCard protection={{} as IProtection} />)
            .toJSON();
        expect(protectioncard).toMatchSnapshot();
    });
})