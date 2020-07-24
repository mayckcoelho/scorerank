import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { StyledButtom, ButtomText } from './styles';
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

interface Props {
    text: string;
    color: string;
};

type ButtomProps = TouchableOpacityProps & Props;

const Buttom: React.FC<ButtomProps> = ({ text, color, onPress }) => {
    return (
        <StyledButtom style={{ backgroundColor: color }} onPress={onPress}>
            <ButtomText>{text}</ButtomText>
        </StyledButtom>
    );
}

export default Buttom;