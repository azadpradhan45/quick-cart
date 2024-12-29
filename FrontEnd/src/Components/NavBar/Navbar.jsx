import Logo from "./Logo"
import Menu from "./Menu"
import SearchBar from "./SearchBar"


const Navbar = () => {
  return (
    <nav className="

    grid grid-cols-3 place-content-center
    
   bg-white shadow-md  w-full h-20 px-5  items-center">
    <Logo/>
      <SearchBar/>
      <Menu/>
    </nav>
  )
}

export default Navbar