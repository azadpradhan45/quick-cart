
const ItemStrip = ({catData}) => {
  return (
    <div className=" w-full  flex  py-5 space-x-5  overflow-scroll  " >
            {
                catData.map((item,key)=><div key={key} className="bg-white border border-transparent cursor-pointer hover:border-gray-400    h-full px-5 py-5
            
            shadow-md
         ease-in-out  duration-300
          hover:scale-110
            
             
             ">
                  
                  <div className=" w-24 h-24 rounded-full flex items-center justify-center">
                   <img src={item.img} className="    " />
                   </div>
                   <div className="text-center pt-2 capitalize ">
                   {
                    item.type
                   }
                   </div>

            </div>)
            }
    </div>
  )
}

export default ItemStrip