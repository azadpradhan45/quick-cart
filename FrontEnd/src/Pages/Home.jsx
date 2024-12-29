import Carousel from "../Components/Carousel/Carousel"
import ItemStrip from "../Components/ItemStrip/ItemStrip"
import ProcuctStrip from "../Components/ProductsStrip/ProcuctStrip"
import categoryData from "../Constants/Categories"


const Home = () => {
  return (
    <div className=" space-y-5">
    
      <Carousel/>
     <ItemStrip  catData={categoryData}  />
     <ProcuctStrip/>
    
      
    






    </div>
  )
}

export default Home