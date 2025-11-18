import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center animate-slide-up">
          <p className="overline mb-4">RESUME</p>
          <h2 className="heading-2 mb-6">
            Download my résumé
          </h2>
          <p className="body-large text-muted-foreground mb-12">
            Get a comprehensive overview of my experience, education, and technical skills.
          </p>
          
          <div className="bg-card rounded-lg border p-8 hover-lift">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="heading-3 mb-4">Karim's Resume</h3>
            <p className="text-muted-foreground mb-6">
              My most recent resume
            </p>
            
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;