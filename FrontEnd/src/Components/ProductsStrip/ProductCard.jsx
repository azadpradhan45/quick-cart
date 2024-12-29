import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="  w-56 p-2 mt-1 bg-white  border border-gray-400 hover:shadow-lg hover:scale-110  ease-linear  duration-300 ">


           <div className=" w-full p-2">
           <div className=" absolute ms-40 ps-1   space-y-2 ">
           <div className="text-xl rounded-full p-1  text-black/80 flex items-center justify-center cursor-pointer hover:text-black ">
            <MdOutlineShoppingCart/>
           </div>
           <div className="text-lg rounded-full p-1 text-black/80 flex items-center justify-center cursor-pointer hover:text-black ">
            <FaRegHeart/>
           </div>


           </div>
            <div className=" h-48 ">image</div>


           </div>




           <div>
           <div className="flex justify-between">
            <div>DESC</div>
            <div>Price</div>
           </div>
           <div>
            rating
           </div>
           </div>
            
           </div>
  )
}

export default ProductCard