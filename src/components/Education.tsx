import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <p className="overline mb-4">EDUCATION</p>
          </div>

          <div className="space-y-8">
            {/* Tufts University */}
            <div className="animate-slide-in-left">
              <div className="bg-card rounded-lg border p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="heading-3">Tufts University</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-2">Sept 2021 – Dec 2025, expected</p>
                    <p className="font-medium text-foreground mb-1">B.S. in Mechanical Engineering</p>
                    <p className="text-sm text-muted-foreground mb-3">Minor in Engineering Management</p>
                    <p className="font-medium text-primary">GPA: 3.97/4.0</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Jason H. and Eleanor H. Samuels Prize (academic excellence in MechE)
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Arab Student Association President, Robotics Club, Tau Beta Pi Engineering Honor Society
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Advanced Robotics, Thermodynamics, Materials and Manufacturing, Static and Dynamic Mechanics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* United World Colleges */}
            <div className="animate-slide-in-left">
              <div className="bg-card rounded-lg border p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="heading-3">United World Colleges Dilijan (UWCD)</h3>
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-2">Dilijan, Armenia</p>
                  <p className="font-medium text-foreground">International Baccalaureate Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;