import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from "yup";

import { useAuth } from '../../../contexts/auth';
import Input from "../../../components/Input";
import Buttom from "../../../components/Buttom";
import IRegisterRequest from "../../../interfaces/IRegisterRequest";
interface IDictionary {
    [index: string]: string;
}

const RegisterForm: React.FC = () => {
    const { register } = useAuth();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<IRegisterRequest> = async (data) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string().email("Informe um e-mail válido").required("E-mail obrigatório"),
                password: Yup.string().min(6, "Informe ao menos 6 caractéres").required("Senha obrigatória"),
                confirm_password: Yup.string().test('passwords-match', 'Senhas não são iguais', function (value) {
                    return this.parent.password === value;
                }),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            register(data);

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
            <Input name="firstname"
                returnKeyType="next"
                onSubmitEditing={() => {
                    const emailInput = formRef.current?.getFieldRef('email');
                    emailInput.focus();
                }}
                blurOnSubmit={false}
                icon="user"
                placeholder="Nome" />
            <Input name="email"
                returnKeyType="next"
                onSubmitEditing={() => {
                    const passwordInput = formRef.current?.getFieldRef('password');
                    passwordInput.focus();
                }}
                blurOnSubmit={false}
                icon="envelope-o"
                placeholder="Endereço de Email" />
            <Input name="password"
                returnKeyType="next"
                onSubmitEditing={() => {
                    const confirmInput = formRef.current?.getFieldRef('confirm_password');
                    confirmInput.focus();
                }}
                icon="key"
                placeholder="Senha"
                secureTextEntry />
            <Input name="confirm_password" icon="key" placeholder="Confirmar Senha" secureTextEntry />
            <Buttom text="Registrar" color="#215760" onPress={() => formRef.current?.submitForm()} />
        </Form>
    )
}

export default RegisterForm;