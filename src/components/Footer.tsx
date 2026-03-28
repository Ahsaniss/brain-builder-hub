import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-gradient">Brain Builder</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Empowering futures through quality education and professional skill development.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Courses", to: "/courses" },
              { label: "Team", to: "/team" },
              { label: "NGO", to: "/ngo" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Gulberg, Faisalabad</li>
            <li>+92-300-6682238</li>
            <li>brainbuilder96@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Brain Builder & Right Way Foundation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
