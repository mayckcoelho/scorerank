import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    background-color: #ca6a38;
`

export const GoBackText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #f6f7fb;
`

export const CardView = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px 15px;
`

export const Content = styled.View`
    flex: 1;
    background-color: #f6f7fb;
`

export const DebtPriceView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const SubText = styled.Text`
    font-size: 16px;
    text-decoration: line-through;
    align-self: flex-end;
    color: #b2b2b2;
`

export const Description = styled.Text`
    margin: 5px 0;
    font-size: 20px;
    align-self: flex-end;
    color: #757575;
`

export const ImageContent = styled.Image`
    width: 120px;
    height: 70px;
`

export const Separator = styled.View`
    background-color: #b1b1b1;
    height: 1px;
    margin: 0px 0;
`

export const PayButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #ca6a38;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`