import { Link } from "react-router-dom";
import logoImage from "@/assets/Capture-removebg-preview.png";

const Footer = () => (
  <footer className="footer-sea relative overflow-hidden py-20 md:py-28 border-t border-border">
    <div aria-hidden="true" className="footer-sea-layer footer-sea-layer-1" />
    <div aria-hidden="true" className="footer-sea-layer footer-sea-layer-2" />
    <div aria-hidden="true" className="footer-sea-layer footer-sea-layer-3" />
    <div aria-hidden="true" className="footer-bubble-field">
      <span className="footer-bubble footer-bubble-1" />
      <span className="footer-bubble footer-bubble-2" />
      <span className="footer-bubble footer-bubble-3" />
      <span className="footer-bubble footer-bubble-4" />
      <span className="footer-bubble footer-bubble-5" />
      <span className="footer-bubble footer-bubble-6" />
    </div>
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img
              src={logoImage}
              alt="Brain Builder logo"
              className="h-6 w-6 object-contain"
              loading="lazy"
              decoding="async"
            />
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
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100092502153645&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Facebook Page
              </a>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <a
              href="https://www.google.com/maps?q=31.418846130371094,73.0612564086914&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm text-primary hover:underline"
            >
              Open in Google Maps
            </a>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Brain Builder location map"
                src="https://maps.google.com/maps?q=31.418846130371094,73.0612564086914&z=17&hl=en&output=embed"
                className="h-44 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Brain Builder & Right Way Foundation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
