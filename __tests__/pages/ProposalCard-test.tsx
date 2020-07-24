import React from 'react';
import ProposalCard from '../../src/pages/Dashboard/ProposalCard';
import IProposal from "../../src/interfaces/IProposal"
import renderer from 'react-test-renderer';

describe('ProposalCard should render correctly', () => {
    it('match snapshot', () => {
        const proposalcard = renderer
            .create(<ProposalCard proposal={{} as IProposal} />)
            .toJSON();
        expect(proposalcard).toMatchSnapshot();
    });
})