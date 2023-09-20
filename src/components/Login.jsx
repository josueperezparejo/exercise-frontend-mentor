import React, { useState } from 'react'
import signUpDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../assets/images/icon-list.svg'
import { useNavigate } from 'react-router-dom'
import { emailSlice } from '../store/emailSlice'

export const Login = () => {

    const navigate = useNavigate()

    const { setEmail } = emailSlice()

    const [inputForm, setInputForm] = useState('')
    const [error, setError] = useState(false)

    const handleChange = (event) => {
        setInputForm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (inputForm >= 0 && !inputForm.includes('@')) {
            setError(true)
            return
        }
        setEmail(inputForm)
        setInputForm('')
        navigate('/success', { replace: true })
    }

    return (
        <div className='h-screen grid place-content-center'>
            <div className='flex w-8/12 mx-auto justify-center items-center gap-4 p-4 rounded-xl bg-white'>
                <div>
                    <h1 className='text-5xl my-4'>Stay Updated!</h1>
                    <p className='my-2' >Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li className='flex gap-2'>
                            <span><img src={iconList} alt="icon" /></span>
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li className='flex gap-2'>
                            <span><img src={iconList} alt="icon" /></span>
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li className='flex gap-2'>
                            <span><img src={iconList} alt="icon" /></span>
                            <p>And much more!</p>
                        </li>
                    </ul>

                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-between gap-3 my-2'><h2 className='m-0'>Email address</h2>
                            {error && <span className='text-red-600 text-center m-0 font-bold'>Field is required!</span>}</div>
                        <input value={inputForm} onChange={handleChange} className='w-full my-2 rounded-lg border-4 p-3' type="email" placeholder="email@company.com" />
                        <button type='submit' style={{ backgroundColor: '#FF6155' }} className='mt-3 shadow-xl shad btn rounded-lg text-white p-2 w-full'>Subscribe to monthly newsletter</button>
                    </form>
                </div>
                <div>
                    <img src={signUpDesktop} alt="image" />
                </div>
            </div>
        </div>
    )
}
