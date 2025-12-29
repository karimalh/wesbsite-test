import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Onshape Pen Pal",
      subtitle: "Automated pen dispenser + QR-based data collection (capstone).",
      image: "lovable-uploads/Penpal_main.png",
      tags: ["CAD", "Mechatronics", "System Integration", "Rapid Prototyping", "Raspberry Pi"],
      projectUrl: "/project-9",
      disabled: false
    },

    {
      title: "Reload Simulator (Lexington Medical)",
      subtitle: "Designed and validated a reload simulator fixture saving $140,000 USD per DV test.",
      image: "lovable-uploads/db411516-f38f-4da7-8ec4-2c9ae4721f61.png",
      tags: ["CAD", "Engineering Drawings", "Documentation", "ECO", "PID", "Coding", "Prototyping"],
      projectUrl: "/project-1",
      disabled: false
    },
    {
      title: "Automated Latte Cafe", 
      subtitle: "Designed an autonomous robotic barista system that takes and executes orders.",
      image: "lovable-uploads/58c13c03-c183-4384-90e0-c85e2956ed75.png",
      tags: ["PID", "Cross-Functional Work", "Prototyping", "Robotics", "Micro-controllers", "Team Collaboration"],
      projectUrl: "/project-2",
      disabled: false
    },
    {
      title: "3DoF Robotic Arm Elevator",
      subtitle: "A 3-DoF robotic elevator that keeps its platform level while moving vertically, controlled with Python and LabVIEW.",
      image: "lovable-uploads/4d253728-54a7-4003-a499-805fc58b44ef.png",
      tags: ["LabVIEW", "Inverse Kinematics", "Python", "PID"],
      projectUrl: "/project-3",
      disabled: false
    },
    {
      title: "Building a Tricycle",
      subtitle: "A collaborative engineering project to design and build a tricycle capable of navigating through a dimensional archway during competition.",
      image: "lovable-uploads/163f0b21-bc2c-4059-b32e-b97db3f516da.png",
      tags: ["Welding", "Mechanical Design", "Force Distribution", "Woodworking"],
      projectUrl: "/project-4",
      disabled: false
    },
    {
      title: "Robot Car: Autonomously Controlled",
      subtitle: "Autonomous robot car that communicates with other robots to coordinate and execute tasks as a team.",
      image: "lovable-uploads/5b8c4b42-c210-4a1c-884c-746ddd8bd43f.png",
      tags: ["Raspberry Pi", "Python", "Coding", "Design", "Sensors"],
      projectUrl: "/project-5",
      disabled: false
    },
    {
      title: "Autonomous Maze Exploration with Object Recognition",
      subtitle: "Teaching a robot to recognize objects and navigate mazes autonomously using ROS and machine learning.",
      image: "lovable-uploads/caccaaaa-cb02-4d05-bd99-1f3a987d4ed0.png",
      tags: ["ROS", "Machine Learning", "Object Recognition", "PID Control"],
      projectUrl: "/project-6",
      disabled: false
    },
    {
      title: "Fingerprint Locked Snack Box",
      subtitle: "A prototype fingerprint-secured storage box with temperature and location monitoring for communal spaces.",
      image: "lovable-uploads/074bdc4e-efe8-4020-b28d-63b09a0ca5b7.png",
      tags: ["Sensors", "ESP32", "CAD", "Team Collaboration"],
      projectUrl: "/project-7",
      disabled: false
    },
    {
      title: "Line Follower: Image Processing vs Color Sensor",
      subtitle: "A comparison of two line-following robots: one using camera-based image processing and the other using a color sensor for line detection.",
      image: "lovable-uploads/461df0d3-f6ab-4eca-bd0c-b6d053acab8a.png",
      tags: ["PID Control", "Color Sensor Calibration", "Circuit Design", "Autonomous Navigation"],
      projectUrl: "/project-8",
      disabled: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-slide-up mb-16">
            <p className="overline mb-4">PROJECTS</p>
            <h2 className="heading-2 mb-6">
              Engineering in action
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A showcase of hands-on engineering projects spanning mechatronics, prototyping, and innovative design solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                id={`project-${index + 1}`}
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
