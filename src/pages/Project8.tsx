import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Project8 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="heading-1 mb-6">
              Line Follower: Image Processing vs Color Sensor
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="heading-3 mb-6">Overview and Goal</h2>
                <p className="body-large text-muted-foreground leading-relaxed">
                  This combined project compared two approaches to building a line follower robot. One method used a color sensor with PID control, while the other used image processing with a Raspberry Pi camera. The goal was to explore how different sensing and control strategies affect the robot's ability to follow a line in terms of speed, precision, and adaptability. Both projects were conducted at Tufts University in February 2024.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted/50 rounded-lg p-6 space-y-6 sticky top-8">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    📍 Date and Location
                  </h3>
                  <p className="text-sm text-muted-foreground">Tufts University — February 2024</p>
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
                  <p className="text-sm text-muted-foreground">PID Control • Color Sensor Calibration • Circuit Design • Autonomous Navigation</p>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Approach and Methodology</h2>
            
            <div className="mb-12">
              <h3 className="heading-3 mb-6">Line Follower Robot: Color Sensor</h3>
              <p className="body-large text-muted-foreground leading-relaxed mb-8">
                The 'Line Follower Robot: Color Sensor' project aimed to create a robot capable of autonomously navigating a maze by following a specific color line using a color sensor. A PID control algorithm was implemented to enhance line-following accuracy, with special attention to switching lanes during navigation. The robot used a laser-cut wood chassis, DC motors, an H-bridge, and a Raspberry Pi. A black acrylic box shielded the color sensor from lighting variation, while 3D-printed wheel hubs reduced friction.
              </p>
              
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/461df0d3-f6ab-4eca-bd0c-b6d053acab8a.png" 
                  alt="Color sensor line follower robot with purple and blue components on wooden chassis"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              <div className="mb-8">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/VPyrTZuHhXM"
                    title="Color Sensor Line Follower Demonstration"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="heading-3 mb-6">Line Follower Robot: Image Processing</h3>
              <p className="body-large text-muted-foreground leading-relaxed mb-8">
                The 'Line Follower Robot: Image Processing' project aimed to replace the color sensor with a camera and apply image processing techniques for line detection. A Raspberry Pi captured visual input through its camera, and OpenCV libraries were used to identify the line's centroid. A PID control algorithm adjusted steering in real time to maintain alignment. Challenges included stabilizing power to the H-bridge and finding the correct camera height and cropping for consistent detection.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img 
                    src="/lovable-uploads/74e2178b-b320-4599-9ad8-501922b416b7.png" 
                    alt="Work-in-progress image processing line follower robot"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Work-in-progress setup</p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/a6e8911f-1636-434c-bec4-4a9806ae315c.png" 
                    alt="Final image processing line follower robot with camera mounted on top"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Final image processing robot</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/vhrBS_s6K5o"
                    title="Image Processing Line Follower Demonstration"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Comparison of Results</h2>
            <p className="body-large text-muted-foreground leading-relaxed mb-8">
              While both robots successfully followed lines using their respective methods, the Color Sensor robot was faster and more consistent, particularly when navigating sharp turns or variable lighting conditions. The Image Processing robot, although slower, demonstrated more adaptability and robustness to path variations, showcasing the potential of computer vision techniques.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Color Sensor Approach</h4>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/VPyrTZuHhXM"
                    title="Color Sensor Line Follower Demonstration"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Image Processing Approach</h4>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/vhrBS_s6K5o"
                    title="Image Processing Line Follower Demonstration"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Challenges</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Lighting Variations</h4>
                <p className="text-muted-foreground">The Color Sensor robot initially struggled with inconsistent lighting. <strong>Solution:</strong> enclosing the sensor in a black acrylic box to stabilize readings.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Wheel Friction</h4>
                <p className="text-muted-foreground">The original rear wheels increased drag. <strong>Solution:</strong> replaced them with a roller ball.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Electrical Connectivity</h4>
                <p className="text-muted-foreground">The Image Processing robot had power interruptions due to loose H-bridge connections. <strong>Solution:</strong> reinforced soldering and wire stripping.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Camera Placement</h4>
                <p className="text-muted-foreground">Finding the correct height and crop for the camera required extensive testing. <strong>Solution:</strong> adjusted placement iteratively until accurate detection was achieved.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Outcomes</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Both robots successfully achieved line-following with PID control</li>
              <li>• Color Sensor approach achieved faster performance</li>
              <li>• Image Processing approach demonstrated adaptability and robustness</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Future Improvements</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Fine-tune PID parameters for both methods</li>
              <li>• Add obstacle detection to both designs</li>
              <li>• For Image Processing: expand the use of integral control and advanced OpenCV techniques</li>
              <li>• For Color Sensor: improve calibration for different environmental conditions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Summary</h2>
            <p className="body-large text-muted-foreground leading-relaxed">
              The 'Line Follower: Image Processing vs Color Sensor' project provided valuable insights into autonomous navigation using two distinct sensing approaches. The Color Sensor design excelled in speed and lane-switching, while the Image Processing approach showcased the power of computer vision for robust line detection. Together, they highlight the trade-offs between simplicity and adaptability in robotics.
            </p>
          </section>

          <div className="pt-8 border-t">
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project8;