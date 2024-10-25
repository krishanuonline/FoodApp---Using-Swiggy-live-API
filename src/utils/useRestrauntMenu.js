//Custom hook that fetch menu

import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId)=>{
    
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
         
        setResInfo(json.data);
    }


    return resInfo;
}

export default useRestrauntMenu;