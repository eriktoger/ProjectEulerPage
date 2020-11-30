import {toast, ToastContainer} from "react-toastify";
import React, {useState} from "react";
import jwtHandler from "../../jwtHandler";
import 'react-toastify/dist/ReactToastify.css';
import {changePassword} from "../../api/adminAPI";

export const ChangePassword = ()=>{

    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleNewPassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setNewPassword(evt.currentTarget.value);
    };
    const handleRepeatPassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setRepeatPassword(evt.currentTarget.value);
    };
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(newPassword !== repeatPassword){
            toast.error("Passwords did not match");
            setNewPassword("");
            setRepeatPassword("");
            return;
        }

        const body = {"password": newPassword};
        const config = {
            headers: {
                "Content-type": "application/json",
                "x-auth-token": jwtHandler.getToken()
            },
        };
        await changePassword(body,config,setNewPassword,setRepeatPassword);
    }

    return <>
        <p>Change password</p>
        <form onSubmit={handleSubmit}>
            <label>
                New Password:
                <input type="password" name="name" value={newPassword} onChange={handleNewPassword}/>
            </label>
            <label>
                Repeat Password:
                <input type="password" name="password" value={repeatPassword} onChange={handleRepeatPassword}/>
            </label>
            <input type="submit" value="Change Password"/>
        </form>
        <ToastContainer/>
    </>
}
