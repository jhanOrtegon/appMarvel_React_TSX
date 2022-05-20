import React, { useContext } from 'react'
import { loginContext } from '../../context/auth/loginContext';

const DcC = () => {
    const { stateAuth } = useContext(loginContext)
    return (
        <>
            <h1>Bienvenido {stateAuth?.user}</h1>
        </>
    )
}

export default DcC