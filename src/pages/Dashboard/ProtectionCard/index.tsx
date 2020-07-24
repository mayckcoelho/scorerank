import React, { useState } from 'react';
import IProtection from "../../../interfaces/IProtection";
import CardDetail from "../../../components/CardDetail";
import Modal from "../../../components/Modal";
import { useAuth } from '../../../contexts/auth';
import { useDispatch } from 'react-redux'
import { accept } from "../../../ducks/protections";

interface Props {
    protection: IProtection;
}

const ProtectionCard: React.FC<Props> = ({ protection }) => {
    const [visible, setVisible] = useState(false)
    const { updateScore } = useAuth();
    const dispatch = useDispatch();

    return (
        <>
            <CardDetail key={protection.id}
                onPress={() => setVisible(true)}
                icon="lock"
                color="#083059"
                title="Proteja seu RG"
                description="Aprenda sobre o nosso programa de proteção de RG!"
                image={protection.image}
                sub={protection.tax}
                imageDescription={`${protection.value}`}
                bottom="Ver oferta" />
            <Modal
                isVisible={visible}
                image={protection.image}
                close={() => setVisible(false)}
                title="Não deixe para depois. Proteja seu RG e ainda aumente seu Score!"
                sub={protection.tax}
                description={protection.value}
                action={() => {
                    dispatch(accept(protection.id));
                    setVisible(false);
                    updateScore();
                }}
                actionText="Aceitar proposta"
            />
        </>
    )
}

export default ProtectionCard;