
import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data})=>{
    // console.log("ppppppp",data)
    const [showItem, setShowItem] = useState(false)

    const handleClick = ()=>{
        setShowItem(!showItem)
    }

    return(
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4 cursor-pointer">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span className="">⬇️</span>
                </div>
            {/* body */}
               {showItem&&<ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    );
}
export default RestaurantCategory;