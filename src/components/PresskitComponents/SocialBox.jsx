import React from 'react'
import './SocialBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const SocialBox = ({Icon,Red, Nombre, Apodo}) => {

  return (
    <section className='bg-[#D9D9D9]/[.1] rounded-[20px] w-[348px] h-[130px] container'> 
    
        <div className='IconBox bg-grey-medium w-[90px] h-[90px]'> 
            <FontAwesomeIcon icon={Icon} className='Icon2'/>
        </div>

        <section>
            <h2 className='text-white text-sm/[17px] text-center SnsNameText'>{Red}</h2>
            <div className='InfoUsario'>
            <h2 className='text-white text-sm/[17px]'>{Nombre}</h2>
            <h2 className='text-white text-sm/[17px]'>{Apodo}</h2>
            </div>
            <div>
            <button className='bg-[#FFFFFF]/[.14] w-[206px] h-[33px] rounded-[20px] text-xl mb-5 text-white text-sm/[17px]'
            onClick = {'sayHello'}/* {() => alert.alert('Simple Button press')} */>Visitar</button>
            </div>
        </section>

    </section>
    
  )
}

export default SocialBox