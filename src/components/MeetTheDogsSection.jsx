

import lutherImage from "../assets/our dogs/luther.jpg";
import MariaImage from "../assets/our dogs/Maria.jpg";
import MaxImage from "../assets/our dogs/Max.jpg";
import LunaImage from "../assets/our dogs/luna.jpeg";
import DogCard from "../ui/DogCard";
import { useState } from "react";

const dogs = [
    {
        name: "luther",
        age: 2,
        image: lutherImage,
        story: "Luther was found wandering the streets, scared and hungry. Now, he loves cuddles and long walks!"
    },
    {
        name: "Maria",
        age: 2,
        image: MariaImage,
        story: "Maria was rescued from a shelter. She is gentle, sweet, and loves to play with children."
    },
    {
        name: "Max",
        age: 2,
        image: MaxImage,
        story: "Max is energetic and loyal. He was surrendered by his previous owner and is looking for a forever home."
    },
    {
        name: "Luna",
        age: 2,
        image: LunaImage,
        story: "Luna was born at PawHaven. She is playful, loving, and always ready for a new adventure!"
    }
];

export default function MeetTheDogsSection() {
    const [selectedDog, setSelectedDog] = useState(null);

    return (
        <section className="py-40  flex flex-col items-center  rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-poppins text-center capitalize text-secondary font-bold mb-12 ">Meet the Dogs</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-16  gap-y-12 w-fit mx-auto">
                {dogs.map((dog, index) => (
                    <li key={index} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedDog(dog)}>
                        <DogCard name={dog.name} age={dog.age} image={dog.image} />
                    </li>
                ))}
            </ul>

            {selectedDog && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
                        <button className="absolute top-4 right-4 text-4xl font-bold text-stone-500 hover:text-stone-800" onClick={() => setSelectedDog(null)}>&times;</button>
                        <img src={selectedDog.image} alt={selectedDog.name} className="h-32 w-32 object-cover rounded-xl mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-primary text-center mb-2">{selectedDog.name}</h3>
                        <span className="block text-sm text-secondary text-center mb-4">{selectedDog.age} years old</span>
                        <p className="text-base text-stone-700 text-center">{selectedDog.story}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
