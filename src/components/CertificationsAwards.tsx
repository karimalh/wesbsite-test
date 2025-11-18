import { Award, FileText } from "lucide-react";

const CertificationsAwards = () => {
  const certifications = [
    {
      id: "solidworks-cswa",
      title: "SOLIDWORKS CSWA (Associate)",
      issuer: "Dassault Systèmes",
      description: "Validated proficiency in 3D parametric part modeling, basic assemblies, and production-ready 2D drawings.",
      type: "certification",
      tags: ["CAD", "3D Modeling"]
    },
    {
      id: "solidworks-advanced",
      title: "SOLIDWORKS — Advanced Part Modeling (Intensive)",
      issuer: "Dassault Systèmes (training)",
      description: "3-day advanced course covering expert-level parametric workflows, multi-body techniques, complex geometry, and design for manufacturability.",
      type: "certification",
      tags: ["CAD", "DFM"]
    },
    {
      id: "samuels-prize",
      title: "Samuels Prize in Mechanical Engineering",
      issuer: "Tufts University — School of Engineering",
      description: "Awarded to a junior in Mechanical Engineering for overall academic excellence, based on recommendation from the department chair.",
      type: "award",
      tags: ["Academics"]
    },
    {
      id: "howard-sample-prize",
      title: "Howard Sample Prize Scholarship in Physics",
      issuer: "Tufts University",
      description: "Scholarship recognizing exceptional achievement in physics.",
      type: "award",
      tags: ["Academics"]
    }
  ];

  return (
    <section id="certs-awards" className="section">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="animate-slide-up mb-16">
            <p className="overline mb-4">CERTIFICATIONS & AWARDS</p>
            <h2 className="heading-2">Recognition & Credentials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {item.type === "certification" ? (
                      <FileText className="w-6 h-6 text-primary" />
                    ) : (
                      <Award className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-card-foreground mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">
                      {item.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAwards;