import React from 'react'
import iconCheck from '../assets/images/icon-success.svg'
import { useNavigate } from 'react-router-dom'
import { emailSlice } from '../store/emailSlice'

export const Success = () => {
  const navigate = useNavigate()

  const email = emailSlice((state) => state.email)
  const { clearEmail } = emailSlice()

  const handleClick = () => {
    clearEmail()
    navigate('/', { replace: true })
  }

  return (
    <div className='h-screen grid place-content-center'>
      <div className='bg-white p-8 rounded-xl w-6/12 mx-auto'>
        <img src={iconCheck} alt="icon" />
        <h1 className='my-3 text-3xl'>Thanks for subscribing!</h1>
        <p className='my-2'>A confirmation email has been sent to <span className='font-bold'>{email}</span>.
          Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={handleClick} className='my-3 text-white p-3 rounded-lg w-full' style={{ backgroundColor: '#36384e' }}>Dismiss message</button>
      </div>
    </div>
  )
}
