import React from 'react'
import ejemploCard from '../assets/ejemploCard.png'
import QRexample from '../assets/QRexample.png'

const QR = () => {
  return (
    <div className='bg-black-medium h-screen flex flex-col items-center justify-center'>
      <img src={ejemploCard} alt='card example' className='w-[104px] mb-10' />
      <img src={QRexample} alt='card example' className='w-[219px] mb-20' />
      <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl text-black'>Compartir Tarjeta</button>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default QR
