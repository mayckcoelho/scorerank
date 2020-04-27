import React from 'react'
import { Button, Text } from 'react-native'
import { useAuth } from '../../contexts/auth'

import { Container } from './styles'

const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    }

    return (
        <Container>
            <Text>{user?.name}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
        </Container>
    )
};

export default Dashboard;