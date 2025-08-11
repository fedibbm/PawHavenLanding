import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function FooterSection() {
    return (
        <footer className="w-full bg-gradient-to-b from-background via-background to-[#D0A376]/60 backdrop-blur-md text-stone-900 py-8 md:px-6 flex flex-col items-center mt-16">
            <div className="flex items-center justify-center md:justify-normal gap-2 mb-4">
                <span className="font-bold  text-xl tracking-wide">
                    PawHaven
                </span>
            </div>
            <div className="flex  justify-between w-full px-20 ">
                <nav className="mb-4">
                    <ul className="flex flex-col md:flex-row gap-6 text-base font-medium">
                        <li>
                            <a href="#home" className="hover:text-orange-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#dogs" className="hover:text-orange-600">
                                Adopt
                            </a>
                        </li>
                        <li>
                            <a href="#donate" className="hover:text-orange-600">
                                Donate
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-orange-600"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="text-stone-700 text-sm mt-2 absolute left-1/2 -translate-x-1/2 md:bottom-8 bottom-2">
                    Copyright © 2025 PawHaven
                </div>
                <div className="flex  flex-col md:flex-row gap-4 md:mb-4">
                    <a
                        href="https://X.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="hover:text-orange-600 flex gap-2 items-center"
                    >
                        <FaXTwitter className="text-3xl" />{" "}
                        <p className="font-semibold">PawHaven</p>
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-orange-600 flex gap-2 items-center"
                    >
                        <FaFacebook className="text-3xl" />{" "}
                        <p className="font-semibold">PawHaven</p>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram"
                        className="hover:text-orange-600 flex gap-2 items-center"
                    >
                        <FaInstagram className="text-3xl" />{" "}
                        <p className="font-semibold">PawHaven</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}
