import React, { useState, useEffect, useContext, createContext } from 'react'
import jwtDecode from "jwt-decode"
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'
import api from '../services/api'

import IUser from "../interfaces/IUser";
import IAuthContextData from "../interfaces/IAuthContextData";
import ISignInRequest from "../interfaces/ISignInRequest";
import IRegisterRequest from "../interfaces/IRegisterRequest";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<null | IUser>(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const [[, storagedUser], [, storagedToken]] = await AsyncStorage.multiGet(['@RNAuth:user', '@RNAuth:token']);

            if (storagedUser && storagedToken) {
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }

        loadStorageData();
    }, [])

    const signIn = async (data: ISignInRequest) => {
        const response = await auth.signIn(data).catch(err => {
            Toast.show(err.response.data)
        })

        if (response)
            handleResponse(response.data)
    }

    const register = async (data: IRegisterRequest) => {
        const response = await auth.register(data).catch(err => {
            Toast.show(err.response.data)
        })

        if (response)
            handleResponse(response.data)
    }

    const handleResponse = async (data: any) => {
        const token = data.accessToken;
        const decoded = jwtDecode(token) as {
            sub: string;
            email: string;
        };

        api.defaults.headers.Authorization = `Bearer ${token}`;

        const response = await api.get(`/users/${decoded.sub}`)

        const user = response.data as IUser;
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user))

        setUser(user)
        await AsyncStorage.setItem('@RNAuth:token', token)
    }

    const signOut = () => {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    const updateScore = async () => {
        if (user) {
            const newUser = { ...user, score: user.score + 1 }

            await api.patch(`/users/${user?.id}`, {
                score: newUser.score
            })

            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(newUser))

            setUser(newUser)
        }
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, loading, user, register, signIn, signOut, updateScore }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}