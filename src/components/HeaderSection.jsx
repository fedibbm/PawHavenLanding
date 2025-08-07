import HeroBlackPuppy from "../assets/hero-black-puppy.webp"

export default function HeaderSection() {
    return (
    <div id="home" className="w-full  min-h-[30vh] flex justify-center gap-40 pt-20 px-10 items-center">
        <div className="h-full flex flex-col justify-center -mt-10 max-w-180 gap-4">
            <h1 className="text-5xl  font-poppins ">"<span className="font-semibold">Every Dog Deserves a Home.</span>"</h1>
            <p className="text-xl"><span className="font-bold">PawHaven</span> is a local shelter committed to rescuing, rehabilitating, and rehoming dogs in need.</p>
            <div className="w-full flex justify-center gap-10">
                <button className="py-2 px-4 shadow-sm rounded-md text-lg cursor-pointer bg-stone-700/80 hover:shadow-lg text-white">Adopt A Dog</button>
                <button className="py-2 px-4 shadow-sm rounded-md text-lg cursor-pointer bg-stone-700/80 hover:shadow-lg text-white">Donate Now</button>
            </div>
        </div>
        <img src={HeroBlackPuppy} alt="dobermann puppy" className="h-140 w-140" />
    </div>
    );
}