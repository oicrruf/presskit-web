const Login = () => {
  return (
    <>
      <div className='bg-grey-dark min-h-screen flex flex-col'>

        {/* Sección superior */}
        <section className='bg-grey-light p-4 text-center'>
          <div>
            Logo
          </div>
          <div className='mt-4'>
            <h2>
              ¡Crea tu tarjeta de presentación electrónica en segundos! Ingrese
              sus datos y obtenga una tarjeta elegante con código QR para
              compartir su contacto de manera rápida y efectiva!
            </h2>
          </div>
          <div className='mt-4'>
            <button className='btn-contact bg-white rounded-lg px-5 py-1'>
              Contact
            </button>
          </div>
        </section>

        {/* Sección inferior */}
        <section className='bg-grey-lighter p-4'>
          <section className='bg-grey rounded-lg p-4'>
            <div className='my-3 text-center'>
              <h2>¿Ya tienes una cuenta?</h2>
            </div>
            <div>
              <h3>Usuario</h3>
              <input
                className='rounded-lg mb-4 w-full'
                type='text'
                placeholder='Email'
              />
            </div>
            <div>
              <h3>Contraseña</h3>
              <input
                className='rounded-lg w-full'
                type='password'
                placeholder='Password'
              />
            </div>
          </section>
          <div className='text-center mt-4'>
            <button className='btn-login bg-white rounded-lg px-5 py-1'>
              Login
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
