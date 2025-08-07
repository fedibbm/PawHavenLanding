import { useEffect } from "react"
import AmiraImage from "../assets/users/amira.jpg"
import KarimImgae from "../assets/users/karim.jpeg"
import TestimonialCard from "../ui/TestimonialCard"

export default function TestimonialsSection() {
    const users = [
        { name: "Amira B.", image: AmiraImage },
        { name: "Karim M.", image: KarimImgae }
    ];

    const testimonials = [
        { testimony: "Adopting from PawHaven changed my life. Bella is part of our family now!", user: users.find(e => e.name == "Amira B.") },
        { testimony: "The staff were amazing. Rex is the best dog I’ve ever had.", user: users.find(e => e.name == "Karim M.") },
    ];
  
    return ( 

        <section className="pt-20 space-y-20">
            <h2 className="text-3xl font-poppins text-center capitalize">Happy Tails</h2>
            <div className="flex flex-col gap-10 w-fit mx-auto">
                {testimonials && testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} user={testimonial.user} testimony={testimonial.testimony} />
                ))}
            </div>


        </section>
    )
}