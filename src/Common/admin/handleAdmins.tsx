import React, {useEffect, useState} from "react";
import {AdminCard} from "./adminCard";
import {deleteAdmin} from "../../api/adminAPI";
import {fetchAdmins} from "../../api/adminAPI";

export interface AdminCardProps {
    _id: string
    name: string
    isSuperAdmin: boolean
    createdAt: Date
}

export const HandleAdmins = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            await fetchAdmins(setData);
        };
        fetchData();
    }, [])

    const handleDelete = async (id:string) => {

        await deleteAdmin(setData, id);
        await fetchAdmins(setData);
    }

    return <>
        <p>Handle admins</p>
        {data.map((admin: AdminCardProps) => {
            return <AdminCard key={admin._id} admin={admin} handleDelete={handleDelete}/>
        })}
    </>;

}
