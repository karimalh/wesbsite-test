import { Link } from "react-router-dom";

const CADProjects = () => {
  // CAD projects data
  const cadProjects = [
    {
      id: "cad-1",
      title: "Electric Toothbrush — Reverse Engineering & CAD Assembly",
      description: "Reverse engineered an electric toothbrush by modeling each component in SOLIDWORKS and creating a functional assembly with complex mates and motion studies.",
      skills: ["SolidWorks", "Reverse Engineering", "Motion Studies", "Assembly Design"],
      image: "/lovable-uploads/tooth-brush-hero.gif",
      projectUrl: "/cad-project-1",
      comingSoon: false
    },
    {
      id: "cad-2",
      title: "Stirling Engine — CAD Assembly from Provided Drawings",
      description: "CAD modeling of a Stirling Engine using detailed part drawings. Each component was modeled in SOLIDWORKS and assembled into a working system with constraints and mates applied to replicate real-world movement.",
      skills: ["SolidWorks", "CAD Assembly", "Engineering Drawings", "Motion Studies"],
      image: "/lovable-uploads/stirling-engine.gif",
      projectUrl: "/cad-project-2",
      comingSoon: false
    }
  ];

  return (
    <section id="cad-projects" className="section">
      <div className="container-custom">
        <div className="animate-slide-up">
          <p className="overline mb-4">CAD PROJECTS</p>
          <h2 className="heading-1 mb-16">Computer-Aided Design Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cadProjects.map((project, index) => {
            const CardContent = (
              <div
                className="group bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="aspect-video bg-muted/30 overflow-hidden relative">
                  {project.image.endsWith('.gif') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {!project.comingSoon && project.projectUrl && (
                  <Link
                    to={project.projectUrl}
                    className="text-primary text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-colors"
                  >
                    View More →
                  </Link>
                )}
              </div>
            </div>
            );

            return project.projectUrl && !project.comingSoon ? (
              <Link key={project.id} to={project.projectUrl} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={project.id}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Future expansion note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground text-sm">
            More CAD projects and detailed renders coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default CADProjects;