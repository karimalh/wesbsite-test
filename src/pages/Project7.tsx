import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Project7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container-custom py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container-custom py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/074bdc4e-efe8-4020-b28d-63b09a0ca5b7.png" 
              alt="Fingerprint Locked Snack Box"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Project Title and Description */}
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Fingerprint Locked Snack Box</h1>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A prototype fingerprint-secured storage box with temperature monitoring for communal spaces.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="heading-2 mb-6">Overview</h2>
                <p className="body-text text-muted-foreground leading-relaxed">
                  The goal of our project was to engineer a prototype of a fingerprint locked snack box that also records temperature. This device would be useful in cases of communal fridges, freezers, pantries, and shared eating spaces. It's a way to ensure the security and privacy of your belongings, using a fingerprint lock. This device consists of cardboard, an ESP32, two servo motors, and a temperature and humidity sensor.
                </p>
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      📍 Date and Location
                    </h3>
                    <p className="text-sm text-muted-foreground">Tufts University — November 2021 to December 2021</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      👥 Team
                    </h3>
                    <p className="text-sm text-muted-foreground">Team project</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      ⚙️ Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Sensors", "ESP32", "CAD", "Team Collaboration"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Demonstration */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8">Demonstration</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/X69nZ8moAXI?start=3"
                title="Fingerprint Locked Snack Box Demonstration"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Approach and Methodology */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8">Approach and Methodology</h2>
            
            {/* 3D-Modeling of the Design */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">3D-Modeling of the Design</h3>
              <p className="body-text text-muted-foreground mb-6">
                The snack box was first modeled in 3D to establish the correct dimensions and design for the locking mechanism. The box was designed to hold a pint of ice cream as our initial inspiration, with space to integrate the fingerprint sensor and electronic components.
              </p>
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="/lovable-uploads/8e3acc48-6cdc-4e5b-a82b-50124b669e54.png" 
                  alt="3D CAD model of the snack box design"
                  className="w-full h-[300px] object-contain bg-gray-50"
                />
              </div>
            </div>

            {/* Electric Circuit */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Electric Circuit</h3>
              <p className="body-text text-muted-foreground mb-6">
                The electronic system was powered by an ESP32. Two servo motors were wired through the circuit to lock and unlock the lid, and a DHT11 sensor was included to measure temperature and humidity. The fingerprint sensor was wired to the ESP32 to handle storage, recognition, and validation of fingerprints.
              </p>
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="/lovable-uploads/7fc5bbfe-60c1-42ae-b967-077be2e72cc6.png" 
                  alt="Circuit diagram showing ESP32, servo motors, DHT11 sensor, and fingerprint sensor connections"
                  className="w-full h-[400px] object-contain bg-white"
                />
              </div>
            </div>

            {/* Details */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Details</h3>
              <div className="prose prose-gray max-w-none">
                <p className="body-text text-muted-foreground leading-relaxed mb-4">
                  The system works by the user saving their fingerprint to the sensor, so only they can open the box. Items can be placed inside the box, including frozen food, since the system tolerates cold temperatures. To open the box, the user scans their finger on the sensor, which validates it and unlocks the lid. If an unauthorized fingerprint is scanned, the lock remains sealed.
                </p>
                <p className="body-text text-muted-foreground leading-relaxed mb-4">
                  This prototype was built from cardboard due to issues with the 3D printer and also to keep the design more sustainable. The box's dimensions were optimized to fit a pint of ice cream. Four external buttons control the fingerprint storage and lock functions: the top buttons delete and store new fingerprints, while the bottom buttons lock the box and allow a scan for unlocking.
                </p>
                <p className="body-text text-muted-foreground leading-relaxed mb-6">
                  The servos extend into the lid when locked, physically preventing it from opening. When the fingerprint sensor finds a match, the LEDs turn green and the servos retract to release the lid.
                </p>
              </div>
              
              {/* Images for Details section */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/074bdc4e-efe8-4020-b28d-63b09a0ca5b7.png" 
                    alt="Cardboard prototype of the fingerprint locked snack box"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/16111459-7462-480b-95a2-49c38d93c742.png" 
                    alt="Fingerprint sensor and control buttons on the box"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/60bdc89d-c2f1-4077-b4c9-0edb43389b4d.png" 
                  alt="Inside view of the box showing servo motors and electronic components"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8">Challenges</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">3D Printing Issues</h4>
                <p className="body-text text-muted-foreground">
                  We initially had problems with the 3D printer, which delayed our ability to prototype the housing. <strong>Solution:</strong> switched to cardboard to move forward quickly and sustainably.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Humidity and Material Constraints</h4>
                <p className="body-text text-muted-foreground">
                  We avoided wood because it expands and changes shape with humidity. <strong>Solution:</strong> used cardboard to mimic the structure of a future 3D-printed box while avoiding warping.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sensor and Locking Integration</h4>
                <p className="body-text text-muted-foreground">
                  Fitting the fingerprint sensor and servomotors inside the box was challenging. <strong>Solution:</strong> soldered all components carefully and refined placement until the locking worked reliably.
                </p>
              </div>
            </div>
          </div>

          {/* Return to Projects */}
          <div className="text-center">
            <Link to="/#projects">
              <button className="btn-primary">
                Return to Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project7;