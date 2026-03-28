import { Brain } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Brain className="h-5 w-5 text-primary" />
        <span className="font-semibold text-foreground">Brain Builder</span>
      </div>
      <p>© {new Date().getFullYear()} Brain Builder & Right Way Foundation. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
