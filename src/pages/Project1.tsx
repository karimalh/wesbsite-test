import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Project1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
              >
                <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
              
              <h1 className="heading-1 mb-6">Reload Simulator (Lexington Medical)</h1>
              
              {/* Main Project Image */}
              <div className="mb-12">
                <img 
                  src="/lovable-uploads/db411516-f38f-4da7-8ec4-2c9ae4721f61.png" 
                  alt="FX-656 Reload Simulator"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview and Project Details */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="heading-2 mb-6">Overview</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The Reload Simulator project was developed at Lexington Medical to design and build a fixture that mimics the force profile of the firing and retraction of a surgical reload.
                      This system allows engineers to run design verification testing without consuming expensive reloads — saving approximately $127,000 USD per test campaign that would otherwise require ~580 reloads.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The fixture eliminated the need to consume hundreds of surgical reloads per test, saving approximately $140,000 USD for every DV test campaign. Beyond cost savings, the fixture is reusable and can be sold as a standalone verification tool, further extending its value to the company.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The simulator integrates motorized mechanics, sensing, and control logic to replicate the nonlinear force–displacement curve with high precision.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="font-semibold text-primary mb-2">📍 Date and Location</h3>
                    <p className="text-muted-foreground">Bedford, MA — Summer 2025</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="font-semibold text-primary mb-2">👥 Team</h3>
                    <p className="text-muted-foreground">Independent project under Lexington Medical Engineering</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <h3 className="font-semibold text-primary mb-2">⚙️ Skills</h3>
                    <p className="text-muted-foreground">CAD • Engineering Drawings • Documentation • ECO • PID • Coding • Prototyping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach and Methodology */}
        <section className="section bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-8">Approach & Methodology</h2>
              
              {/* System Components */}
              <div className="mb-12">
                <h3 className="heading-3 mb-6">System Components</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Motor + Lead Screw:</strong> Converts rotational motion into precise linear displacement to drive the reload mechanism.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Microcontroller:</strong> Executes the control algorithm and synchronizes motion/force feedback.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Encoder:</strong> Tracks displacement and provides distance feedback in millimeters.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Load Cell:</strong> Measures real-time applied force to validate against the target profile.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Electronics Box:</strong> User interface and allows user to press buttons to start and stop the test and collect data.
                    </div>
                  </div>
                </div>
                
                {/* CAD Picture */}
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/86e6fc85-632f-46ff-a865-35051eb7f7f4.png" 
                    alt="Reload Simulator CAD Assembly"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Wiring Diagram */}
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/8179e531-a807-468c-ace4-9afdc21ff6a1.png" 
                    alt="Arduino Wiring Diagram"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Control Logic Overview */}
              <div className="mb-12">
                <h3 className="heading-3 mb-6">Control Logic Overview</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                    <span>Read distance from encoder</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                    <span>Measure actual force with load cell</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                    <span>Assign target force based on distance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                    <span>Compare target vs. actual force</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</div>
                    <span>Compute error</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">6</div>
                    <span>Apply PID control to adjust PWM signal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">7</div>
                    <span>Repeat until distance and force match</span>
                  </div>
                </div>
                
                {/* Flow Diagram */}
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/f852adb7-d773-459b-a172-127d5fc54f84.png" 
                    alt="Control Logic Flow Diagram"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demonstration */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-3 mb-6">Demonstration</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-12">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/sFQOwjYv_B0"
                  title="Reload Simulator Demonstration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-3 mb-6">Results</h3>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fixture successfully mimics reload firing/retraction force profile with high repeatability.
                  Precision testing showed worst-case standard deviation = 2.7 N, validating accuracy of the simulated profile.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Generated force–displacement curves closely aligned with both the actual reload profile and a simplified test curve.
                  Collects and saves the data for the user to review and look at.
                </p>
              </div>
              
              {/* Results Graph */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/efc8c79c-6bcd-4399-b8ad-e5291e25e388.png" 
                  alt="Trials Compared to Actual Graph Results"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-3 mb-6">Documentation</h3>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Authored a Test Validation Protocol covering:</strong>
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Precision and repeatability validation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Accuracy calibration procedure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Fixture usability testing
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Delivered full CAD assembly and engineering drawings for the device.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Developed and debugged fully functioning Arduino-based control code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Created a future implementations document outlining potential improvements.
                </p>
              </div>
              
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/9fe0c1e6-d116-4962-90d3-11113a893f5b.png" 
                  alt="Reload Simulator Documentation"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-3 mb-6">Challenges</h3>
              <div className="space-y-6">
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="font-semibold text-primary mb-3">Challenge 1: Finding the right lead screw</h4>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Excel sheet with the math for finding required efficiency.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg border p-6">
                  <h4 className="font-semibold text-primary mb-3">Challenge 2: Finding the right motor</h4>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Tested a variety of motors to find a motor that can handle the force profile needed. Took off two stages from gearbox using lathe.
                  </p>
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

export default Project1;