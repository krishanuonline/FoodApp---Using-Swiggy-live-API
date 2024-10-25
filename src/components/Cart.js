import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItem = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-black">Cart</h1>

            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-md font-semibold"  onClick={handleClearCart}>Clear Cart</button>
                <ItemList items={cartItem}/>
            </div>
        </div>
    )
}

export default Cart;