import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Project6 = () => {
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
              src="/lovable-uploads/caccaaaa-cb02-4d05-bd99-1f3a987d4ed0.png" 
              alt="Autonomous Maze Exploration with Object Recognition"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="heading-1 mb-4">Autonomous Maze Exploration with Object Recognition</h1>
            <p className="body-large text-muted-foreground">
              Teaching a robot to recognize objects and navigate mazes autonomously using ROS and machine learning
            </p>
          </div>

          {/* Overview and Project Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="heading-2 mb-6">Overview and Goal</h2>
              <p className="body-base mb-8">
                The "Autonomous Maze Exploration with Object Recognition" project aimed to teach a robot to recognize seven distinct objects and utilize them for autonomous maze navigation. The primary objective was to enable the Create 3 robot to identify objects using a Pi camera, recognize when they are six inches away using an ultrasonic sensor, and subsequently navigate through the maze based on predefined turning instructions received ten minutes prior to the demonstration. The project focused on integrating ROS for robot control, implementing object recognition using Teachable Machine, and refining navigation algorithms for efficient maze traversal.
              </p>

              <h3 className="heading-3 mb-4">Demonstration</h3>
              <div className="mb-8">
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/t-Ok8xFFYtE" 
                  title="Autonomous Maze Exploration Demo"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="heading-3 mb-4">📍 Date and Location</h3>
                <p className="body-base">March 2024 — Tufts University</p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="heading-3 mb-4">👥 Team</h3>
                <p className="body-base">Team project</p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <h3 className="heading-3 mb-4">⚙️ Skills</h3>
                <p className="body-base">ROS • Machine Learning • Object Recognition • PID Control</p>
              </div>
            </div>
          </div>

          {/* Approach and Methodology */}
          <section className="mb-12">
            <h2 className="heading-2 mb-8">Approach and Methodology</h2>

            <h3 className="heading-3 mb-4">Robot Configuration</h3>
            <p className="body-base mb-8">
              The project utilized a Create 3 robot from iRobot controlled via ROS. A Pi camera was mounted on the front of the robot alongside an ultrasonic sensor to detect objects at a distance of six inches. ROS libraries, including cmd_vel and rotation angle, were employed for controlling the robot's movements and rotation angles during maze navigation.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/23034746-f2aa-4a35-9ab2-44047b3e7295.png" 
                alt="Robot Configuration"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>

            <h3 className="heading-3 mb-4">Object Recognition</h3>
            <p className="body-base mb-8">
              Object recognition was achieved through Teachable Machine, a Google creative lab used for training machine learning models. The team collected images of seven different objects and trained the model to recognize them accurately. By integrating the trained model with the robot's camera feed, the robot could identify objects in its vicinity during maze navigation.
            </p>

            <h3 className="heading-3 mb-4">Navigation Strategy</h3>
            <p className="body-base mb-8">
              The robot's navigation strategy involved detecting objects and their proximity using the camera and ultrasonic sensor, respectively. When an object was detected within six inches, indicating a turn point, the robot utilized predefined turning instructions received prior to the demonstration. This approach enabled the robot to navigate through the maze autonomously, following the predetermined path based on object recognition and turning instructions.
            </p>

            <div className="mb-8">
              <img 
                src="/lovable-uploads/caccaaaa-cb02-4d05-bd99-1f3a987d4ed0.png" 
                alt="Navigation Strategy"
                className="w-full rounded-lg"
              />
            </div>

            <h3 className="heading-3 mb-4">GitHub Repository</h3>
            <p className="body-base mb-8">
              The code, CAD designs, and documentation for this project are available on GitHub. Please find the repository here.
            </p>
          </section>

          {/* Challenges and Solutions */}
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Challenges and Solutions</h2>
            
            <div className="mb-6">
              <h3 className="heading-3 mb-4">Object Recognition Accuracy</h3>
              <p className="body-base">
                Initially, the trained model struggled to accurately recognize objects, leading to navigation errors. The team addressed this issue by augmenting the training dataset with additional images and removing background interference, resulting in improved object recognition performance.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="heading-3 mb-4">Ultrasonic Sensor Calibration</h3>
              <p className="body-base">
                Calibration issues with the ultrasonic sensor affected its accuracy in detecting stuffed animals. To mitigate this, a separate PID control mechanism was implemented, fine-tuning sensor values based on a range derived from extensive testing, thereby enhancing detection reliability and navigation precision.
              </p>
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Outcomes</h2>
            <p className="body-base mb-8">
              The project yielded a successful implementation of object recognition-based maze navigation using the Create 3 robot controlled via ROS. By overcoming challenges related to object recognition accuracy and sensor calibration, the team demonstrated effective collaboration and problem-solving skills, resulting in a fully autonomous solution capable of navigating mazes using recognized objects as guidance.
            </p>
          </section>

          {/* Future Improvements */}
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Future Improvements</h2>
            <p className="body-base mb-4">Future enhancements may include:</p>
            <ul className="list-disc list-inside space-y-2 body-base mb-8">
              <li>Increasing the robot's speed to improve navigation efficiency and reduce traversal time within the maze.</li>
              <li>Refining the PID control mechanism for smoother and more precise movements, enhancing overall navigation performance.</li>
              <li>Expanding the training dataset with additional images of objects to further improve the accuracy and robustness of object recognition.</li>
              <li>Upgrading the ultrasonic sensor to a more advanced model capable of accurately detecting various objects, including stuffed animals, under different environmental conditions.</li>
            </ul>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Summary</h2>
            <p className="body-base">
              In summary, the "Object Recognition Maze Navigation with Create 3 Robot" project showcased the successful integration of ROS, object recognition, and navigation algorithms for autonomous maze navigation. Through iterative development and strategic problem-solving, the team delivered a fully autonomous solution capable of efficiently navigating through mazes using recognized objects as navigational cues.
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

export default Project6;