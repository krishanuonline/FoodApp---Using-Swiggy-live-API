import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = ()=>{

    const {resId} = useParams();

    // const [resInfo,setResInfo] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async ()=>{
    //     const data = await fetch(MENU_API+resId);
    //     json = await data.json();

    //     console.log("llll",json.data)
    //     setResInfo(json.data);
    // }

    //Optimize using custom hooks - useRestrauntMenu
    const resInfo = useRestrauntMenu(resId);

    
    
    
    if (resInfo === null) return <Shimmer/>;


    const {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId, sla} = resInfo?.cards[2]?.card?.card?.info; //sla.deliveryTime
    const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    // console.log(itemCards)
    // console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories)

    return(
    
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-3xl">{name}</h1>
            <p className="font-bold text-xl">{cuisines.join(", ")} {costForTwoMessage}</p>
            <h2 className="mt-4">Menu</h2>
            {categories.map((categorie)=>(<RestaurantCategory key={categorie?.card?.card.title} data={categorie?.card?.card}/>))}
            <ul>

                {/* {itemCards.map((i)=>{
                    
                    return <li key={i.card.info.id}>{i.card.info.name} - Rs.{i.card.info.price/100 }</li>

                })} */}
                
                {/* <li>{itemCards[0].card.info.name}</li> */}
            </ul>

          
        </div>
    )
}

export default RestaurantMenu;