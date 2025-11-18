import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CADProject2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            <Link 
              to="/" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12">
              <div className="aspect-video bg-muted/30 rounded-2xl overflow-hidden border border-border">
                <img
                  src="/lovable-uploads/stirling-engine.gif"
                  alt="Stirling Engine CAD Assembly Animation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Title & Overview */}
            <div className="text-center mb-16">
              <h1 className="heading-1 mb-6">
                Stirling Engine — CAD Assembly from Provided Drawings
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Complete CAD modeling and assembly project using SOLIDWORKS to create a functional Stirling Engine from engineering drawings.
              </p>
            </div>

            {/* Project Details */}
            <div className="space-y-16">
              {/* Description Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Description</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  This project focused on CAD modeling a Stirling Engine using detailed part drawings provided at the start of the assignment. Each component was modeled in SOLIDWORKS and assembled into a working system. The assembly accurately reflects the intended mechanical function, with constraints and mates applied to replicate real-world movement. The project also included engineering drawings, motion studies, and rendered visuals.
                </p>
              </div>

              {/* Demonstration Video */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Demonstration Video</h2>
                <div className="aspect-video bg-muted/30 rounded-2xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.youtube.com/embed/gHBwzuGM9tw"
                    title="Stirling Engine CAD Assembly Demonstration"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Engineering Drawings Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-8 text-foreground">Engineering Drawings</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The following engineering drawing was provided as the reference for this CAD modeling project. All components were modeled based on the specifications and dimensions shown in this drawing.
                </p>
                
                {/* Drawing Preview Container */}
                <div className="space-y-12">
                  {/* Stirling Engine Drawing */}
                  <div className="w-full max-w-none">
                    <h4 className="text-lg font-medium mb-4 text-foreground">Stirling Engine Assembly Drawing</h4>
                    {/* Large Preview Container */}
                    <div className="border border-border rounded-2xl overflow-hidden bg-background p-6 mb-4">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <iframe
                          src="/assets/stirling-engine-drawing.pdf#navpanes=0&toolbar=0&statusbar=0&view=FitH&page=1&zoom=page-width"
                          title="Stirling Engine Engineering Drawing"
                          className="w-full h-[70vh] min-h-[500px] md:h-[80vh] max-h-[900px]"
                          style={{ 
                            border: 'none',
                            display: 'block'
                          }}
                          aria-label="Stirling Engine Engineering Drawing with dimensions and specifications"
                          loading="lazy"
                          allow="fullscreen"
                        />
                      </div>
                    </div>
                    
                    {/* Download Button */}
                    <div className="text-center">
                      <Button variant="outline" asChild className="gap-2 hover:bg-secondary">
                        <a 
                          href="/assets/stirling-engine-drawing.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          download="Stirling_Engine_Drawing.pdf"
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
                    <strong>Drawing Contents:</strong> Complete Stirling Engine assembly with all components, dimensions, and specifications needed for accurate CAD modeling and assembly.
                  </p>
                </div>
              </div>

              {/* Skills & Technologies */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Skills & Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["SolidWorks", "CAD Assembly", "Engineering Drawings", "Motion Studies"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                    >
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center pt-8">
                <Button asChild>
                  <Link to="/#cad-projects">
                    View More CAD Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CADProject2;