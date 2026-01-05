import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image?: string;
  bullets?: string[];
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
  projectUrl?: string;
  disabled?: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  image,
  bullets = [],
  tags = [],
  githubUrl,
  demoUrl,
  projectUrl,
  disabled = false,
}: ProjectCardProps) => {
  const CardContent = (
    <div
      className={`bg-card rounded-lg border overflow-hidden transition-all duration-300 ${
        !disabled ? "hover-lift cursor-pointer" : "cursor-not-allowed opacity-75"
      }`}
    >
      {/* IMAGE PREVIEW */}
      <div className="aspect-video bg-muted flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Project preview image</p>
          </div>
        )}
      </div>

      {/* CARD BODY */}
      <div className="p-6">
        <h3 className="heading-3 mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{subtitle}</p>

        {bullets.length > 0 && (
          <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(githubUrl || demoUrl) && !disabled && (
          <div className="flex gap-3 pt-4 border-t border-border">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // Wrap card in Link when navigable
  if (projectUrl && !disabled) {
    return (
      <Link to={projectUrl} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

export default ProjectCard;
