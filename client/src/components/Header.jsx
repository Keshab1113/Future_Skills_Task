// src/components/Header.jsx
import React from 'react';
import logo from "/logo.png"

const Header = () => {
    return (
        <header className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-8 h-8" />
                    <h1 className="text-xl font-bold">Abstract | Help Center</h1>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
                    Submit a request
                </button>
            </div>
        </header>
    );
};

export default Header;
