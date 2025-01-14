// NotFound.tsx
import { Button } from 'antd';
import React from 'react';
import {  useNavigate } from 'react-router-dom'; // Use 'next/router' if using Next.js

const NotFound: React.FC = () => {
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center" style={{ height: '100vh' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Button  onClick={handleGoHome} >
                Go to Home
            </Button>
        </div>
    );
};

export default NotFound;
