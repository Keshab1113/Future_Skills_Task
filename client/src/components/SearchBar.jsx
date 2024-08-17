import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="flex justify-center my-10">
            <div className="relative w-[30%]">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4 pr-12 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
