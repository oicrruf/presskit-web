function Register () {
  return (
    <div className='bg-gradient-to-t from-black-medium to-grey-dark w-screen mx-auto flex flex-col items-center'>
      <img src='./menu.png' alt='menu' className='absolute left-0 top-0  h-24 w-24'    />
      <img src='./qr_logo.png' alt='Logo' className='my-20 w-3/12' />
      <div className='w-2/2 bg-black rounded-xl shadow border p-5 m-4'>
        <h1 className='text-4xl text-white font-bold text-center bg-black'>
          Compartenos tu 
          información
        </h1>
    
      </div>
      <div className='box-content h-49 w-50 p-5 rounded-xl my-10 bg-grey h-screen flex flex-col items-center'>
        <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
          Nombre
        </span>
        <input type="nombre" name="nombre" class="mt-1 px-80 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Nombre" />
       </label>

       <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
          Apellido
        </span>
        <input type="apellido" name="apellido" class="mt-1 px-80 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Apellido" />
       </label>

       <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
          Correo
        </span>
        <input type="Email" name="email" class="mt-1 px-80 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="@gmail.com" />
       </label>

       <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
          Teléfono
        </span>
        <input type="Phone" name="Phone" class="mt-1 px-80 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="" />
       </label>

       <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
          Usuario
        </span>
        <input type="User" name="User" class="mt-1 px-80 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Usuario" />
       </label>

       <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm my-4 font-medium text-slate-800">
          Password
        </span>
        <input type="Password" name="Password" class="mt-1 px-80 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1" placeholder="Password" />
       </label>

       <button class="bg-green w-1/3 text-1xl text-white font-bold rounded-xl shadow border p-3 m-7">
  Registrate
       </button>
    </div>
    </div>
  )
}



export default Register
