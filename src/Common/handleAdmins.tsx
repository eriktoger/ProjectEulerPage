import React, {useEffect, useState} from "react";
import jwtHandler from "../jwtHandler";
import axios from "axios";
import {toast} from "react-toastify";
import {AdminCard} from "./adminCard";

export interface AdminCardProps {
    _id: string
    name: string
    isSuperAdmin: boolean
    createdAt: Date
}
//maybe should be in api?
//should be in try-catches as well.
const fetchData = async (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": jwtHandler.getToken()
        },
    };
    const result = await axios.get(
        "http://localhost:4000/admin", config);
    setData(result.data);
};

const deleteAdmin = async (setData: React.Dispatch<React.SetStateAction<never[]>>, id:string) => {
    const config = {
        headers: {
            "Content-type": "application/json",
            "x-auth-token": jwtHandler.getToken()
        },
    };
    try {
        const result = await axios.delete(
            `http://localhost:4000/admin/${id}`, config);
        toast.success(result.data.msg);
    } catch (e) {
        toast.error(e.response.data.msg);
    }

};

export const HandleAdmins = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        fetchData(setData);

    }, [])

    const handleDelete = async (id:string) => {
        // make call to delete
        await deleteAdmin(setData, id);
        // fetch
        await fetchData(setData);
    }

    return <>
        <p>Handle admins</p>
        {data.map((admin: AdminCardProps) => {
            return <AdminCard key={admin._id} admin={admin} handleDelete={handleDelete}/>
        })}
    </>;

}
