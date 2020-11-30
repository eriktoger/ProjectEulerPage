import React, {useState} from "react";
import jwtHandler from "../jwtHandler";
import {Login} from "./login";

import {Logout} from "./logout"
import {ChangePassword} from "./changePassword";
import {HandleAdmins} from "./handleAdmins";
import {CreateAdmin} from "./createAdmin";
import {AdminRadio} from "./adminRadio";

export const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(jwtHandler.getToken() !== null);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [radioValue, setRadioValue] = useState("change-password");

    const showContent = (value: string) => {
        switch (value) {
            case "change-password":
                return <ChangePassword/>;
            case "handle-admins":
                return <HandleAdmins/>;
            case "create-admin":
                return <CreateAdmin/>
            default:
                return <></>
        }
    }

    return <>
        {!isLoggedIn && <>
          <Login setIsLoggedIn={setIsLoggedIn} setIsSuperAdmin={setIsSuperAdmin}/>
        </>
        }
        {
            isLoggedIn &&
            <>
                <AdminRadio isSuperAdmin={isSuperAdmin} setRadioValue={setRadioValue}/>
                {showContent(radioValue)}
              <p/>
              <Logout setIsLoggedIn={setIsLoggedIn}/>
            </>
        }
    </>
};
