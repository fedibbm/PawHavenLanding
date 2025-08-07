export default function DogCard({ image, name, age }) {
    return (
        <article className="w-fit">
            <figure>
                <img src={image} alt={`${name} picture`} className="h-[300px] w-[200px] object-cover" />
                <figcaption className="flex justify-between pt-2">
                    <span>{name}</span>
                    <span>{age} years old</span>
                </figcaption>
            </figure>
        </article>
    );
}
