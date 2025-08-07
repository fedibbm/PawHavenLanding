import { BiSolidDonateHeart } from "react-icons/bi"
import { BsPersonArmsUp } from "react-icons/bs"
import { LuPawPrint } from "react-icons/lu"

export default function GetInvolvedSection() {
    return (
        <section className="pt-20 space-y-20">
            <h2 className="text-3xl font-poppins text-center capitalize">Get Involved</h2>
            <ul className="grid grid-cols-3 w-fit mx-auto gap-30">
                <li className="max-w-40 flex flex-col gap-4 text-center items-center">
                    <BiSolidDonateHeart className="text-4xl text-gray-700" aria-hidden="true" />
                    <h3 className="text-4xl font-light">Donate</h3>
                    <p className="text-gray-700">Help us cover food, shelter, and medical care for rescued dogs.</p>
                </li>
                <li className="max-w-40 flex flex-col gap-4 text-center items-center">
                    <BsPersonArmsUp className="text-4xl text-gray-700" aria-hidden="true" />
                    <h3 className="text-4xl font-light">Volunteer</h3>
                    <p className="text-gray-700">Join our community of volunteers at the shelter or adoption events.</p>
                </li>
                <li className="max-w-40 flex flex-col gap-4 text-center items-center">
                    <LuPawPrint className="text-4xl text-gray-700" aria-hidden="true" />
                    <h3 className="text-4xl font-light">Foster</h3>
                    <p className="text-gray-700">Provide temporary homes for dogs waiting to be adopted.</p>
                </li>
            </ul>
        </section>
    )
}
