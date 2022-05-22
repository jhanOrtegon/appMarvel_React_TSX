import React, { useState } from 'react'

const useForm = (initialState: any) => {
    const [state, setState] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const resetForm = () => setState(initialState);

    return [handleChange, state, resetForm]
}

export default useForm