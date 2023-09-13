import profile from '../../assets/images/profile.png'
const Header = () => {
  return (

    <header className='flex justify-between md:container md:mx-auto mx-4 my-6 border-b-2 items-center'>
      <h1 className='md:text-4xl font-semibold text-3xl'>Knowledge Cafe</h1>
      <img src={profile} alt="img" />
    </header>

  )
}

export default Header;