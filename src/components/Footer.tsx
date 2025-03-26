import React from "react";
import { footerLinks } from "../data/data";
import { Link } from "react-router-dom";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Linkedin from "../assets/images/Linkedin.png";
import Twitter from "../assets/images/Twitter.png";

const Footer: React.FC = () => {
    return (
        <footer className="py-8 px-6 mx-2 lg:mx-14 mb-2 border border-gray-500 ">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-gray-700 mx-14">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-black text-lg text-[#182B57] underline underline-offset-4">{section.category}</h3>
                            <ul className="mt-4 space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to={link.path}
                                            className=" text-[#182B57] hover:text-blue-500 transition-colors"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 border-t border-gray-500 pt-6 flex flex-row lg:flex-col items-end justify-between lg:mx-14">
                    <div className="flex items-center mb-2 text-[#182B57]">
                        <p className="underline font-bold mx-3  "> IREG-IT </p>
                        <p>Your PDF Editor</p></div>

                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

               
            </div>
        </footer>
    );
};

export default Footer;
