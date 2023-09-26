import logo from '../assets/Logo_160x160.png'

const Login = () => {
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
              />
            </div>
            <div>
              <h3>Contraseña</h3>
              <input
                className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full'
                type='password'
                placeholder='Password'
              />
            </div>
          </section>
          <div className='text-center mt-4'>
            <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'>
              Login
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
