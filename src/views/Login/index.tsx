import React, { useState } from 'react'
import LoginC from './component'
import { TValidateForm } from './types'
import { useContext } from 'react';
import { loginContext } from '../../context/auth/loginContext';
import { EAuth } from '../../store/auth/enum';
import { useNavigate } from 'react-router-dom';

const LoginV = () => {

    const router = useNavigate()

    const { dispatch } = useContext(loginContext)

    const [loginValues, setLoginValues] = useState({
        user: '', password: ''
    })

    const { user, password } = loginValues

    const handleChange = (e: any): void => {
        setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
    }

    const formValid: TValidateForm = (user, password): boolean => {
        console.log(user, password);
        if (!user.trim().length || !password.trim().length) {
            alert('Verifique los Datos Ingresados')
            return false
        }
        return true
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()

        if (formValid(user, password)) {

            const action = {
                type: EAuth.login,
                payload: {
                    user, password
                }
            }

            dispatch!(action)
            router('/dashboard/dc', { replace: true })
        }
    }

    return (
        <LoginC
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />

    )
}

export default LoginV
