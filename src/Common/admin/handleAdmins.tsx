import React, {useEffect, useState} from "react";
import {AdminCard} from "./adminCard";
import {deleteAdmin, togglePrivilege} from "../../api/adminAPI";
import {fetchAdmins} from "../../api/adminAPI";
import {ToastContainer} from "react-toastify";

export interface AdminCardProps {
    _id: string
    name: string
    isSuperAdmin: boolean
    createdAt: Date
}

export const HandleAdmins = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchAdmins(setData);
        };
        fetchData();
    }, [])

    const handleDelete = async (id: string) => {
        await deleteAdmin(id);
        await fetchAdmins(setData);
    }
    const toggleSuperAdmin= async (id: string, isSuperAdmin: boolean) =>  {
        isSuperAdmin = await togglePrivilege(id, isSuperAdmin);
        await fetchAdmins(setData);
        return isSuperAdmin;
    }

    return <>
        {data.map((admin: AdminCardProps) => {
            return <AdminCard key={admin._id} admin={admin} toggleSuperAdmin={toggleSuperAdmin} handleDelete={handleDelete}/>
        })}
        <ToastContainer/>
    </>;

}
