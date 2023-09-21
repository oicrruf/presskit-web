import DefaultNavbar from './components/NavBar'
import CreateCardGeneral from './pages/CreateCardGeneral'

function App () {
  return (
    <div>
      {/* <img src='./qr_logo.png' alt='Logo' className='w-3/12' />
      <div className='container mx-auto bg-grey-dark rounded-xl shadow border p-8 m-10'>
        <h1 className='text-3xl text-white font-bold mb-5'>
          Presskit App
        </h1>
        <p className='text-white text-lg'>
          Base Project
        </p>
      </div> */}
      <DefaultNavbar />
      <CreateCardGeneral />
    </div>
  )
}

export default App
