import React from 'react'
import { Button } from 'react-native'
import { useAuth } from '../../contexts/auth'

import { Container } from './styles'

const SignIn: React.FC = () => {
    const { signed, signIn } = useAuth();

    const handleSignIn = () => {
        signIn();
    }

    return (
        <Container>
            <Button title="Sign In" onPress={handleSignIn} />
        </Container>
    )
};

export default SignIn;