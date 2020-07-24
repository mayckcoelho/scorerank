import React from 'react';
import ModalDefault from "react-native-modal";
import ModalDetail from "../ModalDetail";

import {
    Content,
    Indicator,
    CloseButton,
    CloseText,
    ImageContent,
    Description,
    SubText,
    Button,
    ButtonText
} from './styles';

interface Props {
    isVisible: boolean;
    image: string | undefined;
    title: string;
    description: string | undefined;
    sub: string | undefined;
    actionText: string;
    close(): void;
    action(): void;
}

const Modal: React.FC<Props> = ({ isVisible, image, title, description, sub, actionText, close, action }) => {
    return (
        <ModalDetail isVisible={isVisible} close={close}>
            <ImageContent source={{ uri: image }} resizeMode="contain" />
            <Description style={{ alignSelf: "flex-start" }}>{title}</Description>
            <SubText>{sub}</SubText>
            <Description>{description}</Description>
            <Button onPress={action}>
                <ButtonText>{actionText}</ButtonText>
            </Button>
        </ModalDetail>
    )
}

export default Modal;