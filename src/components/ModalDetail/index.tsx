import React from 'react';
import ModalDefault from "react-native-modal";

import {
    Content,
    Indicator,
    CloseButton,
    CloseText
} from './styles';

interface Props {
    isVisible: boolean;
    close(): void;
}

const ModalDetail: React.FC<Props> = ({ isVisible, children, close }) => {
    return (
        <ModalDefault style={{ margin: 0 }} isVisible={isVisible}>
            <Content>
                <Indicator />
                {children}
                <CloseButton onPress={close}>
                    <CloseText>Fechar</CloseText>
                </CloseButton>
            </Content>
        </ModalDefault>
    )
}

export default ModalDetail;