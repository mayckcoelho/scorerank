import React from 'react';

import { StyledButtom, ButtomText } from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

const FacebookButtom: React.FC = () => (
    <StyledButtom>
        <Icon name="facebook" size={16} color="#fff" />
        <ButtomText>Continuar com Facebook</ButtomText>
    </StyledButtom>
);

export default FacebookButtom;