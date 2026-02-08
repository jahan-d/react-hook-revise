import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div>
                Welcome for auth Testing
            </div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;