import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants"; 
import React, { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () =>{

    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //Subscribint to the store using  Selector  --redux
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)

    return(
        <div className="header flex justify-between">
            <div className="logo-container">
                <img src={LOGO_URL} alt="" className="logo w-56" />
            </div>

            <div className="nav-items items-center">
                <ul className="flex p-4 m-4 text-[#f23f51] ">
                    <li className="px-4 text-lg"> {onlineStatus? "Online ✅": "Offline 🔴"} </li>
                    <li className="px-4 text-lg"> <Link to="/">Home</Link></li>
                    <li className="px-4 text-lg"><Link to="/about">About Us</Link></li>
                    <li className="px-4 text-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 text-lg"><Link to="/cart">Cart({cartItems.length}) </Link></li>
                    <button className="login" onClick={()=> loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn ("Login")}>{loginBtn}</button>
                    <li className="px-4 text-lg text-black">{loggedInUser} </li>
                </ul>
            </div>
        </div>
        
    );
};

export default Header;