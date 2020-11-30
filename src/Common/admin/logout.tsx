import React from "react";
import jwtHandler from "../../jwtHandler";
export const Logout=({setIsLoggedIn}:any)=>{
    const handleClick=(evt:any)=>{
        evt.preventDefault();
        setIsLoggedIn(false);
        jwtHandler.eraseToken();
    }
    return <button onClick={handleClick}> Log out</button>
}
