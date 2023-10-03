import React from 'react'
import logo from '../assets/Logo_160x160.png'
import { Link } from 'react-router-dom'

const PrincipalPage = () => {
  return (
    <div className='max-w-80%'>
      <div className='bg-black-medium h-screen flex flex-col items-center '>
        <img src={logo} alt='Logo' />
        <div className='text-white text-m m-10'>
          <p>
            ¡Crea tu tarjeta de presentación electrónica
            en segundos! Ingresa tus datos y obtén
            una tarjeta elegante con código QR para
            compartir tu contacto de manera rápida
            y efectiva!
          </p>
        </div>
        <div className='container bg-grey-dark rounded-xl shadow border p-8 m-10 max-w-100% d-flex justify-content-center grid-rows-1'>
          <div className=''>
            <Link to='/login'>
              <button className='bg-black text-white rounded-lg w-80 m-1.5 text-4xl'>Login</button>
            </Link>
            <Link to='/register'>
              <button className='bg-black text-white rounded-lg w-80 m-1.5 text-4xl'>Register</button>
            </Link>
          </div>
        </div>
        <div>
          <button type='submit' className='bg-black text-white rounded-3xl w-60 m-1.5 text-2xl'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default PrincipalPage
