import profile from '../../assets/images/profile.png'
const Header = () => {
  return (

    <header className='md:flex md:justify-between md:container mx-auto my-6 border-b-2 items-center'>
      <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
      <img src={profile} alt="img" />
    </header>

  )
}

export default Header;