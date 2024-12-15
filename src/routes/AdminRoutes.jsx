import React from 'react'

function AdminRoutes() {
    const role = localStorage.getItem("role");
    function presentPage() {
        navigate(-1);
    }

    if (!role) return <Navigate to="/" />;
    if (role.toLowerCase() == 'admin') {
        return <Home />
    } else {
        presentPage()
    }

}

export default AdminRoutes