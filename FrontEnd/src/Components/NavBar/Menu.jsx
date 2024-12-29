import { FaRegBell,FaRegHeart,FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


import { FiSettings } from "react-icons/fi";


const Menu = () => {


 


  return (
    <ul className="w-full flex items-center justify-end space-x-5 ">






  <li className='cursor-pointer'> 
 
  <FaRegBell className='text-2xl' /> 
  <div className='w-4 h-4 rounded-full bg-red-400 text-[10px] absolute -mt-8  ms-3 flex items-center justify-center  font-semibold '>
10
  </div>
  <ul className="bg-red-200 absolute -ms-2 mt-2 w-52 px-2 py-2 space-y-2 hidden" >
  <li>dddddddd</li>
  <li>dddddddd</li>
  <li>dddddddd</li>
  <li>dddddddd</li>
  <li>dddddddd</li>

  </ul>
  </li>
  <li className='cursor-pointer'> 

  <MdOutlineShoppingCart className='text-2xl' /> 
  <div className='w-4 h-4 rounded-full bg-red-400 text-[10px] absolute -mt-8  ms-3 flex items-center justify-center  font-semibold '>
10
  </div>
  </li>
  <li className='cursor-pointer'> 

  <FaRegHeart className='text-2xl' /> 

  </li>
  <li className='cursor-pointer'> 

  <FaRegUserCircle className='text-2xl' /> 

  </li>
  <li className='cursor-pointer'> 

  <FiSettings className='text-2xl' /> 

  </li>




    </ul>
   
      
    
  )
}

export default Menu