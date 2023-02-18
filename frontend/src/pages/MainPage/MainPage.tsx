import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function MainPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/panel/machine');
    }, []);

    return (
        <div>
            <Link to={'/panel/machine'}>/panel/machine</Link>
        </div>
    );
}
