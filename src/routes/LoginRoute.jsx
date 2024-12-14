import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router';
import Dashboard from '../backend/portal/dashboard/Dashboard'
import Home from '../frontend/home/Home';

function AdminRoutes() {
    const navigate = useNavigate()
    const role = localStorage.getItem("role");
    console.log(role);

    // function presentPage() {
    //     Navigate(-1);
    // }

    if (!role) return <Navigate to="/" replace="true" />;
    if (role.toLowerCase() == 'admin') {
        navigate('/dashboard');
    }
    else if (role.toLowerCase() == 'user') {
        return (
            <Home />
        )
    } else {
        return (
            <Outlet />
        )
    }

}

export default AdminRoutes