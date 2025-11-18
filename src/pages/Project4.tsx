import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Project4 = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background/95 to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="container-custom relative z-10">
          <div className="pt-24 pb-16">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Welding</Badge>
                <Badge variant="secondary">Mechanical Design</Badge>
                <Badge variant="secondary">Force Distribution</Badge>
                <Badge variant="secondary">Woodworking</Badge>
              </div>
              
              <h1 className="heading-1 mb-6">
                Building a Tricycle
              </h1>
              
              <p className="body-large text-muted-foreground max-w-2xl mb-8">
                A collaborative engineering project to design and build a tricycle capable of navigating through specific dimensional constraints, culminating in a class competition.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  disabled
                  className="pointer-events-none"
                >
                  Code Not Available
                </Button>
                <Button
                  variant="outline"
                  disabled
                  className="pointer-events-none"
                >
                  Live Demo Not Available
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/163f0b21-bc2c-4059-b32e-b97db3f516da.png"
              alt="Building a Tricycle - Team photo with completed tricycle"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="md:col-span-2">
                <h2 className="heading-2 mb-6">Overview</h2>
                <p className="body-large text-muted-foreground mb-8">
                  This was a group project for a class at Tufts University, where a team of three of us set out to build a tricycle capable of navigating through an archway measuring 50 inches in height and 42 inches in width. We started with the front half of a kids' bike and then constructed the remaining frame ourselves. At the end of the project, the vehicles raced against each other in a class competition.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="heading-3 mb-3">📍 Date and Location</h3>
                  <p className="body text-muted-foreground">Tufts University, Medford, MA — April 2025</p>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-3">👥 Team</h3>
                  <p className="body text-muted-foreground">Three-person student group project</p>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-3">⚙️ Skills</h3>
                  <p className="body text-muted-foreground">
                    Welding • Mechanical Design • Force Distribution • Woodworking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach and Methodology */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-12">Approach and Methodology</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="heading-3 mb-6">Design and Build Process</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Repurposing a Kids' Bike</h4>
                    <p className="body text-muted-foreground mb-6">
                      We used the front section of a children's bicycle as our starting point.
                    </p>
                    <img
                      src="/lovable-uploads/801ca8fa-3c93-4a4c-afaa-a202fe234543.png"
                      alt="Tricycle in workshop setting"
                      className="w-full rounded-lg shadow-lg mb-6"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Custom Frame Construction</h4>
                    <p className="body text-muted-foreground mb-6">
                      We welded and assembled the remaining frame to meet the required dimensions and ensure stability.
                    </p>
                    <img
                      src="/lovable-uploads/271c4c17-6d06-464a-9b89-816e0a1df51f.png"
                      alt="Custom Frame Construction"
                      className="w-1/2 rounded-lg shadow-lg mb-6"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Balancing and Force Analysis</h4>
                    <p className="body text-muted-foreground mb-6">
                      We focused on balancing the tricycle and used force-body diagrams to avoid overstressing any parts of the frame.
                    </p>
                    <img
                      src="/lovable-uploads/7439657d-b37c-4d9e-b489-d6cc7e165934.png"
                      alt="Balancing and Force Analysis"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-3 mb-6">Competition and Outcomes</h3>
                <p className="body text-muted-foreground mb-6">
                  This was part of a class competition, and at the end of the project, we raced our tricycles. Our team placed second overall!
                </p>
                <img
                  src="/lovable-uploads/163f0b21-bc2c-4059-b32e-b97db3f516da.png"
                  alt="Team with completed tricycle"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <h3 className="heading-3 mb-6">Demonstration</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/vvkfE71piDc"
                    title="Building a Tricycle Demonstration"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
              
              <div>
                <h3 className="heading-3 mb-6">Results</h3>
                <div className="space-y-4">
                  <p className="body text-muted-foreground">
                    Successfully constructed a tricycle that met the dimensional constraints and navigated the archway.
                  </p>
                  <p className="body text-muted-foreground">
                    Learned practical skills in welding, woodworking, and mechanical design.
                  </p>
                  <p className="body text-muted-foreground">
                    Applied force analysis to ensure the frame was both sturdy and functional.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="heading-3 mb-6">Challenges</h3>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="font-semibold text-lg mb-3">Challenge 1: Dimensional Constraints</h4>
                    <p className="body text-muted-foreground mb-3">
                      <strong>Solution:</strong> One of the main challenges was ensuring the tricycle could fit through the specified archway. We had to carefully measure and adjust our design to meet the height and width requirements.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="font-semibold text-lg mb-3">Challenge 2: Welding Experience</h4>
                    <p className="body text-muted-foreground">
                      <strong>Solution:</strong> This was our first time welding, so we faced a learning curve in mastering the welding process and ensuring strong, reliable joints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project4;