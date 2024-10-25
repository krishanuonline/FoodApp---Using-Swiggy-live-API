import { useState } from "react";
  
const User = (props)=>{
    return(
        <div className="user-card">
            <h2>Name : {props.name} (function)</h2>
            <h3>Location : Kolkata</h3>
            <h4>Contact : krishanu178@gmail.com</h4>
        </div>
    )
}

export default User;