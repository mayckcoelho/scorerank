import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SafeAreaView from 'react-native-safe-area-view';

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    background-color: #fff;
`

export const Content = styled.ScrollView`
    flex: 1;
    background-color: #f6f7fb;
`

export const Gradient = styled(LinearGradient)`
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
`

export const CircularProgress = styled(AnimatedCircularProgress)`
    margin: 30px 0 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
`

export const Avatar = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`

export const Name = styled.Text`
    font-size: 28px;
    color: #fff;
    font-weight: bold;
`