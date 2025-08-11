import { BiSolidDonateHeart } from "react-icons/bi"



export default function DonationSection() {
    return (
        <section className="py-20 md:py-30 flex flex-col items-center px-4">
            <div className="border-4 border-white bg-gradient-to-br from-green-300/20 via-white/80 to-green-300/20 flex flex-col items-center gap-6 px-6 md:px-20 py-12 md:py-20 overflow-hidden relative rounded-2xl max-w-4xl w-full">
                <div className="flex items-center gap-3 z-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center capitalize font-poppins drop-shadow-sm z-10">
                        Every Donation Saves a Life.
                    </h2>
                </div>
                <p className="text-base md:text-lg text-center z-10">
                    Your support helps us provide <span className="font-semibold text-purple-600">food</span>, <span className="font-semibold text-orange-600">shelter</span>, <span className="font-semibold text-green-600">medical care</span>, and <span className="font-semibold text-pink-600">love</span> to dogs in need.
                </p>
                <button className="z-10 capitalize py-3 px-8 bg-green-400/70 cursor-pointer flex gap-4 rounded-sm shadow-md text-white font-semibold text-lg hover:scale-102get hover:shadow-xl transition-all duration-200">
                    Donate now <BiSolidDonateHeart className="text-xl" />
                </button>
            </div>
        </section>
    );
}