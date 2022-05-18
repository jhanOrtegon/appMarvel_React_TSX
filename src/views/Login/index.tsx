import React, { useState } from 'react'
import LoginC from './component'

const LoginV = () => {


    const [loginValues, setLoginValues] = useState({
        user: '', password: ''
    })

    const { user, password } = loginValues

    const handleChange = (e: any): void => {
        setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        if (user.trim() && password.trim()) {

        }
    }

    return (
        <LoginC handleChange={handleChange} />

    )
}

export default LoginV
