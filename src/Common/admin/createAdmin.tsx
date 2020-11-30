import React, {useState} from "react";
import jwtHandler from "../../jwtHandler";
import {ToastContainer} from "react-toastify";
import {createAdmin} from "../../api/adminAPI";

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

        await createAdmin(body);
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
