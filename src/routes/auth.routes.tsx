import React from 'react'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
);

export default AuthRoutes;