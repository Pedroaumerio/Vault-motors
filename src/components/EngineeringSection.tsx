import CarCard from "./CarCard";

const cars = [
  {
    name: "V-9 Phantom",
    price: "$245,000",
    acceleration: "2.1s",
    imageSrc: "/car-v9-phantom.png",
    imageAlt: "V-9 Phantom rear view with red LED tail lights",
  },
  {
    name: "Stratos EV",
    price: "$198,500",
    acceleration: "2.4s",
    imageSrc: "/car-stratos-ev.png",
    imageAlt: "Stratos EV rear view with amber tail lights",
  },
  {
    name: "Nebula X",
    price: "$312,000",
    acceleration: "1.8s",
    imageSrc: "/car-nebula-x.png",
    imageAlt: "Nebula X interior cockpit view",
  },
];

export default function EngineeringSection() {
  return (
    <section id="models" className="w-full bg-[var(--background)] py-20 lg:py-28">
      <div className="container-center">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold text-[var(--accent-cyan)] tracking-[0.25em] uppercase mb-3">
            Apex Engineering
          </p>
          <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed mx-auto">
            The pinnacle of our pursuit in the auto achievements in
            innovation design.
          </p>
        </div>

        {/* Car Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard
              key={car.name}
              name={car.name}
              price={car.price}
              acceleration={car.acceleration}
              imageSrc={car.imageSrc}
              imageAlt={car.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
