import logo from '../assets/Logo_160x160.png'

const Register = () => {
  return (
    <div className='bg-black-medium w-screen mx-auto flex flex-col items-center'>
      <img src={logo} alt='Logo' />
      <div className='w-2/2 bg-black rounded-xl shadow border p-5 m-4'>
        <h1 className='text-4xl text-white font-bold text-center bg-black'>
          Compartenos tu
          información
        </h1>

      </div>
      <div className='w-full p-4'>
        <div className='bg-grey rounded-[20px] p-4 my-10 flex flex-col items-center'>
          <label className='block w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
              Nombre
            </span>
            <input type='nombre' name='nombre' className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full' placeholder='Nombre' />
          </label>

          <label className='block w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
              Apellido
            </span>
            <input type='apellido' name='apellido' className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full' placeholder='Apellido' />
          </label>

          <label className='block w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
              Correo
            </span>
            <input type='Email' name='email' className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full' placeholder='@gmail.com' />
          </label>

          <label className='block w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
              Teléfono
            </span>
            <input type='Phone' name='Phone' className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full' placeholder='' />
          </label>

          <label className='block w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
              Usuario
            </span>
            <input type='User' name='User' className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full' placeholder='Usuario' />
          </label>

          <label className='block w-full'>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
              Password
            </span>
            <input type='Password' name='Password' className='bg-grey-medium rounded-[20px] mb-5 h-[40px] placeholder:text-white placeholder:ps-5 text-white w-full' placeholder='Password' />
          </label>

          <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'>
            Registrate
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
