import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from "/logo.png";

Modal.setAppElement('#root');

const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });
            setTitle("");
            setDescription("");

            if (!response.ok) {
                throw new Error('Failed to submit the request');
            }

            const result = await response.json();
            closeModal();
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    return (
        <header className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-8 h-8 rounded"/>
                    <h1 className="text-xl font-bold">Abstract | Help Center</h1>
                </div>
                <button
                    onClick={openModal}
                    className="bg-gray-800 border hover:bg-gray-700 px-4 py-2 rounded"
                >
                    Submit a request
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="bg-white w-[40%] p-6 rounded shadow-lg max-w-md mx-auto mt-20"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="text-xl font-bold mb-4">Submit a Request</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className='  flex justify-end items-center'>
                    <button
                        onClick={closeModal}
                            className=" text-red-500 border px-4 py-2 hover:text-white mr-4 hover:bg-red-500 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send
                        </button>
                    </div>
                </form>
                
            </Modal>
        </header>
    );
};

export default Header;
