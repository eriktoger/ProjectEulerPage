import React, {useState} from "react";
import jwtHandler from "../../jwtHandler";
import {Login} from "./login";

import {Logout} from "./logout"
import {ChangePassword} from "./changePassword";
import {HandleAdmins} from "./handleAdmins";
import {CreateAdmin} from "./createAdmin";
import {AdminRadio} from "./adminRadio";

export const Admin = () => {
    const {isLoggedIn, isSuperAdmin} = jwtHandler.get();
    const [radioValue, setRadioValue] = useState("change-password");
    const [showLogin, setShowLogin] = useState(!isLoggedIn);

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
        {showLogin && <>
          <Login setShowLogin={setShowLogin}/>
        </>
        }
        {
            !showLogin &&
            <>
              <AdminRadio isSuperAdmin={isSuperAdmin} setRadioValue={setRadioValue}/>
                {showContent(radioValue)}
              <p/>
              <Logout setShowLogin={setShowLogin}/>
            </>
        }
    </>
};
