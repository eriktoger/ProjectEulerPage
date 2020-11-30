import {toast, ToastContainer} from "react-toastify";
import React, {useState} from "react";
import jwtHandler from "../jwtHandler";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

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
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        try {
            const result = await axios.post('http://localhost:4000/admin/login', body, config);
            jwtHandler.setToken(result.data.token);
            setIsSuperAdmin(result.data.isSuperAdmin);
            setIsLoggedIn(jwtHandler.getToken() !== null);
        } catch (e) {
            toast.error(e.response.data.msg);
            setName("");
            setPassword("");
        }
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
