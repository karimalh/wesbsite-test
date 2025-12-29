import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { asset } from "@/utils/asset";

const Project9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="heading-1 mb-6">
              Onshape “Pen Pal” — Automated Pen Dispenser & Data Collection System
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="heading-3 mb-6">Overview and Goal</h2>
                <p className="body-large text-muted-foreground leading-relaxed">
                  The Onshape Pen Pal is a portable, automated pen-dispensing device designed
                  for academic conferences to engage attendees, showcase engineering design
                  in Onshape, and collect contact information via a QR-code form. Attendees
                  submit their information, and the system dispenses exactly one pen through
                  an automated mechanical sequence driven by onboard controls.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted/50 rounded-lg p-6 space-y-6 sticky top-8">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">📍 Date and Location</h3>
                  <p className="text-sm text-muted-foreground">Tufts University — Senior Capstone</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">👥 Team</h3>
                  <p className="text-sm text-muted-foreground">Team project (Onshape-sponsored capstone)</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">⚙️ Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Mechanical Design • CAD (Onshape) • Mechatronics • Rapid Prototyping •
                    DFM • Controls • System Integration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <section className="mb-12">
            <div className="mb-8">
              <img
                src={asset("lovable-uploads/pen-pal-hero.png")}
                alt="Onshape Pen Pal automated pen dispenser prototype"
                className="w-full rounded-lg shadow-md"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Prototype overview (add your best “hero” photo here)
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Problem</h2>
            <p className="body-large text-muted-foreground leading-relaxed">
              At conferences, distributing pens is a simple but powerful way to attract
              students and educators. However, manual distribution is less engaging and
              doesn’t reliably capture attendee information. The challenge was to design a
              travel-friendly system that reliably dispenses one pen per submission while
              creating a memorable, interactive demo.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Approach and System Design</h2>

            <div className="mb-12">
              <h3 className="heading-3 mb-6">Mechanical Subsystems</h3>
              <p className="body-large text-muted-foreground leading-relaxed mb-8">
                The device combines a rotating cylindrical pen dispenser with a delivery
                mechanism to prevent jamming and ensure single-pen dispensing. A transparent
                acrylic enclosure and a modular structural frame create a safe, engaging,
                and portable system suitable for repeated travel and rapid setup.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img
                    src={asset("lovable-uploads/pen-pal-dispenser.png")}
                    alt="Pen storage and dispensing mechanism"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Pen storage + dispensing module (add a close-up)
                  </p>
                </div>

                <div>
                  <img
                    src={asset("lovable-uploads/pen-pal-frame.png")}
                    alt="Structural frame and enclosure"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Structural frame + enclosure (add a photo showing portability)
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="heading-3 mb-6">Data Pipeline & Controls</h3>
              <p className="body-large text-muted-foreground leading-relaxed mb-8">
                Users scan a QR code and complete a short form. Submissions are logged in a
                cloud database, and a Raspberry Pi continuously monitors new entries to trigger
                the dispensing sequence. This creates a seamless flow from attendee interaction
                to automated delivery.
              </p>

              <div className="mb-8">
                <img
                  src={asset("lovable-uploads/pen-pal-flow.png")}
                  alt="QR to database to dispenser control flow"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  System workflow (QR → form → database → Raspberry Pi → actuation)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Key Engineering Highlights</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Anti-jamming dispensing</h4>
                <p className="text-muted-foreground">
                  Designed storage and dispensing features to reliably deliver one pen per cycle,
                  reducing failure modes seen in bulk-feed mechanisms.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Travel-ready constraints</h4>
                <p className="text-muted-foreground">
                  Designed for portability and rapid setup with a modular frame, protective enclosure,
                  and battery-powered operation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">System integration</h4>
                <p className="text-muted-foreground">
                  Integrated mechanical actuation with cloud-triggered events for a complete demo
                  that combines hardware + data collection.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Challenges</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Reliable single-item dispensing</h4>
                <p className="text-muted-foreground">
                  Preventing jams and double-feeds required iterative testing and geometry tuning of the
                  dispenser and exit path.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Robustness for repeated use</h4>
                <p className="text-muted-foreground">
                  Ensuring stability, alignment, and safe user interaction drove design decisions around
                  the enclosure, frame rigidity, and fasteners.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">End-to-end automation</h4>
                <p className="text-muted-foreground">
                  Coordinating cloud events with hardware actuation required careful sequencing and
                  error handling to avoid misfires or missed submissions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Outcomes</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Demonstrated automated dispensing triggered by QR-form submissions</li>
              <li>• Delivered a conference-ready prototype emphasizing user engagement and visibility</li>
              <li>• Integrated mechanical design, electronics, and cloud-based data collection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Future Improvements</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Add sensors for pen-present / jam detection and automatic recovery</li>
              <li>• Improve serviceability for faster reload and maintenance at events</li>
              <li>• Optimize throughput and dispense cycle time</li>
              <li>• Add analytics dashboard for real-time conference engagement metrics</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-8">Summary</h2>
            <p className="body-large text-muted-foreground leading-relaxed">
              Onshape Pen Pal is a complete, portable demo system that turns a simple giveaway into an
              interactive experience. It combines mechanical design, mechatronics, and cloud integration
              to reliably dispense pens while capturing attendee data—making it a strong showcase of
              end-to-end engineering and product thinking.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="heading-2 mb-8">Project Documentation</h2>
          
            <p className="body-large text-muted-foreground leading-relaxed mb-6">
              The full design report below documents the mechanical design process,
              system architecture, validation, and final outcomes of the Onshape Pen Pal
              project.
            </p>
          
            <div className="w-full h-[80vh] rounded-lg overflow-hidden border shadow-md mb-4">
              <iframe
                src={asset("lovable-uploads/onshape-pen-pal.pdf")}
                title="Onshape Pen Pal Design Report"
                className="w-full h-full"
              />
            </div>
          
            <a
              href={asset("lovable-uploads/onshape-pen-pal.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Open PDF in new tab
            </a>
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

export default Project9;
