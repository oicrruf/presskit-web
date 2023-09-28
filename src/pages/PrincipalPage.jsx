import React from 'react'

const PrincipalPage = () => {
  return (
    <div className='max-w-80%'>
      <div className='bg-gradient-to-t from-black-medium to-grey-dark h-screen flex flex-col items-center '>
        <img src='./qr_logo.png' alt='Logo' className='w-3/12 m-10' />
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
            <button type='submit' className='bg-black text-white rounded-lg w-80 m-1.5 text-4xl'>Login</button>
            <button type='submit' className='bg-black text-white rounded-lg w-80 m-1.5 text-4xl'>Register</button>
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
