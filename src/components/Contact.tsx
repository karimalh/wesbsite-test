import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "karimhaffar97@gmail.com",
      href: "mailto:karimhaffar97@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+1 (781) 539-9702",
      href: "tel:+17815399702"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/karim-al-haffar",
      href: "https://www.linkedin.com/in/karim-al-haffar/"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-slide-up mb-16">
            <p className="overline mb-4">CONTACT</p>
            <h2 className="heading-2 mb-6">
              Let's connect
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for opportunities, collaborations, or just to discuss engineering and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : "_self"}
                  rel={item.label === "LinkedIn" ? "noopener noreferrer" : ""}
                  className="bg-card rounded-lg border p-6 text-center hover-lift transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;