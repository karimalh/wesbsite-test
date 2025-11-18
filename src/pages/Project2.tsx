import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Cog } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Project2 = () => {
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
                  <h1 className="heading-1 mb-6">Automated Latte Cafe</h1>
                  <p className="body-large text-muted-foreground mb-8">
                    Robotic barista system with multi-station coordination
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Robotics
                    </span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Automation
                    </span>
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      Integration
                    </span>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      disabled
                      className="btn-primary opacity-50 cursor-not-allowed"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code (Coming Soon)
                    </button>
                    <button 
                      disabled
                      className="btn-secondary opacity-50 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo (Coming Soon)
                    </button>
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
                  src="/lovable-uploads/58c13c03-c183-4384-90e0-c85e2956ed75.png"
                  alt="Automated Latte Cafe robotic barista system showing multiple stations"
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
                  <h2 className="heading-2 mb-6">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The "Automated Latte Cafe: Robotic Barista" project aimed to create a fully autonomous cafe robot capable of taking orders, preparing lattes, and delivering them to customers with minimal human involvement. Split into five specialized teams—coffee, transportation, cup, milk, and arts—the project focused on streamlining cafe operations through robotic automation. By integrating technologies such as machine learning, precision mechanics, and efficient communication systems, the goal was to revolutionize the cafe experience, providing customers with custom-designed lattes prepared entirely by robots.
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
                    <p className="text-muted-foreground">Group project for a robotics class</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cog className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">PID</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Cross-Functional Work</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Prototyping</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Robotics</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Micro-controllers</span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">Team Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demonstration Video */}
              <div className="mb-16 animate-fade-in">
                <h2 className="heading-2 mb-6">Demonstration video</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.youtube.com/embed/8i9k6uBUev8" 
                    title="Automated Latte Cafe Demonstration"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Approach and Methodology */}
              <div className="mb-16 animate-fade-in">
                <h2 className="heading-2 mb-8">Approach and Methodology:</h2>
                
                {/* Team Organization */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Team Organization:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The project was organized into specialized teams, each responsible for specific tasks within the cafe operation. The coffee team managed the coffee brewing process, including pod placement and lid operation. Transportation handled the movement of cups between stations, while the cup team ensured an adequate supply of cups. The milk team frothed milk and poured it into lattes, and the arts team added artistic designs using cinnamon. Efficient communication between teams was facilitated through Airtable, enabling seamless coordination and task management.
                  </p>
                </div>

                {/* Latte Operation Process */}
                <div className="mb-16">
                  <h3 className="text-xl font-semibold mb-4">Latte Operation Process:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Latte operation process began with customers placing orders via an ordering station, selecting their desired latte size and art design. Machine learning algorithms detected the chosen design from a selection placed under a camera. Once the order was received, the cup dispenser provided a cup, and the transportation system moved it through the cafe stations. The coffee machine brewed the coffee, followed by milk frothing and pouring. The arts team then added the chosen design to the latte before the transportation system delivered the completed latte to the receiving station.
                  </p>
                </div>
              </div>

              {/* Coffee Team Innovation */}
              <div className="mb-16 animate-fade-in">
                <h2 className="heading-2 mb-6">Coffee Team Innovation:</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Within the coffee team, I played a crucial role as part of the lid team, a specialized sub-team dedicated to ensuring precise pod insertion into the coffee machine. Our primary focus was on developing a reliable mechanism to push the pod into the machine consistently. This task demanded meticulous attention to detail and continuous refinement of our approach.
                </p>
                
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/27f573a7-c738-447e-bc18-438809185daa.png"
                    alt="Coffee machine mechanism with precise pod insertion system"
                    className="w-full rounded-lg"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  One significant challenge we encountered was the occurrence of machine and linear motion vibrations, which affected the pod insertion process. To address this issue, we took measures to stabilize the equipment by bolting it securely to the table, minimizing vibrations and ensuring consistent operation. Additionally, we encountered difficulties with the length of the Scotch Yoke Mechanism, necessitating the re-printing of the mechanism to achieve the desired reach and functionality. Furthermore, we encountered issues with the last pod not being pushed adequately, prompting us to implement PID control adjustments to ensure optimal pod insertion, even in challenging scenarios.
                </p>

                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/2dd3385a-fddd-4a08-b3bd-7d47fb10e770.png"
                    alt="3D printed rail mechanism for precise coffee pod movement"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Communication */}
              <div className="mb-16 animate-fade-in">
                <h2 className="heading-2 mb-6">Communication:</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Effective communication between teams was pivotal to project success. Airtable served as a central platform for coordinating tasks and sharing updates. Binary encoding facilitated efficient communication, allowing teams to receive and request event notifications seamlessly. For example, when the coffee is brewed, the coffee teams changes the Airtable value so that the transportation team moves the cup to the next station.
                </p>
              </div>

              {/* Future Improvements */}
              <div className="mb-16 animate-fade-in">
                <h2 className="heading-2 mb-6">Future Improvements:</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Future enhancements may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-6">
                  <li>Enhancing the aesthetic design and user-friendliness of the cafe system to improve customer experience.</li>
                  <li>Implementing optimizations to reduce process time, aiming to shorten the current three-minute preparation duration.</li>
                  <li>Exploring advanced automation technologies and techniques to further streamline cafe operations and increase efficiency.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  In summary, the 'Automated Latte Cafe: Robotic Barista' project exemplified interdisciplinary collaboration and innovation in creating a fully automated cafe experience. Through design, precise engineering, and effective communication, the project achieved its goal of minimal human involvement in cafe operations, paving the way for future advancements in robotic service industries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Project2;