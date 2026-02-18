export interface Bike {
  id: string;
  name: string;
  category: string;
  price: number;
  color: string;
  range?: number;
  image: string;
  description: string;
  features: string[];
}

export const bikes: Bike[] = [
  {
    id: "1",
    name: "Trail Blazer X1",
    category: "Mountain",
    price: 35,
    color: "Black",
    image: "bike-mountain",
    description: "Dominate any trail with the Trail Blazer X1. Built for rugged terrain with full suspension and hydraulic disc brakes.",
    features: ["Full Suspension", "Hydraulic Brakes", "27.5\" Wheels", "Aluminum Frame"],
  },
  {
    id: "2",
    name: "Aero Viper R7",
    category: "Road",
    price: 45,
    color: "Red",
    image: "bike-road",
    description: "Aerodynamic road bike engineered for speed. Carbon fiber frame with Shimano groupset.",
    features: ["Carbon Frame", "Shimano 105", "Aero Design", "700c Wheels"],
  },
  {
    id: "3",
    name: "Volt Storm E5",
    category: "Electric",
    price: 60,
    color: "Black",
    range: 80,
    image: "bike-electric",
    description: "Silent power meets smart technology. 80km range with regenerative braking and app connectivity.",
    features: ["80km Range", "500W Motor", "App Connected", "Regen Braking"],
  },
  {
    id: "4",
    name: "Iron Hawk 883",
    category: "Cruiser",
    price: 75,
    color: "Black",
    image: "bike-cruiser",
    description: "Classic cruiser styling with modern performance. Low seat height and relaxed riding position.",
    features: ["V-Twin Engine", "Low Seat", "Chrome Finish", "Leather Saddle"],
  },
  {
    id: "5",
    name: "Raptor RS 600",
    category: "Sport",
    price: 90,
    color: "Red",
    image: "bike-sport",
    description: "Track-inspired superbike for the streets. Aggressive stance with race-tuned suspension.",
    features: ["Race Suspension", "Quick Shifter", "Riding Modes", "ABS"],
  },
  {
    id: "6",
    name: "Peak Runner M3",
    category: "Mountain",
    price: 40,
    color: "Red",
    image: "bike-mountain",
    description: "Lightweight mountain bike built for cross-country racing and endurance rides.",
    features: ["Hardtail Frame", "Air Fork", "29\" Wheels", "Tubeless Ready"],
  },
];

export const categories = ["Mountain", "Road", "Electric", "Cruiser", "Sport"];
export const colors = ["Black", "Red"];
