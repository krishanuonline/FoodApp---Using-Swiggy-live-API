import { Link } from "react-router-dom";
import RestaurantCard, {withPromotedLebel} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {useEffect, useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLebel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    }, [])

    // const fetchData = async ()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const json = await data.json();
        
    //     setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setFilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // };

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            if (restaurants) {
                setListOfRestaurants(restaurants);
                setFilteredRestaurant(restaurants);
            } else{
                console.log("NOt Fetch")
            }
        } catch (err) {
            console.log("Error fetching restaurant data:", err);
        }
    };



    const onlineStatus = useOnlineStatus(); //custom hook

    if (onlineStatus === false) return (<h1>Please check your Internet Connection</h1> );



    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex items-center" >
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                    <button className="px-4 py-1.5 m-4 bg-[#f23f51] text-white rounded-lg" onClick={()=>{
                        console.log(searchText)
                        const filteredList = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList)
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="filter-btn px-4 py-2 bg-gray-200 rounded-lg" onClick={()=>{ const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4) 
                        setListOfRestaurants(filteredList);
                    }}>Top rated Restaurants</button> 
                </div>
            </div>
            
            <div className="res-container flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant)=>(
                    <Link to={"/restaurants/"+restaurant.info.id}> 
                        <RestaurantCard resData={restaurant}/>

                        {/* if the restaurant was promoted add the Promoted label to it */}
                        {
                            // restaurant.data.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)
                        }

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;