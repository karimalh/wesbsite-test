import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Project5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-16">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Hero image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/5b8c4b42-c210-4a1c-884c-746ddd8bd43f.png" 
              alt="Robot Car: Autonomously Controlled"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Robot Car: Autonomously Controlled</h1>
            <p className="body-large text-muted-foreground">
              Autonomous robot car with communication capabilities for collaborative tasks
            </p>
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Overview</h2>
            <p className="body-base mb-8">
              This project served as an extension to the 'Robot Car: Remote Controlled,' building upon the existing design. The primary objective was to enable the robot to autonomously push a tube up the ramp with the assistance of another randomly assigned robot. To achieve this, our robot was required to establish communication with the partner robot, facilitating the adjustment of speed dynamically. This communication ensured synchronization, accommodating variations in speed between the two robots. Additionally, a critical consideration was preventing the robot from falling off the ramp during the autonomous operation. The design aimed to ensure the robot's compatibility with a diverse range of other robots, as the partner robot is assigned minutes before the execution.
            </p>

            <h3 className="heading-3 mb-4">Demonstration</h3>
            <div className="mb-8">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/rBBP8dS95ik" 
                title="Robot Car Autonomous Control Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </section>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="heading-3 mb-4">📍 Date and Location</h3>
              <p className="body-base">Tufts University — December 2023</p>
            </div>
            <div>
              <h3 className="heading-3 mb-4">👥 Team</h3>
              <p className="body-base">Team project with assigned partners</p>
            </div>
            <div>
              <h3 className="heading-3 mb-4">⚙️ Skills</h3>
              <p className="body-base">Raspberry Pi • Python • Coding • Design • Sensors</p>
            </div>
          </div>

          {/* Approach and Methodology */}
          <section className="mb-12">
            <h2 className="heading-2 mb-8">Approach and Methodology</h2>

            <h3 className="heading-3 mb-4">Design and Construction</h3>
            <p className="body-base mb-8">
              The base design of the robot is described in the 'Robot Car: Remote Controlled' project. However, many changes and add-ons were made, as the robot had to perform autonomously. Guards were added to prevent sliding off the ramp, with 3D-printed weighted supports allowing them to move with one degree of freedom. The front drive was reconfigured with a 3D-square block attachment to increase contact area with the tube.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/edac7fff-cd33-40ac-90f8-725b9260c313.png" 
                alt="3D-printed Support"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>

            <h3 className="heading-3 mb-4">Electrical Components</h3>
            <p className="body-base mb-8">
              The brain of the robot consisted of a Raspberry Pi, controlling the motors through a PCB H-bridge. Power came from a 12 V LiPo battery for the motors and a power bank for the Pi. Two limit switches mounted on the square block served as sensors: when both switches were pressed, the robot maintained speed; when one switch was pressed, the robot adjusted by speeding up or slowing down accordingly.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/9c0c2c18-34b4-4bfc-b994-49a0399d31f5.png" 
                alt="Robot Car Electronics"
                className="w-full rounded-lg"
              />
            </div>

            <h3 className="heading-3 mb-4">Control System</h3>
            <p className="body-base mb-8">
              The robot communicated with its partner using IP-based requests. Our HTML interface allowed partner robots to send speed updates, while our robot could also send, accept, or deny requests. Limit-switch inputs guided speed adjustments, and PWM controlled motor speed. The system enabled cooperative pushing of the tube up the ramp with dynamic speed coordination.
            </p>

            <h3 className="heading-3 mb-4">Raspberry Pi Control and Code</h3>
            <p className="body-base mb-8">
              Both motors were wired to the H-bridge PCB and controlled by the Raspberry Pi. Limit switches supplied real-time input, and PWM modulated motor speed. Custom Python code integrated GPIO inputs, PWM logic, and partner communication via HTTP requests, enabling responsive speed control.
            </p>

          </section>

          {/* Results and Conclusion */}
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Results</h2>
            <p className="body-base">
              Our team successfully achieved the project objective: pushing a tube up the ramp autonomously with the help of another random robot. Limit-switch inputs enabled intelligent speed control, while successful IP-based communication demonstrated adaptability across diverse robot partners. This project enhanced our knowledge in control systems, communication protocols, and mechanical design for autonomous robotics.
            </p>
          </section>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button asChild>
              <Link to="/">Return to Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project5;