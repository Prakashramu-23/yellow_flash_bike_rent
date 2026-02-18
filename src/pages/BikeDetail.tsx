import { useParams, Link } from "react-router-dom";
import { bikes } from "@/data/bikes";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const BikeDetail = () => {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === id);
  const [days, setDays] = useState("1");
  const { toast } = useToast();

  if (!bike) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Bike Not Found</h1>
          <Link to="/categories" className="mt-4 inline-block text-primary hover:underline">← Back to bikes</Link>
        </div>
      </div>
    );
  }

  const total = bike.price * parseInt(days);

  const handleBook = () => {
    toast({
      title: "Booking Confirmed!",
      description: `${bike.name} for ${days} day(s) — ₹${total} total`,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <Link to="/categories" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to bikes
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg border border-border">
            <img src={imageMap[bike.image]} alt={bike.name} className="h-full w-full object-cover" />
          </div>

          {/* Details */}
          <div>
            <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 font-display text-xs uppercase tracking-wider text-primary">
              {bike.category}
            </span>
            <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">{bike.name}</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{bike.description}</p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {bike.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  {f}
                </div>
              ))}
            </div>

            {bike.range && (
              <p className="mt-4 text-sm text-muted-foreground">
                Range: <span className="font-semibold text-foreground">{bike.range} km</span> per charge
              </p>
            )}

            {/* Booking */}
            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-primary">₹{bike.price}</span>
                <span className="text-muted-foreground">/ day</span>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-xs text-muted-foreground font-display uppercase tracking-wider">Rental Period</label>
                <Select value={days} onValueChange={setDays}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 5, 7, 14].map((d) => (
                      <SelectItem key={d} value={String(d)}>{d} day{d > 1 ? "s" : ""}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display text-2xl font-bold text-foreground">₹{total}</span>
              </div>

              <Button variant="hero" size="lg" className="mt-4 w-full gap-2" onClick={handleBook}>
                <ShoppingCart className="h-5 w-5" /> Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
