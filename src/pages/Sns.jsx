import React from 'react'
import '../styles/Sns.css'
import logo from '../assets/Logo_160x160.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faYoutube, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Sns = () => {
  return (
    <div className='bg-black-medium h-screen flex flex-col items-center'>
      <div className='Logo'>
        <img src={logo} alt='Logo' />
      </div>

      <section className='TxtBox'>
        <h2>Añade información </h2>
        <h2>a tu perfil!</h2>
      </section>

      <div className='InfoBox'>
        <h2>Nombre</h2>
        <svg className='SvgLine'>
          <line x1={0} y1={0} x2={1000} y2={0} strokeWidth={2} stroke='white' />
        </svg>
        <h2>Puesto de trabajo</h2>
      </div>

      <div>
        <input type='text' className='InputSocial' placeholder='Ex. https//:www.redsocial.com' />

        <section className='bg-grey-medium rounded-[20px] flex flex-wrap justify-center my-[12.5px] h-[249px]'>
          <div className='IconBox'>
            <FontAwesomeIcon icon={faLinkedinIn} className='Icon' />
          </div>
          <div className='IconBox'>
            <FontAwesomeIcon icon={faYoutube} className='Icon' />
          </div>
          <div className='IconBox'>
            <FontAwesomeIcon icon={faGithub} className='Icon' />
          </div>
          <div className='IconBox'>
            <FontAwesomeIcon icon={faInstagram} className='Icon' />
          </div>

        </section>
      </div>
      <div>

        <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'>Crear tarjeta
        </button>
      </div>

    </div>

  )
}

export default Sns
