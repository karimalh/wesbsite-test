import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { asset } from "@/utils/asset";


const CADProject1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-custom py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video mb-8 rounded-2xl overflow-hidden bg-muted">
              <img
                src={asset("/lovable-uploads/tooth-brush-hero.gif")}
                alt="Electric Toothbrush CAD Animation"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            <h1 className="heading-1 mb-6">
              Electric Toothbrush — Reverse Engineering & CAD Assembly
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Description</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              This project involved reverse engineering an electric toothbrush by fully disassembling it, modeling each component in SOLIDWORKS, and assembling them into a functional system. Complex mates and advanced features were applied to replicate the real-life motion of the toothbrush. The project also included rendered motion studies, demonstration videos, and detailed engineering drawings.
            </p>

            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Technical Work</h3>
              <div className="flex flex-wrap gap-3">
                {["Complex features", "Assemblies and subassemblies", "Motion videos & rendering in SOLIDWORKS", "Engineering drawings"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Demonstration Video */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Demonstration Video</h3>
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/kcb_xQ76UOQ"
                  title="Electric Toothbrush CAD Demonstration"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Engineering Drawings Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Engineering Drawings & Documentation</h3>
              <p className="text-muted-foreground mb-8">
                Complete assembly drawing with detailed parts list showing all 21 components of the electric toothbrush system.
              </p>
              
              {/* Drawing Preview Container */}
              <div className="space-y-12">
                {/* Assembly Drawing */}
                <div className="w-full max-w-none">
                  <h4 className="text-lg font-medium mb-4 text-foreground">Assembly Drawing & Parts List</h4>
                  {/* Large Preview Container */}
                  <div className="border border-border rounded-2xl overflow-hidden bg-background p-6 mb-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                      <iframe
                        src="/assets/electric-tooth-brush.pdf#navpanes=0&toolbar=0&statusbar=0&view=FitH&page=1&zoom=page-width"
                        title="Electric Toothbrush Assembly Drawing"
                        className="w-full h-[70vh] min-h-[500px] md:h-[80vh] max-h-[900px]"
                        style={{ 
                          border: 'none',
                          display: 'block'
                        }}
                        aria-label="Toothbrush Assembly Engineering Drawing with parts list"
                        loading="lazy"
                        allow="fullscreen"
                      />
                    </div>
                  </div>
                  
                  {/* Download Button */}
                  <div className="text-center">
                    <Button variant="outline" asChild className="gap-2 hover:bg-secondary">
                      <a 
                        href="/assets/electric-tooth-brush.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download="Electric_Toothbrush_Assembly_Drawing.pdf"
                        className="inline-flex items-center"
                      >
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                          />
                        </svg>
                        Download Full PDF
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Head Casing Drawing */}
                <div className="w-full max-w-none">
                  <h4 className="text-lg font-medium mb-4 text-foreground">Head Casing Detail Drawing</h4>
                  {/* Large Preview Container */}
                  <div className="border border-border rounded-2xl overflow-hidden bg-background p-6 mb-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                      <iframe
                        src="/assets/head-casing-drawing.pdf#navpanes=0&toolbar=0&statusbar=0&view=FitH&page=1&zoom=page-width"
                        title="Head Casing Engineering Drawing"
                        className="w-full h-[70vh] min-h-[500px] md:h-[80vh] max-h-[900px]"
                        style={{ 
                          border: 'none',
                          display: 'block'
                        }}
                        aria-label="Toothbrush Head Casing Engineering Drawing with dimensions and specifications"
                        loading="lazy"
                        allow="fullscreen"
                      />
                    </div>
                  </div>
                  
                  {/* Download Button */}
                  <div className="text-center">
                    <Button variant="outline" asChild className="gap-2 hover:bg-secondary">
                      <a 
                        href="/assets/head-casing-drawing.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download="Head_Casing_Drawing.pdf"
                        className="inline-flex items-center"
                      >
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                          />
                        </svg>
                        Download Full PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Drawing Contents:</strong> Complete assembly with 21 numbered components and detailed head casing specifications. Includes material specifications, tolerances, and manufacturing details.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Button asChild>
                <Link to="/#cad-projects">
                  View More CAD Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CADProject1;
