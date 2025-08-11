import { BiSolidDonateHeart } from "react-icons/bi"
import { BsPersonArmsUp } from "react-icons/bs"
import { LuPawPrint } from "react-icons/lu"

export default function GetInvolvedSection() {
    return (
        <section className="py-40 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-poppins text-center capitalize text-secondary font-bold mb-20">
                Get Involved
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-3 w-fit mx-auto gap-16 md:gap-30">
                <li className="max-w-64 group flex flex-col gap-6 text-center items-center p-8 rounded-xl bg-surface/40">
                    <div className="p-4 rounded-full bg-primary/10">
                        <BiSolidDonateHeart 
                            className="text-5xl text-primary" 
                            aria-hidden="true" 
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary">Donate</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Help us cover food, shelter, and medical care for rescued dogs.
                    </p>
                    <button className="mt-4 cursor-pointer px-6 py-2 text-primary border border-primary/20 rounded-md hover:bg-primary/5 transition-colors duration-200">
                        Learn More
                    </button>
                </li>

                <li className="max-w-64 group flex flex-col gap-6 text-center items-center p-8 rounded-xl bg-surface/40">
                    <div className="p-4 rounded-full bg-secondary/10">
                        <BsPersonArmsUp 
                            className="text-5xl text-secondary" 
                            aria-hidden="true" 
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary">Volunteer</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Join our community of volunteers at the shelter or adoption events.
                    </p>
                    <button className="mt-4 cursor-pointer px-6 py-2 text-secondary border border-secondary/20 rounded-md hover:bg-secondary/5 transition-colors duration-200">
                        Join Us
                    </button>
                </li>

                <li className="max-w-64 group flex flex-col gap-6 text-center items-center p-8 rounded-xl bg-surface/40">
                    <div className="p-4 rounded-full bg-primary/10">
                        <LuPawPrint 
                            className="text-5xl text-primary" 
                            aria-hidden="true" 
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary">Foster</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Provide temporary homes for dogs waiting to be adopted.
                    </p>
                    <button className="mt-4 cursor-pointer px-6 py-2 text-primary border border-primary/20 rounded-md hover:bg-primary/5 transition-colors duration-200">
                        Apply Now
                    </button>
                </li>
            </ul>
        </section>
    )
}
