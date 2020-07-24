import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import Card from "../Card";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import {
    CardTitleView,
    CardTitle,
    Separator,
    CardDescription,
    BottomText,
    CardView,
    SubText,
    Description,
    ImageContent
} from './styles';

interface Props {
    icon: string;
    color: string;
    background?: string;
    title: string;
    description: string;
    image: string;
    sub: string;
    subLineThrough?: boolean;
    imageDescription: string;
    bottom: string;
    onPress(): void;
}

const CardDetail: React.FC<Props> = ({ icon, color, background, title, description, image, sub, subLineThrough, imageDescription, bottom, onPress }) => {

    return (
        <Card background={background}>
            <CardTitleView>
                <Icon name={icon} color={color} size={22} />
                <CardTitle style={{ color: color }}>{title}</CardTitle>
            </CardTitleView>
            <Separator />
            <CardDescription>{description}</CardDescription>
            <CardView>
                <ImageContent source={{ uri: image }} resizeMode="contain" />
                <View>
                    <SubText style={{ textDecorationLine: subLineThrough ? "line-through" : "none" }}>{sub}</SubText>
                    <Description>{imageDescription}</Description>
                </View>
            </CardView>
            <TouchableOpacity onPress={onPress}>
                <BottomText>{bottom}</BottomText>
            </TouchableOpacity>
        </Card>
    );
}

export default CardDetail;