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
        { testimony: "The staff were amazing. Rex is the best dog I've ever had.", user: users.find(e => e.name == "Karim M.") },
    ];
  
    return ( 
        <section className="container mx-auto py-16 px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-secondary mb-4">Happy Tails</h2>
                <p className="text-gray-600">Read what our adopters have to say about their experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials && testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index} 
                        user={testimonial.user} 
                        testimony={testimonial.testimony}
                    />
                ))}
            </div>
        </section>
    )
}