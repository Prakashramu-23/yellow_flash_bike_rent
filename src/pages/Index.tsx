import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BikeCard from "@/components/BikeCard";
import { bikes } from "@/data/bikes";
import heroBike from "@/assets/hero-bike.jpg";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";

const Index = () => {
  const featured = bikes.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroBike}
          alt="Motorcycle on dark road"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="container relative z-10 py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl font-bold leading-tight text-foreground md:text-7xl">
              Ride The <span className="text-gradient">Legend</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Premium bikes and motorcycles available for rent. From city cruisers to mountain beasts — find your perfect ride.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/categories">
                <Button variant="hero" size="lg" className="gap-2">
                  Browse Bikes <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="font-display uppercase tracking-wider">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border bg-card py-16">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { icon: Shield, title: "Fully Insured", desc: "Every rental comes with comprehensive coverage" },
            { icon: Clock, title: "Flexible Rentals", desc: "Rent by the hour, day, or week" },
            { icon: MapPin, title: "Multiple Locations", desc: "Pick up and drop off at any of our locations" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured Bikes</h2>
              <p className="mt-2 text-muted-foreground">Our most popular rides this season</p>
            </div>
            <Link to="/categories" className="hidden font-display text-sm uppercase tracking-widest text-primary transition-colors hover:text-primary/80 md:block">
              View All →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
