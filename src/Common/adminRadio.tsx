import React from "react";

// Name
// password
// isSuperAdmin
export const AdminRadio=( {isSuperAdmin,setRadioValue}:{isSuperAdmin:boolean,setRadioValue: React.Dispatch<React.SetStateAction<string>>})=>{
    return <div onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(e.target.value)
    }}>
        <input type="radio" value="change-password" defaultChecked name="task"/> Change Password

        {isSuperAdmin && <>
          <input type="radio" value="handle-admins" name="task"/>Handle admins
          <input type="radio" value="create-admin" name="task"/>Create new admin
        </>}
        <br></br>
        <input type="radio" value="create-problem" name="task"/>Create new problem
        <input type="radio" value="modify-problem" name="task"/>Modify problem
        <input type="radio" value="delete-problem" name="task"/>Delete problem
    </div>
}
