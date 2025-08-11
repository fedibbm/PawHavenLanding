export default function TestimonialCard({ user, testimony }) {
    return (
        <figure className="flex flex-col sm:flex-row justify-start items-center gap-6 sm:gap-10 p-6 max-w-[700px] bg-white/60 rounded-2xl shadow-sm">
            <img
                src={user.image}
                alt={`Portrait of ${user.name}`}
                className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full"
            />
            <figcaption>
                <blockquote className="italic font-light text-gray-800 text-center sm:text-left">
                    <span className="text-xl font-sans font-bold">" </span>
                    {testimony}
                    <span className="text-xl font-sans font-bold"> "</span>
                </blockquote>
                <p className="capitalize font-semibold text-lg mt-3 text-center sm:text-left">
                    – <cite className="not-italic">{user.name}</cite>
                </p>
            </figcaption>
        </figure>
    );
}
