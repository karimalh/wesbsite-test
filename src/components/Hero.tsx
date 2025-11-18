import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6 max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/961a396f-bf37-4259-afac-64ab63287de9.png" 
              alt="Karim Al-Haffar professional headshot"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-lg animate-scale-in flex-shrink-0"
            />
            <div className="text-center md:text-left flex-1">
              <h1 className="heading-1 mb-4">
                Karim Al-Haffar
              </h1>
              <p className="body-large text-muted-foreground mb-8">
                Mechanical Engineering portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="btn-primary"
                >
                  View Projects
                </button>
                <a
                  href="https://ttivhxuzjfcpvbrmooca.supabase.co/storage/v1/object/sign/Portfolio%20Resume/Al_Haffar_Karim_Fall_2025_Resume.pdf.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMDc1NDIyOC1iNzMwLTRhNTUtODM4Zi00MzNiNDVmMWM4ZTQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8gUmVzdW1lL0FsX0hhZmZhcl9LYXJpbV9GYWxsXzIwMjVfUmVzdW1lLnBkZi5wZGYiLCJpYXQiOjE3NTYxNDM4NjIsImV4cCI6MTkxMzgyMzg2Mn0.41j6JrK_CKw3DMAGkJ8h_wNWR5NoVqkTkZ94c1Fxyrk"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;