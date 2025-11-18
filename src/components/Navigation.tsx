import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "cad-projects", label: "CAD" },
    { id: "certs-awards", label: "Certifications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const projectItems = [
    { id: "project-1", label: "Reload Simulator (Lexington Medical)", url: "/project-1" },
    { id: "project-2", label: "Automated Latte Cafe", url: "/project-2" },
    { id: "project-3", label: "3DoF Robotic Arm Elevator", url: "/project-3" },
    { id: "project-4", label: "Building a Tricycle", url: "/project-4" },
    { id: "project-5", label: "Robot Car: Autonomously Controlled", url: "/project-5" },
    { id: "project-6", label: "Autonomous Maze Exploration with Object Recognition", url: "/project-6" },
    { id: "project-7", label: "Fingerprint Locked Snack Box", url: "/project-7" },
    { id: "project-8", label: "Line Follower: Image Processing vs Color Sensor", url: "/project-8" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
  };

  const scrollToProject = (projectUrl: string) => {
    // Navigate to project page
    navigate(projectUrl);
    setIsProjectsDropdownOpen(false);
  };

  const handleProjectsClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection("projects");
    }
    setIsProjectsDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsProjectsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 150); // 150ms delay to allow smooth transition
    setDropdownTimeout(timeout);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection("hero");
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdown = target.closest('[data-dropdown="projects"]');
      const mobileMenu = target.closest('[data-mobile-menu]');
      
      // Only close desktop dropdown if clicking outside and not hovering
      if (!dropdown && !target.closest('[data-dropdown="projects"]')) {
        setIsProjectsDropdownOpen(false);
      }
      if (!mobileMenu) {
        setIsMobileMenuOpen(false);
        setIsMobileProjectsOpen(false);
      }
    };

    // Only add click listener for mobile menu, not desktop dropdown (handled by hover)
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={handleHomeClick}
            className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
          >
            Karim Al-Haffar
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary relative",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
            
            {/* Projects Dropdown */}
            <div 
              className="relative" 
              data-dropdown="projects"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={handleProjectsClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (isProjectsDropdownOpen) {
                      handleProjectsClick();
                    } else {
                      setIsProjectsDropdownOpen(true);
                    }
                  } else if (e.key === 'Escape') {
                    setIsProjectsDropdownOpen(false);
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setIsProjectsDropdownOpen(true);
                  }
                }}
                onFocus={() => setIsProjectsDropdownOpen(true)}
                onBlur={(e) => {
                  // Only close if focus is moving outside the dropdown container
                  if (!e.currentTarget.closest('[data-dropdown="projects"]')?.contains(e.relatedTarget as Node)) {
                    setTimeout(() => setIsProjectsDropdownOpen(false), 150);
                  }
                }}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary relative inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm",
                  activeSection === "projects"
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Projects
                <ChevronDown className={cn(
                  "w-3 h-3 transition-transform duration-200",
                  isProjectsDropdownOpen && "rotate-180"
                )} />
                {activeSection === "projects" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </button>
              
              {isProjectsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-2">
                    {projectItems.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => scrollToProject(project.url)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            scrollToProject(project.url);
                          }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary transition-colors focus:outline-none focus:bg-secondary focus:text-primary"
                      >
                        {project.label}
                      </button>
                    ))}
                    <div className="border-t border-border mt-2 pt-2">
                      <button
                        onClick={handleProjectsClick}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleProjectsClick();
                          }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-primary font-medium hover:bg-secondary transition-colors focus:outline-none focus:bg-secondary"
                      >
                        View All Projects
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-2 md:hidden" data-mobile-menu>
            <ThemeToggle />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in"
            data-mobile-menu
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      activeSection === item.id
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Projects Section */}
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex">
                    <button
                      onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                      className={cn(
                        "flex-1 text-left px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-between",
                        activeSection === "projects"
                          ? "text-primary bg-secondary"
                          : "text-muted-foreground"
                      )}
                      aria-expanded={isMobileProjectsOpen}
                      aria-controls="mobile-projects-menu"
                    >
                      Projects
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isMobileProjectsOpen && "rotate-180"
                      )} />
                    </button>
                    <button
                      onClick={() => {
                        if (location.pathname !== '/') {
                          navigate('/');
                        } else {
                          scrollToSection("projects");
                        }
                        setIsMobileMenuOpen(false);
                        setIsMobileProjectsOpen(false);
                      }}
                      className="px-3 py-3 text-sm text-primary font-medium hover:bg-secondary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-2"
                      title="Go to Projects section"
                    >
                      →
                    </button>
                  </div>
                  
                  {isMobileProjectsOpen && (
                    <div id="mobile-projects-menu" className="mt-2 ml-4 space-y-1 animate-fade-in">
                      {projectItems.map((project) => (
                        <button
                          key={project.id}
                          onClick={() => {
                            navigate(project.url);
                            setIsMobileMenuOpen(false);
                            setIsMobileProjectsOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          {project.label}
                        </button>
                      ))}
                      <button
                        onClick={() => {
                          if (location.pathname !== '/') {
                            navigate('/');
                          } else {
                            scrollToSection("projects");
                          }
                          setIsMobileMenuOpen(false);
                          setIsMobileProjectsOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-primary font-medium hover:bg-secondary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        View All Projects
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;