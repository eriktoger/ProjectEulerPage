import React, {useState} from "react";
import axios from "axios";
import jwtHandler from "../jwtHandler";
import {toast, ToastContainer} from "react-toastify";

export const CreateAdmin = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const handleName = (evt: React.FormEvent<HTMLInputElement>): void => {
        setName(evt.currentTarget.value);
    };
    const handlePassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setPassword(evt.currentTarget.value);
    };
    const handleIsSuperAdmin = (evt: React.FormEvent<HTMLInputElement>): void => {
        setIsSuperAdmin(!isSuperAdmin);
    };

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const body = {"name": name, "password": password, "isSuperAdmin": isSuperAdmin};
        const config = {
            headers: {
                "Content-type": "application/json",
                "x-auth-token": jwtHandler.getToken()
            },
        };
        try {
            const result = await axios.post("http://localhost:4000/admin", body, config);
            toast.success(result.data.msg);
        } catch (e) {
            toast.error(e.response.data.msg);
        }
    }

    return <>
        <p>Create new admins</p>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleName}/>
            </label>
            <label>
                Password:
                <input type="text" name="password" value={password} onChange={handlePassword}/>
            </label>
            <label>
                Is super admin:
                <input type="checkbox" name="isSuperAdmin" onClick={handleIsSuperAdmin}/>
            </label>
            <p/>
            <input type="submit" value="Create"/>
        </form>
        <ToastContainer/>
    </>
}
