import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/auth'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import Routes from './routes'

import reducers from "./reducers";
const store = applyMiddleware(thunk)(createStore)(reducers)

const App: React.FC = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Provider store={store}>
                    <AuthProvider>
                        <Routes />
                    </AuthProvider>
                </Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;