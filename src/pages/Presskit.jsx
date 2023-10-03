import React from 'react'
import '../styles/Presskit.css'
import photo from '../assets/Logo_160x160.png'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import InfoBox from '../components/PresskitComponents/InfoBox'
import SocialBox from '../components/PresskitComponents/SocialBOX'

const Presskit = () => {

return (
    <div className=' flex flex-col items-center maincontainer'>
      <div className='photo'> 
        <img src={photo} alt='upload photo'/>
      </div>

  <InfoBox
  titulo = 'Nombre'
  descripcion = 'Info de la api'
  />
  <InfoBox
  titulo = 'Abstract'
  descripcion = 'Info de la api'
  />
  <InfoBox
  titulo = 'Professional Experience'
  descripcion = 'Info de la api'
  />
  <InfoBox
  titulo = 'Skills'
  descripcion = 'Info de la api'
  />
  
  <SocialBox
  Icon = {faLinkedinIn}
  Red = 'Linkedin' 
  Nombre = 'Info de api' 
  Apodo = 'Info de api'
  />
  <SocialBox
  Icon = {faYoutube}
  Red = 'YouTube' 
  Nombre = 'Info de api' 
  Apodo = 'Info de api'
  />
  <SocialBox
  Icon = {faGithub}
  Red = 'Github' 
  Nombre = 'Info de api' 
  Apodo = 'Info de api'
  />
  <SocialBox
  Icon = {faInstagram}
  Red = 'Instagram' 
  Nombre = 'Info de api' 
  Apodo = 'Info de api'
  />

      <div>
        <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'
        onClick = {'sayHello'}/* {() => alert.alert('Simple Button press')} */>Descargar Tarjeta</button>
      </div>

    </div>


  )
}

export default Presskit