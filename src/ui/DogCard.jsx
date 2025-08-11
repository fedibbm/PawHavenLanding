export default function DogCard({ image, name, age }) {
    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-white/80 rounded-2xl border border-stone-200 w-64">
            <div className="relative">
                <img src={image} alt={name} className="h-40 w-40 object-cover rounded-2xl border-4 border-primary" />
                <span className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{age} yrs</span>
            </div>
            <h3 className="text-2xl font-extrabold text-primary text-center">{name}</h3>
            <span className="text-base text-stone-600 italic">Looking for a home!</span>
        </div>
    );
}
