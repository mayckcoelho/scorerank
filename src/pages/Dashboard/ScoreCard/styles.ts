import styled from "styled-components/native";
import { Animated } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export const ScoreText = styled.Text`
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: bold;
    color: #676767;
    align-self: center;
`

export const ScoreDescription = styled.Text`
    font-size: 20px;
    color: #676767;
    align-self: center;
`
export const Separator = styled.View`
    background-color: #676767;
    width: 100%;
    height: 1px;
    margin: 20px 0;
`

export const SeeMore = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const SeeMoreText = styled.Text`
    font-size: 18px;
    color: #6a1e55;
    align-self: center;
    font-weight: bold;
    margin-right: 5px;
`

export const ScoreTemplateText = styled.Text`
    font-size: 16px;
    color: #676767;
    align-self: center;
`

export const ScoreTemplateItem = styled.View`
    flex:1;
    margin: 40px 1px 0;
`

export const Gradient = styled(LinearGradient)`
    margin-top: 20px;
    height: 13px;
`