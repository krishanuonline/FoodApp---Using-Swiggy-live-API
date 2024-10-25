import { useEffect, useState } from "react"

//Custom Hooks - check internet connection and  showing online/offline
const useOnlineStatus = ()=>{
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false);
        })
        window.addEventListener("online",()=>{
            setStatus(true);
        })
    },[])

    return status;
}

export default useOnlineStatus;