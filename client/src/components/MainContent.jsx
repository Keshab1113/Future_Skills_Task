// src/components/MainContent.jsx
import React, { useState } from 'react';
import SearchBar from "./SearchBar"

const MainContent = () => {
    const [search, setSearch] = useState('');

    const cards = [
        {
            title: "Branches",
            description: "Abstract Branches lets you manage, version, and document your designs in one place."
        },
        {
            title: "Manage your account",
            description: "Configure your account settings, such as your email, profile details, and password."
        },
        {
            title: "Manage organizations, teams, and projects",
            description: "Use Abstract organizations, teams, and projects to organize your people and your work."
        },
        {
            title: "Manage billing",
            description: "Change subscriptions and payment details."
        },
        {
            title: "Authenticate to Abstract",
            description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
        },
        {
            title: "Abstract support",
            description: "Get in touch with a human."
        }
    ];


    return (
        <main className="bg-gray-300 pt-10">
                <h2 className="text-center text-4xl font-semibold mb-8">How can we help?</h2>
                <SearchBar/>
                <div className=' pb-10 bg-white flex justify-center items-center '>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[70%] mt-24">
                    
                    {cards.map((card, index) => (
                        <div key={index} className="p-4 bg-slate-300 rounded-lg shadow hover:shadow-lg">
                            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
        </main>
    );
};

export default MainContent;
