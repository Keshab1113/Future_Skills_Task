import React, { useEffect, useState } from 'react';
import SearchBar from "./SearchBar"

const MainContent = () => {
    return (
        <main className="bg-gray-300 pt-10">
                <h2 className="text-center text-6xl font-semibold mb-8">How can we help?</h2>
                <SearchBar/>
        </main>
    );
};

export default MainContent;
