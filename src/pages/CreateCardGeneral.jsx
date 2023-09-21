import photoIcon from '../assets/photo_icon.png'

const CreateCardGeneral = () => {
  return (
    <div className='bg-gradient-to-t from-black-medium to-grey-dark h-screen flex flex-col items-center'>
      <div className='w-10/12 bg-grey mt-5 mb-10 rounded-[20px] flex flex-col items-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>
        <p className='text-black my-5 text-center text-xl'>Descríbenos tu trabajo</p>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          className='bg-grey-medium rounded-[20px] mb-5 h-[136px]'
        />
        <div className='w-10/12 h-0 border-[1px] border-black mb-5' />
        <p className='text-black mb-5 text-center text-xl'>Compártenos tus Skills</p>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          className='bg-grey-medium rounded-[20px] mb-5 h-[136px]'
        />
        <div className='w-10/12 h-0 border-[1px] border-black mb-5' />
        <p className='text-black mb-5 text-center text-xl'>Cargar foto</p>
        <img src={photoIcon} alt='upload photo' className='w-[100px] mb-5' />
      </div>
      <button className='bg-green w-[240px] h-[45px] rounded-[20px] text-xl mb-5 text-black'>Agregar</button>
    </div>
  )
}

export default CreateCardGeneral
