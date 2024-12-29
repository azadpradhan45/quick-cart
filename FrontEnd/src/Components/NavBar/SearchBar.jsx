import { BiSearch } from "react-icons/bi"


const SearchBar = () => {
  return (
    <div className=" w-80 border border-gray-300 px-3 py-2 bg-white flex justify-self-center items-center  space-x-3     ">

<BiSearch className="text-xl"/>
<input type="text" className=" w-full
outline-none

" placeholder="Search..."  />
    

    </div>
  )
}

export default SearchBar