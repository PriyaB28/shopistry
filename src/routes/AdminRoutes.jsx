import React from 'react'
import {Navigate, Outlet } from 'react-router';
import Dashboard from '../backend/portal/dashboard/Dashboard'

function AdminRoutes() {
    const role = localStorage.getItem("role");
    console.log(role);
    
    // function presentPage() {
    //     Navigate(-1);
    // }

    if (!role) return <Navigate to="/login" replace="true" />;
    if (role.toLowerCase() == 'admin') {
         return (
            <Outlet/>
        )
    }
    else {
        return (
            <Navigate to="/login" replace="true" />
        )
    }

}

export default AdminRoutes