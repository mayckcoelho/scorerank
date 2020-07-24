import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from "yup";

import { useAuth } from '../../../contexts/auth';
import Input from "../../../components/Input";
import Buttom from "../../../components/Buttom";
import ISignInRequest from "../../../interfaces/ISignInRequest"
import {
    ForgotPassword,
    ForgotPasswordText,
} from './styles'
interface IDictionary {
    [index: string]: string;
}

const SignInForm: React.FC = () => {
    const { signIn } = useAuth();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<ISignInRequest> = async (data) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email("Informe um e-mail válido").required("E-mail obrigatório"),
                password: Yup.string().min(6, "Informe ao menos 6 caractéres").required("Senha obrigatória"),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            signIn(data);
        } catch (err) {
            const validationErrors = {} as IDictionary;
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current?.setErrors(validationErrors);
            }
        }
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email"
                returnKeyType="next"
                onSubmitEditing={() => {
                    const passwordInput = formRef.current?.getFieldRef('password');
                    passwordInput.focus();
                }}
                blurOnSubmit={false}
                icon="envelope-o"
                placeholder="Endereço de Email" />
            <Input name="password" icon="key" placeholder="Senha" secureTextEntry />
            <ForgotPassword>
                <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
            </ForgotPassword>
            <Buttom text="Continuar" color="#215760" onPress={() => formRef.current?.submitForm()} />
        </Form>
    )
}

export default SignInForm;