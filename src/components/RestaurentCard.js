import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resData} = props;
    // console.log("hhhhhhh",resData)
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resData?.info
    return(
        <div className="res-card m-4 p-4 w-[245px] bg-gray-200 hover:bg-gray-400">
            <img className="res-logo rounded-lg" src={CDN_URL+cloudinaryImageId} alt="" />

            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

//Higher prder component
export const withPromotedLebel = (RestaurantCard)=>{
    //returning a functional component
    return (props)=>{
        return (
            <div>
                <lable>Promoted</lable>
                {/* {...props} => spread operator,  all the props receved */}
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
