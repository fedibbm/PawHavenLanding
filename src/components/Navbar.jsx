import React from "react";

export default function Navbar() {
    return (
        <nav className="w-full  backdrop-blur-md bg-surface/60  shadow-primary/20 text-stone-900 py-4 px-10 flex justify-between items-center shadow-lg rounded-xl  mx-auto max-w-6xl">
            <div className="font-bold text-2xl tracking-wide drop-shadow-sm">PawHaven</div>
            <ul className="hidden md:flex gap-8 text-base">
                <li>
                    <a href="#home" className="hover:text-stone-700 transition-colors duration-200">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-stone-700 transition-colors duration-200">About</a>
                </li>
                <li>
                    <a href="#dogs" className="hover:text-stone-700 transition-colors duration-200">Meet the Dogs</a>
                </li>
                <li>
                    <a href="#involved" className="hover:text-stone-700 transition-colors duration-200">Get Involved</a>
                </li>
                <li>
                    <a href="#testimonials" className="hover:text-stone-700 transition-colors duration-200">Testimonials</a>
                </li>
                <li>
                    <a href="#donate" className="hover:text-stone-700 transition-colors duration-200">Donate</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-stone-700 transition-colors duration-200">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
