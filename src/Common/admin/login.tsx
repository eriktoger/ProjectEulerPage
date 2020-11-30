import {ToastContainer} from "react-toastify";
import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {login} from "../../api/adminAPI";

export const Login = ({setIsLoggedIn, setIsSuperAdmin}: any) => {

    const [name, setName] = useState("kire6");
    const [password, setPassword] = useState("kire6");

    const handleName = (evt: React.FormEvent<HTMLInputElement>): void => {
        setName(evt.currentTarget.value);
    };
    const handlePassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setPassword(evt.currentTarget.value);
    };
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const body = {"name": name, "password": password};
        await login(body,setIsSuperAdmin,setIsLoggedIn,setName,setPassword);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleName}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePassword}/>
            </label>
            <input type="submit" value="Login"/>
        </form>
        <ToastContainer/>
    </>
}
