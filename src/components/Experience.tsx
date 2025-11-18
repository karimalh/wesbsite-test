import { experienceData } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="animate-slide-up">
          <p className="overline mb-4">EXPERIENCE</p>
        </div>

        {/* Logo Strip */}
        <div className="mb-16 animate-fade-in">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {experienceData.map((item) => {
              const isHighlighted = item.id === 'tufts' || item.id === 'amazon-robotics';
              return (
                <div
                  key={`logo-${item.id}`}
                  className={`${isHighlighted ? 'w-28 h-28 md:w-32 md:h-32' : 'w-20 h-20 md:w-24 md:h-24'} flex items-center justify-center transition-all duration-300 hover:scale-105`}
                >
                  <img
                    src={item.logo}
                    alt={`${item.org} logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block"></div>
          
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary to-transparent md:hidden"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={item.id} className="relative animate-slide-up">
                  {/* Desktop: Alternating layout */}
                  <div className={`hidden md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Card */}
                    <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-card border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={`${item.org} ${item.role}`}
                              className="w-full h-full object-contain rounded"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {item.org}
                            </h3>
                            <p className="text-primary font-medium mb-2">{item.role}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span>{item.start} – {item.end}</span>
                              <span>•</span>
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>

                  {/* Mobile: Single column layout */}
                  <div className="md:hidden flex items-start gap-6">
                    {/* Timeline node */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    </div>

                    {/* Card */}
                    <div className="flex-1">
                      <div className="bg-card border rounded-2xl p-6 shadow-lg">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={`${item.org} ${item.role}`}
                              className="w-full h-full object-contain rounded"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {item.org}
                            </h3>
                            <p className="text-primary font-medium mb-2">{item.role}</p>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
                              <span>{item.start} – {item.end}</span>
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;