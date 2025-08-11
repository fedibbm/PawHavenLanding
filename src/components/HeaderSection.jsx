import HeroBlackPuppy from "../assets/hero-black-puppy.webp"

export default function HeaderSection() {
    return (
    <div id="home" className="w-full min-h-[70vh] flex flex-col-reverse md:flex-row justify-center md:gap-20 lg:gap-40 pt-10 md:pt-20 px-6 md:px-10 items-center">
        <div className="h-full flex flex-col justify-center gap-6 md:gap-4  text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-primary font-poppins">"<span className="font-semibold">Every Dog Deserves a Home.</span>"</h1>
            <p className="text-lg md:text-xl"><span className="font-bold text-secondary">PawHaven</span> is a local shelter committed to rescuing, rehabilitating, and rehoming dogs in need.</p>
            <div className="w-full flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 pt-6">
                <button className="py-2 px-4 shadow-sm rounded-md text-base md:text-lg cursor-pointer bg-gradient-to-r from-primary/60 to-secondary/60 hover:scale-105 hover:shadow-xl transition-all duration-200 font-semibold text-white">Adopt A Dog</button>
                <button className="py-2 px-4 shadow-sm rounded-md text-base md:text-lg cursor-pointer bg-gradient-to-r from-primary/60 to-secondary/60 hover:scale-105 hover:shadow-xl transition-all duration-200 font-semibold text-white">Donate Now</button>
            </div>
        </div>
        <img src={HeroBlackPuppy} alt="dobermann puppy" className="w-full max-w-[280px] md:max-w-[380px] lg:max-w-[600px] h-auto mb-10 md:mb-0 select-none" />
    </div>
    );
}