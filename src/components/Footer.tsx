import React from "react";
import { footerLinks } from "../data/data";
import { Link } from "react-router";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Linkedin from "../assets/images/Linkedin.png";
import Twitter from "../assets/images/Twitter.png";

const Footer: React.FC = () => {
    return (
        <footer className="py-10 px-6 bg-[#182B57] text-white shadow-lg">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 lg:mx-14">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="mb-6 lg:mb-0">
                            <h3 className="font-bold text-lg border-b border-white pb-2 mb-4">{section.category}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to={link.path}
                                            className="text-white hover:text-blue-200 transition-colors text-sm"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 border-t border-blue-400 pt-6 lg:mx-14">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-6 md:mb-0">
                            <p className="font-bold text-xl mr-3">IREG-IT</p>
                            <p className="text-blue-100">Your PDF Editor</p>
                        </div>

                        <div className="flex space-x-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-blue-100 hover:scale-110 hover:shadow-md transform transition-all duration-300 ease-in-out">
                                <img src={Instagram} alt="Instagram" className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-blue-100 hover:scale-110 hover:shadow-md transform transition-all duration-300 ease-in-out">
                                <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-blue-100 hover:scale-110 hover:shadow-md transform transition-all duration-300 ease-in-out">
                                <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-blue-100 hover:scale-110 hover:shadow-md transform transition-all duration-300 ease-in-out">
                                <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-6 text-sm text-blue-100">
                        <p>© {new Date().getFullYear()} IREG-IT. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
