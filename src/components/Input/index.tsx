import React, {
    useEffect,
    useRef,
} from 'react';
import { Text, TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import { Container, InputStyled, Content } from "./styles"

interface Props {
    name: string;
    icon?: string;
};

type InputProps = TextInputProps & Props;

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    const inputRef = useRef<any>(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            clearValue(ref: any) {
                ref.value = '';
                ref.clear();
            }
        });
    }, [fieldName, registerField]);
    return (
        <Container>
            <Content>
                {icon && <Icon name={icon} size={16} color="#b5c0ce" />}
                <InputStyled
                    ref={inputRef}
                    keyboardAppearance="dark"
                    defaultValue={defaultValue}
                    placeholderTextColor="#b5c0ce"
                    onChangeText={value => {
                        inputRef.current.value = value;
                    }}
                    {...rest}
                />
            </Content>
            {error && <Text style={{ color: "#f00" }}>{error}</Text>}
        </Container>
    );
};
export default Input;