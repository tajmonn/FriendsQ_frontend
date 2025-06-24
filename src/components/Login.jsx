import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../frontend/src/firebase';

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        onLogin(userCred.user);
    };

    const register = async () => {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        onLogin(userCred.user);
    };

    return (
        <div>
        <input type="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
        </div>
    );
}
