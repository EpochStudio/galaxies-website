"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 500);
    }, [pathname]);

    return (
        loading && (
            <div className="spinner-wrapper">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        )
    );
};

export default Preloader;
