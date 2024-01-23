'use client';
import React, { useState, useContext, createContext, ReactNode } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@/Services/api/index';


interface AuthContextProps {
    user: any; // Aquí deberías especificar el tipo correcto para el usuario
    signIn: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({ user: null, signIn: () => {}, logout: () => {} });

export function ProviderAuth({ children } : {children: ReactNode}) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}


function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signIn = async (email: string, password: string) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        };
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
        if (access_token) {
            const token = access_token.access_token;
            Cookie.set('token', token, { expires: 5 });
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            const { data: user } = await axios.get(endPoints.auth.profile);
            setUser(user);
        }
    };

    const logout = () => {
        Cookie.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    return {
        user,
        signIn,
        logout,
    };
}
