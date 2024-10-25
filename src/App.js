import React, {lazy,Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";


const Grocery = lazy(()=> import("./components/Grocery"));

import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = ()=>{

    const [userName, setUserName] = useState()

    //authentication exmp...
    useEffect(()=>{
        //make an API call and send user name and password
        //dummy data
        const data = {
            name:"Krishanu",
        };
        setUserName(data.name);
    },[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    );
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {path:"/",element:<Body/>},
            {path:"/about",element:<About/>},
            {path:"/contact",element:<Contact/>},
            {path:"/grocery",element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>} ,
            {path:"/cart", element:<Cart/>},

            {path:"/restaurants/:resId",element:<RestaurantMenu/>},

        ],


         errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//to render component
root.render(<RouterProvider router={appRouter}/>);