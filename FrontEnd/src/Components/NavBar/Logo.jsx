import logoImg from '../../Assets/Logo.png'

const Logo = () => {
  return (
    <div className=" col-start-1 w-full  ">
        <img src={logoImg} alt="Quick Kart" className='h-9' />
    </div>
  )
}

export default Logo