import React, { useState } from 'react';
import IProposal from "../../../interfaces/IProposal";
import CardDetail from "../../../components/CardDetail";
import Modal from "../../../components/Modal";
import { useAuth } from '../../../contexts/auth';
import { useDispatch } from 'react-redux'
import { accept } from "../../../ducks/proposals";

interface Props {
    proposal: IProposal;
}

const ProposalCard: React.FC<Props> = ({ proposal }) => {
    const [visible, setVisible] = useState(false)
    const { updateScore } = useAuth();
    const dispatch = useDispatch();

    return (
        <>
            <CardDetail key={proposal.id}
                onPress={() => setVisible(true)}
                icon="credit-card"
                color="#2c585f"
                title="Propostas de crédito"
                description="Encontramos ofertas de cartão de crédito!"
                image={proposal.image}
                sub={proposal.tax}
                imageDescription={`Limite de ${proposal.value}`}
                bottom="Ver oferta" />
            <Modal
                isVisible={visible}
                image={proposal.image}
                close={() => setVisible(false)}
                title="Aproveite esta oferta de crédito e aumente seu Score!"
                sub={proposal.tax}
                description={`Limite de ${proposal.value}`}
                action={() => {
                    dispatch(accept(proposal.id));
                    setVisible(false);
                    updateScore();
                }}
                actionText="Aceitar proposta"
            />
        </>
    )
}

export default ProposalCard;