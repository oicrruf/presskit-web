import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo_160x160.png'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      // Realiza una solicitud POST al servidor con los datos del usuario
      const response = await axios.post('https://cute-jade-drill-sock.cyclic.cloud/api/v1/login', {
        email,
        password
      })

      // Verifica la respuesta del servidor
      if (response.data.success) {
        // Si la respuesta indica que el inicio de sesión fue exitoso,
        // puedes redirigir al usuario a la página deseada.
        navigate('/CreateCardGeneral')
      } else {
        // En caso contrario, muestra un mensaje de error o toma otra acción.
        console.error('Inicio de sesión fallido')
      }
    } catch (error) {
      // Maneja errores de la solicitud, por ejemplo, si no se puede conectar al servidor.
      console.error('Error al realizar la solicitud al servidor', error)
    }
  }

  return (
    <>
      <div className='bg-black-medium min-h-screen flex flex-col'>

        {/* Sección superior */}
        <section className='bg-grey-light p-4 text-center'>
          <div className='flex items-center justify-center'>
            <img src={logo} alt='Logo' />
          </div>
          <div className='mt-4'>
            <h2 className='text-white'>
              ¡Crea tu tarjeta de presentación electrónica en segundos! Ingrese
              sus datos y obtenga una tarjeta elegante con código QR para
              compartir su contacto de manera rápida y efectiva!
            </h2>
          </div>
          <div className='mt-4'>
            <button className='bg-grey w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'>
              Contact
            </button>
          </div>
        </section>

        {/* Sección inferior */}
        <section className='bg-grey-lighter p-4'>
          <section className='bg-grey rounded-[20px] p-4'>
            <div className='my-3 text-center'>
              <h2>¿Ya tienes una cuenta?</h2>
            </div>
            <div>
              <h3>Usuario</h3>
              <input
                className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h3>Contraseña</h3>
              <input
                className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </section>
          <div className='text-center mt-4'>
            <button
              className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
