import { Link } from "react-router-dom";
import type { Bike } from "@/data/bikes";
import bikeMountain from "@/assets/bike-mountain.jpg";
import bikeRoad from "@/assets/bike-road.jpg";
import bikeElectric from "@/assets/bike-electric.jpg";
import bikeCruiser from "@/assets/bike-cruiser.jpg";
import bikeSport from "@/assets/bike-sport.jpg";

const imageMap: Record<string, string> = {
  "bike-mountain": bikeMountain,
  "bike-road": bikeRoad,
  "bike-electric": bikeElectric,
  "bike-cruiser": bikeCruiser,
  "bike-sport": bikeSport,
};

const BikeCard = ({ bike }: { bike: Bike }) => (
  <Link to={`/bike/${bike.id}`} className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:glow-red cursor-pointer">
    <div className="relative aspect-square overflow-hidden">
      <img
        src={imageMap[bike.image]}
        alt={bike.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 font-display text-xs uppercase tracking-wider text-primary-foreground">
        {bike.category}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-display text-lg font-semibold text-foreground">{bike.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{bike.description}</p>
      <div className="mt-3">
        <span className="font-display text-xl font-bold text-primary">₹{bike.price}<span className="text-sm text-muted-foreground">/day</span></span>
      </div>
    </div>
  </Link>
);

export default BikeCard;
