import WhoAreWePuppy from "../assets/pexels-mikhail-nilov-7474354.png"

export default function AboutUsSection() {
    return (
        <section className="w-full flex justify-center items-stretch gap-20 pt-40">
            <img
                src={WhoAreWePuppy}
                alt="A rescued puppy"
                className="h-[500px] w-[500px] object-cover"
            />
            <article className="max-w-[700px] flex flex-col gap-30">
                <header>
                    <h2 className="text-3xl font-poppins text-center capitalize">Who We Are</h2>
                </header>
                <p className="text-xl text-gray-900">
                    PawHaven is a non-profit organization based in Tunis, dedicated to giving stray and abandoned dogs a second chance. Our mission is to provide a safe, loving environment and find forever homes for every dog that comes through our doors.
                </p>
                <ul className="w-full flex justify-around">
                    <li>
                        <span className="text-3xl font-bold">🐕 120+</span>
                        <br />
                        <span>Dogs Rescued</span>
                    </li>
                    <li>
                        <span className="text-3xl font-bold">❤️ 98%</span>
                        <br />
                        <span>Adoption Rate</span>
                    </li>
                    <li>
                        <span className="text-3xl font-bold">🏠 100+</span>
                        <br />
                        <span>Happy Homes</span>
                    </li>
                </ul>
            </article>
        </section>
    );
}
