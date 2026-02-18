import { useState, useMemo } from "react";
import BikeCard from "@/components/BikeCard";
import { bikes, categories, colors } from "@/data/bikes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const Categories = () => {
  const [category, setCategory] = useState("All");
  const [color, setColor] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState("name");

  const filtered = useMemo(() => {
    let result = bikes.filter((b) => {
      if (category !== "All" && b.category !== category) return false;
      if (color !== "All" && b.color !== color) return false;
      if (b.price > maxPrice) return false;
      return true;
    });
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [category, color, maxPrice, sort]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">Our Bikes</h1>
        <p className="mt-2 text-muted-foreground">Find the perfect ride for your adventure</p>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-4">
          <div className="min-w-[140px]">
            <label className="mb-1 block text-xs text-muted-foreground font-display uppercase tracking-wider">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-[140px]">
            <label className="mb-1 block text-xs text-muted-foreground font-display uppercase tracking-wider">Color</label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {colors.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-[200px] flex-1">
            <label className="mb-1 block text-xs text-muted-foreground font-display uppercase tracking-wider">Max Price: ${maxPrice}/day</label>
            <Slider value={[maxPrice]} onValueChange={([v]) => setMaxPrice(v)} min={10} max={100} step={5} className="mt-2" />
          </div>
          <div className="min-w-[140px]">
            <label className="mb-1 block text-xs text-muted-foreground font-display uppercase tracking-wider">Sort</label>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-asc">Price: Low → High</SelectItem>
                <SelectItem value="price-desc">Price: High → Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No bikes match your filters. Try adjusting your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
