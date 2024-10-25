import { CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"


const ItemList = ({items})=>{
    // console.log("iiiiii",items)
    // console.log("CDN",CDN_URL)

    const dispatch = useDispatch()

    const handleAddToCart = (item)=>{
        //Dispatch an action
        dispatch(addItem(item));

    }
    
    return(
        <div>
            {items.map((item)=>{
                // console.log(item.card.info.imageId)
                return(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        
                        <div className="w-9/12">
                            <div className="py-2">
                                <span >{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2  bg-[#f23f51] text-white shadow-lg m-auto font-bold" onClick={()=>handleAddToCart(item)}>Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;