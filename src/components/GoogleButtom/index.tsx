import React from 'react';

import { StyledButtom, ButtomText } from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

const GoogleButtom: React.FC = () => (
    <StyledButtom>
        <Icon name="google" size={16} color="#ea4335" />
        <ButtomText>Continuar com Google</ButtomText>
    </StyledButtom>
);

export default GoogleButtom;