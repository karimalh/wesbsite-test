import { ChevronUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-custom py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Karim Al-Haffar
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;