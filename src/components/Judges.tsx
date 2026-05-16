import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Judges = () => {
  const judges = [
{
    "name": "Ashok Kumar Kanagala",
    "affiliation": "Principal Cloud Security Engineer, Independent Researcher (Cybersecurity and Privacy)",
    "location": "Boston, Massachusetts, USA",
    "image": "/judges/Ashok_Kumar_Kanagala.jpeg",
    "expertise": "Cloud Security, Cybersecurity, Privacy",
    "linkedin": "",
    "email": "Kanagala.ashok@ieee.org",
  },
  {
    "name": "Jayesh Radadiya",
    "affiliation": "Electrical Engineer, Meta",
    "location": "USA",
    "image": "/judges/Jayesh_Radadiya.jpeg",
    "expertise": "Electrical Engineering, Biomedical Engineering, Research & Development",
    "linkedin": "https://www.linkedin.com/in/jayeshee/",
    "email": "jayesh.radadiya1959@gmail.com"
  },
  {
    "name": "Ravindrakumar Prajapati",
    "affiliation": "Sr Business Systems Analyst, Lead Solutions Architect, Relanto INC",
    "location": "USA",
    "image": "/judges/Ravindrakumar_Prajapati.jpeg",
    "expertise": "Anaplan Solutions Architecture",
    "linkedin": "https://www.linkedin.com/in/ravinmp/",
    "email": "prajapati.ravindra@outlook.com"
  },
  {
    "name": "Dhavalkumar Thakar",
    "affiliation": "Senior Systems and Software Engineer, Capgemini",
    "location": "USA",
    "image": "/judges/Dhavalkumar_Thakar.jpeg",
    "expertise": "Healthcare Systems Engineering",
    "linkedin": "https://www.linkedin.com/in/dhavalthakar91",
    "email": "d10thakar@gmail.com"
  },
  {
    "name": "Ketankumar Patel",
    "affiliation": "Senior Software Engineer, Anaqua Inc",
    "location": "USA",
    "image": "/judges/Ketankumar_Patel.jpeg",
    "expertise": "AI, Healthcare Analytics, Business Intelligence",
    "linkedin": "https://www.linkedin.com/in/ketanerp",
    "email": "kdp2885@gmail.com"
  },
  {
    "name": "Neeraj Bhargav",
    "affiliation": "Cloud Infrastructure Engineer 4, Indeed Inc",
    "location": "USA",
    "image": "/judges/Neeraj_Bhargav.jpeg",
    "expertise": "AI ML, Streaming, Data Engineering",
    "linkedin": "https://www.linkedin.com/in/neeraj-bhargav-964285122",
    "email": "bhargav6211@gmail.com"
  },
  {
    "name": "Prabhu Rengaramanujam",
    "affiliation": "Senior Engineer, Guidewire Software, Inc",
    "location": "USA",
    "image": "/judges/Prabhu_Rengaramanujam.png",
    "expertise": "AI Strategy, Digital Transformation",
    "linkedin": "https://www.linkedin.com/in/prabhu-rengaramanujam-5a7a171a/",
    "email": "prabhurenga@gmail.com"
  }
]
  return (
    <section id="judges" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert Judges Panel
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished panel of expert judges who will evaluate submissions based on innovation, 
            environmental impact, technical excellence and scalability. Our judges bring decades of experience 
            in technology, AI and sustainability.
          </p>
        </div>

        {/* Judges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => {
            const JudgeCard = (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Judge Photo */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={judge.image} 
                      alt={`${judge.name} - challenge Judge`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Judge Info */}
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {judge.expertise}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-earth-green transition-colors duration-300">
                      {judge.name}
                    </h3>
                    <p className="text-sm font-medium text-earth-green mb-1">
                      {judge.affiliation}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {judge.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

            return judge.linkedin ? (
              <a 
                key={index}
                href={judge.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {JudgeCard}
              </a>
            ) : (
              JudgeCard
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Present to the Experts?
            </h3>
            <p className="text-muted-foreground mb-6">
              Showcase your AI-powered environmental solutions to our distinguished panel of judges 
              and compete for the $1,750 prize pool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;