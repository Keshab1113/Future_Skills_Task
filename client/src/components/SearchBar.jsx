import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/cards');
                const data = await response.json();
                setCards(data);
                setError(null);
            } catch (err) {
                setError('An error occurred while fetching the cards');
            }
        };

        fetchCards();
    }, []);

    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            try {
                const response = await fetch('http://localhost:3000/cards');
                const data = await response.json();
                setCards(data);
                setError(null);
            } catch (err) {
                setError('An error occurred while fetching the cards');
            }
        } else {
            try {
                const response = await fetch(`http://localhost:3000/cards/${searchQuery}`);
                if (!response.ok) {
                    setError('Card not found');
                    setCards([]);
                } else {
                    const data = await response.json();
                    setCards([data]); // Show only the searched card
                    setError(null);
                }
            } catch (err) {
                setError('An error occurred');
                setCards([]);
            }
        }
    };

    return (
        <div className="flex justify-center flex-col items-center w-full">
            <div className="relative w-[40%]">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4 pr-12 py-2 rounded-lg shadow-md border border-gray-800 focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    onClick={handleSearch}
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className=' mt-20 bg-white flex justify-center items-center pb-24 w-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-[55%] mt-24 ">
            {error && <div className="text-red-500 mt-4  mx-auto my-auto">{error}</div>}
                {cards.map(card => (
                    <div key={card._id} className="mb-4 border border-slate-300 rounded-lg shadow bg-slate-100">
                        <h2 className="text-lg font-bold border-b-2 w-full border-slate-300 px-4 py-2">{card.title}</h2>
                        <p className="p-4">{card.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
