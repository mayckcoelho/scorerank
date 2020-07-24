import styled from "styled-components/native";

export const Content = styled.View`
    background-color: #fff;
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    margin: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0 15px 15px;
    justify-content: space-between;
`

export const Indicator = styled.View`
    width: 50px;
    height: 5px;
    background-color: #ccc;
    border-radius: 50px;
    align-self: center;
    margin-top: 5px;
`

export const CloseButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #ccc;
    justify-content: center;
    align-items: center;
`

export const CloseText = styled.Text`
    color: #000;
`