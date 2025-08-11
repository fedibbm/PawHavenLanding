import WhoAreWePuppy from "../assets/pexels-mikhail-nilov-7474354.png"

export default function AboutUsSection() {
    return (
        <section className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12 md:gap-20 py-40 px-6">
            <div className="relative max-w-[500px]">
                <img
                    src={WhoAreWePuppy}
                    alt="A rescued puppy"
                    className="h-[400px] md:h-[500px] w-full object-cover rounded-2xl "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
            
            <article className="max-w-[700px] flex flex-col gap-12 md:gap-16">
                <header className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary capitalize font-poppins mb-6">Who We Are</h2>
                    <div className="h-1 w-20 bg-primary/20 mx-auto md:mx-0 rounded-full"></div>
                </header>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left">
                    PawHaven is a non-profit organization based in Tunis, dedicated to giving stray and abandoned dogs a second chance. Our mission is to provide a safe, loving environment and find forever homes for every dog that comes through our doors.
                </p>
                
                <ul className="grid grid-cols-3 gap-8 mt-4">
                    <li className="flex flex-col items-center p-6 rounded-xl bg-surface/40">
                        <span className="text-3xl md:text-4xl font-bold text-primary mb-2">🐕 120+</span>
                        <span className="text-sm md:text-base text-gray-600 font-medium">Dogs Rescued</span>
                    </li>
                    <li className="flex flex-col items-center p-6 rounded-xl bg-surface/40">
                        <span className="text-3xl md:text-4xl font-bold text-secondary mb-2">❤️ 98%</span>
                        <span className="text-sm md:text-base text-gray-600 font-medium">Adoption Rate</span>
                    </li>
                    <li className="flex flex-col items-center p-6 rounded-xl bg-surface/40">
                        <span className="text-3xl md:text-4xl font-bold text-primary mb-2">🏠 100+</span>
                        <span className="text-sm md:text-base text-gray-600 font-medium">Happy Homes</span>
                    </li>
                </ul>
            </article>
        </section>
    );
}
