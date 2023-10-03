import React from 'react'
import ejemploCard from '../assets/ejemploCard.png'

const ShareCard = () => {
  return (
    <div className='bg-black-medium h-screen flex flex-col items-center justify-center'>
      <img src={ejemploCard} alt='card example' className='w-[251px] mb-10' />
      <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl text-black'>Compartir Tarjeta</button>
    </div>
  )
}

export default ShareCard
