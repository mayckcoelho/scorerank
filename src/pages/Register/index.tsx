import React from 'react'
import {
    View,
    Platform,
    Text,
    TouchableOpacity
} from 'react-native'

import RegisterForm from "./RegisterForm";
import {
    Title,
    KeyboardAvoiding,
    LogoImage,
    RegisterView,
    RegisterText
} from './styles'

interface Props {
    navigation?: any;
}

const SignIn: React.FC<Props> = ({ navigation }) => {

    return (
        <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View>
                <LogoImage source={require("../../assets/logo.png")} resizeMode="contain" />
                <Title>Crie sua conta</Title>
                <RegisterForm />
                <RegisterView>
                    <Text>Já tem uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <RegisterText>
                            Entre nela aqui
                        </RegisterText>
                    </TouchableOpacity>
                </RegisterView>
            </View>
        </KeyboardAvoiding>
    )
};

export default SignIn;