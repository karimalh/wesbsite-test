import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import CADProjects from "@/components/CADProjects";
import CertificationsAwards from "@/components/CertificationsAwards";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <CADProjects />
        <CertificationsAwards />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
