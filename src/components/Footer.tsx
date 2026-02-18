import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-wider text-primary">YELLOW</span>
            <span className="font-display text-xl font-bold tracking-wider text-foreground">FLASH</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Premium bike rentals for every rider. Experience the road your way.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">yellowflash.com</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">Home</Link>
            <Link to="/categories" className="text-sm text-muted-foreground transition-colors hover:text-primary">Bikes</Link>
            <Link to="/login" className="text-sm text-muted-foreground transition-colors hover:text-primary">Login</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Contact</h4>
          <p className="text-sm text-muted-foreground">yellowflash.com</p>
          <p className="text-sm text-muted-foreground">+91 7708786525</p>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Yellow Flash. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
