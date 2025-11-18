

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <p className="overline mb-4">ABOUT</p>
          </div>

          <div className="animate-slide-in-left">
            <p className="body-large text-muted-foreground leading-relaxed max-w-4xl">
              I'm a senior Mechanical Engineering student at Tufts University with a strong passion for robotics, design, and hands-on problem solving. I've worked as a Hardware Engineer at Amazon, where I contributed to prototyping and testing new mechanical systems, and at Lexington Medical, where I focused on developing and validating surgical devices. My interests include mechatronics, CAD, and hardware-software integration, and I'm always looking for opportunities to bring ideas to life through engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;