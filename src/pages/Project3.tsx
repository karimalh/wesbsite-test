import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Project3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in">
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Link>
                
                <div className="mb-12">
                  <h1 className="heading-1 mb-6">3DoF Robotic Arm Elevator</h1>
                  <p className="body-large text-muted-foreground mb-8">
                    LabVIEW-controlled robotic arm with LEGO figure transport
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Robotics
                    </span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      LabVIEW
                    </span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Kinematics
                    </span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/karimalh/ME-121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden animate-slide-up">
                <img 
                  src="/lovable-uploads/4d253728-54a7-4003-a499-805fc58b44ef.png" 
                  alt="3DoF Robotic Arm with LEGO figure chair"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="animate-slide-in-left">
                  <h2 className="heading-2 mb-6">Overview and Goal</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This solo project focused on building and controlling a three-degrees-of-freedom robotic arm using LabVIEW. The goal was to attach a custom-designed chair holding a LEGO figure to the end effector and move it between two points within the arm's envelope while keeping the chair upright throughout the motion. The challenge centered on achieving smooth, real-time transitions with proper orientation control using kinematics and a LabVIEW interface.
                  </p>
                </div>
                
                <div className="space-y-8 animate-slide-up">
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Date and Location</h3>
                    </div>
                    <p className="text-muted-foreground">Medford, MA, April 2024</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Team</h3>
                    </div>
                    <p className="text-muted-foreground">Individual project by Karim Al-Haffar</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">LabVIEW</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Inverse Kinematics</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Python</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">PID</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demonstration Section */}
        <section className="section bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="animate-slide-up">
                <h2 className="heading-2 mb-6">Demonstration & Simulation</h2>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/-M6avj9NezQ"
                    title="3DoF Robotic Arm Demonstration"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach and Methodology */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="animate-slide-up">
                <h2 className="heading-2 mb-8">Approach and Methodology</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Mechanical Construction</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Designed and assembled all mechanical parts of the robotic arm. Used ESP32 microcontroller and motors; initial testing was done using a simple Python script to ensure correct motor operation. Designed a small 3D-printed chair to hold the LEGO figure, which was securely attached to the end effector.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/6a6745c8-0f02-4a0e-8708-b7abb01e4bc4.png" 
                        alt="Kinematics calculations and code"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kinematics & Simulation</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Created a SolidWorks model of the robotic arm envelope to simulate and visualize its reachable workspace. Performed trigonometric calculations for both forward and inverse kinematics, deriving the relationship between joint angles and end-effector position. Built multiple LabVIEW VIs to: perform kinematic calculations, communicate with Python and the ESP32, and display the envelope and simulate motion.
                    </p>
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/e5e9ceb8-273b-4bc9-b9c0-ab5bb6a97be1.png" 
                        alt="Robotic arm workspace envelope"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">LabVIEW UI</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Developed a LabVIEW interface allowing users to click on a start and end point within the simulated envelope. The arm then moves smoothly between those points in both simulation and the physical build.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="/lovable-uploads/1eb6c68e-5abb-4fa9-acf9-23e1dddbe556.png" 
                          alt="LabVIEW user interface"
                          className="w-full"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="/lovable-uploads/1f2602c3-a1dd-434c-b193-1d1dd1450f0c.png" 
                          alt="LabVIEW code implementation"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="section bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="animate-slide-up">
                <h2 className="heading-2 mb-6">Challenges and Solution</h2>
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Jerky Movements → Fallen LEGO:</strong> The LEGO figure would fall during abrupt transitions between points.
                    </p>
                    <p className="text-green-600 leading-relaxed">
                      ✅ <strong>Solution:</strong> Implemented interpolated motion, breaking down large movements into smaller steps (e.g., 0 → 10 → 20 → … → 90), resulting in much smoother transitions.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Motor Precision:</strong> The motors occasionally lacked the accuracy needed for exact positioning.
                    </p>
                    <p className="text-green-600 leading-relaxed">
                      ✅ <strong>Solution:</strong> Adjusted tolerances and motion logic; further improvement would require better-quality motors (see below).
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-muted-foreground leading-relaxed">
                      All the codes can be found on my GitHub here: <a href="https://github.com/karimalh/ME-121" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/karimalh/ME-121</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Project3;