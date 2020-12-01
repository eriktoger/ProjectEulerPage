import React from "react";
import jwtHandler from "../../jwtHandler";

export const Logout = ({setShowLogin}: { setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleClick = (evt: any) => {
        evt.preventDefault();
        jwtHandler.erase();
        setShowLogin(true);
    }
    return <button onClick={handleClick}> Log out</button>
}
