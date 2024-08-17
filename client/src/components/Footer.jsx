// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h4 className="font-bold mb-2">Abstract</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">Branches</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Resources</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Release Notes</a></li>
                        <li><a href="#" className="hover:underline">Status</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Community</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Dribbble</a></li>
                        <li><a href="#" className="hover:underline">Podcast</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Company</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Legal</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                    <div className="mt-4">
                        <a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
