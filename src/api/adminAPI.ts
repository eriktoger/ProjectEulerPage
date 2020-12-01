import axios from "axios";
import {toast} from "react-toastify";
import React from "react";
import jwtHandler from "../jwtHandler";

const SERVER_URL = 'http://localhost:4000';

export const changePassword = async (body: object, config: object, setNewPassword: React.Dispatch<React.SetStateAction<string>>, setRepeatPassword: React.Dispatch<React.SetStateAction<string>>) => {
    try {
        const result = await axios.patch(`${SERVER_URL}/admin`, body, config);
        toast.success(result.data.msg)
    } catch (e) {
        console.log("e ", e);
        toast.error(e.response.data.msg);
        setNewPassword("");
        setRepeatPassword("");
    }
}

export const togglePrivilege = async ( id:string, isSuperAdmin:boolean) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": jwtHandler.get().token
        },
    };
    try {
        const result = await axios.patch(`${SERVER_URL}/admin/${id}`,{},config);
        toast.success(result.data.msg)
        return result.data.isSuperAdmin;
    } catch (e) {
        console.log("e ", e);
        toast.error(e.response.data.msg);
        return isSuperAdmin;
    }
}

export const createAdmin = async (body: object) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": jwtHandler.get().token
        },
    };
    try {
        const result = await axios.post(`${SERVER_URL}/admin`, body, config);
        toast.success(result.data.msg);
    } catch (e) {
        toast.error(e.response.data.msg);
    }
}

export const deleteAdmin = async (id: string) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": jwtHandler.get().token
        },
    };
    try {
        const result = await axios.delete(
            `${SERVER_URL}/admin/${id}`, config);
        toast.success(result.data.msg);
    } catch (e) {
        toast.error(e.response.data.msg);
    }
};

export const fetchAdmins = async (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": jwtHandler.get().token
        },
    };
    const result = await axios.get(
        `${SERVER_URL}/admin`, config);
    setData(result.data);
};

const config = {
    headers: {
        "Content-type": "application/json",
    },
};

export const login = async (body: object,
                            setShowLogin: React.Dispatch<React.SetStateAction<boolean>>,
                            setName: React.Dispatch<React.SetStateAction<string>>,
                            setPassword: React.Dispatch<React.SetStateAction<string>>) => {
    try {
        const result = await axios.post(`${SERVER_URL}/admin/login`, body, config);
        jwtHandler.set(result.data.token,result.data.isSuperAdmin);
        setShowLogin(result.data.token === null);
    } catch (e) {
        toast.error(e.response.data.msg);
        setName("");
        setPassword("");
    }
}
