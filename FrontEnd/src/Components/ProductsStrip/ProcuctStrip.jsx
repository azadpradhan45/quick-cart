import ProductCard from "./ProductCard"


const ProcuctStrip = () => {
  return (
    <div className="pt-2 ">
    <span className="text-lg">Text</span>
     <div className=" w-full py-2 grid grid-cols-6  gap-5 place-items-center overflow-scroll ">
           
      
          <ProductCard/>
         
          
       
         
         
           
      

     </div>



    </div>
  )
}

export default ProcuctStrip