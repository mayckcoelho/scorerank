import React from 'react'
import {
    View,
    Platform,
    Text,
    TouchableOpacity
} from 'react-native'

import SignInForm from "./SignInForm";
import FacebookButtom from "../../components/FacebookButtom";
import GoogleButtom from "../../components/GoogleButtom";
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
                <Title>Entre na sua conta</Title>
                <SignInForm />
                <RegisterView>
                    <Text>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <RegisterText>
                            Crie uma aqui
                        </RegisterText>
                    </TouchableOpacity>
                </RegisterView>
                <FacebookButtom />
                <GoogleButtom />
            </View>
        </KeyboardAvoiding>
    )
};

export default SignIn;