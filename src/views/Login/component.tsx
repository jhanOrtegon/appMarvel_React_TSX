import React from 'react'

const LoginC =
    ({ handleChange }: { handleChange: (e: any) => void }) => {

        return (
            <div className='container w-25 mt-5 h-100'>
                <header className='mb-3'>
                    <h3>Login</h3>
                </header>
                <form>
                    <input onChange={handleChange} autoComplete='off' type="text" name='user' className='form-control mb-3' />
                    <input onChange={handleChange} type="password" name='password' className='form-control mb-3' />
                    <button type='submit' className='btn btn-dark w-100 p-3'>Login</button>
                </form>
            </div>
        )
    }

export default LoginC