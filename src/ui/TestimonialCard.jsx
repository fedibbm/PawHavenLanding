export default function TestimonialCard({ user, testimony }) {
    return (
        <figure className="border-orange-600/0 border-4 flex justify-start items-center gap-10 pl-4 max-w-[700px]">
            <img
                src={user.image}
                alt={`Portrait of ${user.name}`}
                className="h-30 w-30 object-cover"
            />
            <figcaption>
                <blockquote className="italic font-light text-gray-800">
                    <span className="text-xl font-sans font-bold">" </span>
                    {testimony}
                    <span className="text-xl font-sans font-bold"> "</span>
                </blockquote>
                <p className="capitalize font-semibold text-xl">
                    – <cite className="not-italic">{user.name}</cite>
                </p>
            </figcaption>
        </figure>
    );
}
