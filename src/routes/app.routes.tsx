import React from 'react'
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
import Dashboard from '../pages/Dashboard'
import DebtList from "../pages/DebtList"
import { useAuth } from "../contexts/auth";

import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Início" component={Dashboard}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={signOut}>
                            <Icon name="sign-out" size={22} color="#292929" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <AppStack.Screen name="Pendências" component={DebtList} />
        </AppStack.Navigator>
    );
}

export default AppRoutes;