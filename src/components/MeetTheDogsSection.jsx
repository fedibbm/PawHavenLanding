import lutherImage from "../assets/our dogs/luther.jpg"
import MariaImage from "../assets/our dogs/Maria.jpg"
import MaxImage from "../assets/our dogs/Max.jpg"
import LunaImage from "../assets/our dogs/luna.jpeg"
import DogCard from "../ui/DogCard"

const dogs = [
    { name: "luther", age: 2, image: lutherImage },
    { name: "Maria ", age: 2, image: MariaImage },
    { name: "Max", age: 2, image: MaxImage },
    { name: "Luna", age: 2, image: LunaImage }
]

export default function MeetTheDogsSection() {
    return (
        <section className="pt-20 space-y-20">
            <h1 className="text-3xl font-poppins text-center capitalize">Meet the dogs</h1>
            <ul className="grid grid-cols-3 w-fit gap-x-40 gap-y-10 mx-auto">
                {dogs.map((dog, index) => (
                    <li key={index}>
                        <DogCard name={dog.name} age={dog.age} image={dog.image} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
