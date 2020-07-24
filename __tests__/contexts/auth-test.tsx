import React from 'react';
import { View, Text } from "react-native"
import { AuthProvider } from '../../src/contexts/auth';
import renderer from 'react-test-renderer';

describe('Auth should render correctly', () => {
    it('match snapshot', () => {

        const auth = renderer
            .create(
                <AuthProvider>
                    <View>
                        <Text>Foo</Text>
                    </View>
                </AuthProvider>)
            .toJSON();
        expect(auth).toMatchSnapshot();
    });
})