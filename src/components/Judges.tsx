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
  },
   {
    "name": "Abhilash Koka",
    "affiliation": "Technical Manager, Cognizant Technology Solutions",
    "location": "USA",
    "image": "/judges/Abhilash_Koka.jpeg",
    "expertise": "Cybersecurity, SRE",
    "linkedin": "https://www.linkedin.com/in/abhilash-koka-88a20a71/",
    "email": "abhimca07@gmail.com"
  },
  {
    "name": "Raghu Praneeth Akula",
    "affiliation": "EPM Cloud Architect, CSAA Insurance Services",
    "location": "USA",
    "image": "/judges/Raghu_Praneeth_Akula.jpeg",
    "expertise": "EPM Cloud, Agentic AI",
    "linkedin": "",
    "email": "epmofficialuse@gmail.com"
  },
  {
    "name": "Kumaraswamy Nekkalapudi",
    "affiliation": "Lead Java Developer, Relycom Inc",
    "location": "USA",
    "image": "/judges/Kumaraswamy_Nekkalapudi.jpeg",
    "expertise": "Java Microservices, AWS Kubernetes",
    "linkedin": "https://linkedin.com/in/kumar-n-0bab24127",
    "email": "kumarnekkalapudi09@gmail.com"
  },
  {
    "name": "Nitin Sharma",
    "affiliation": "Senior Principal Enterprise Architect, Perforce Software Inc",
    "location": "USA",
    "image": "/judges/Nitin_Sharma.jpeg",
    "expertise": "Data Virtualization, Compliance",
    "linkedin": "https://www.linkedin.com/in/nitinsharma85/",
    "email": "nitinsharma85@gmail.com"
  },
  {
    "name": "Praveen Hegde",
    "affiliation": "Associate Director - Emerging Commercial Platforms, Verizon, USA",
    "location": "USA",
    "image": "/judges/Praveen_Hegde.jpeg",
    "expertise": "Telecommunications, AI/ML, Cloud Computing",
    "linkedin": "https://www.linkedin.com/in/praveenmhegde/",
    "email": "praveen.m.hegde@gmail.com"
  },
  {
    "name": "Partha Sarathi Reddy Pedda Muntala",
    "affiliation": "Software Engineer, Cisco Systems, Inc",
    "location": "USA",
    "image": "/judges/Partha_Sarathi_Reddy_Pedda_Muntala.jpeg",
    "expertise": "Oracle Cloud ERP, AI, ML",
    "linkedin": "https://www.linkedin.com/in/partha-sarathi-reddy-96a4a44b/",
    "email": "parthasarathireddypeddamuntala@gmail.com"
  },
  {
    "name": "Sandeep Kumar Jangam",
    "affiliation": "Lead Consultant, Infosys Limited",
    "location": "India",
    "image": "/judges/Sandeep_Kumar_Jangam.jpeg",
    "expertise": "Enterprise Integration, API Connectivity, Middleware",
    "linkedin": "https://www.linkedin.com/in/sandeep-kumar-j-60202323",
    "email": "jsandeepkumar2121@gmail.com"
  },
  {
    "name": "Nagireddy Karri",
    "affiliation": "Senior Software Engineer, Red Hat",
    "location": "USA",
    "image": "/judges/Nagireddy_Karri.jpeg",
    "expertise": "AI, ML, Cloud Database Management",
    "linkedin": "https://www.linkedin.com/in/nagireddy-karri-a13a7719/",
    "email": "Nagireddy.karri@gmail.com"
  },
  {
  "name": "Somesh Nagalla",
  "affiliation": "Sr Software Engineer, 7-Eleven",
  "location": "USA",
  "image": "/judges/Somesh_Nagalla.jpeg",
  "expertise": "AI, ML, Data Analytics",
  "linkedin": "https://www.linkedin.com/in/somesh-n-ops",
  "email": "someshnagalla@gmail.com"
},
{
  "name": "Shreya Hegde",
  "affiliation": "Sr Product Manager Tech, Amazon",
  "location": "USA",
  "image": "/judges/Shreya_Hegde.jpeg",
  "expertise": "Digital Twin, Simulation, AI Compliance, IoT",
  "linkedin": "https://www.linkedin.com/in/shreya-hegde-25029016",
  "email": "shreyahegde84@gmail.com"
},
{
  "name": "Ravindra Bhat Gopalakrishna",
  "affiliation": "Sr Principal Software Engineer, Yahoo",
  "location": "USA",
  "image": "/judges/Ravindra_Bhat_Gopalakrishna.jpeg",
  "expertise": "Distributed Systems, Cloud Strategy",
  "linkedin": "https://www.linkedin.com/in/ravindrabg",
  "email": "rbhat4312@gmail.com"
},
{
  "name": "Santhosh Reddy BasiReddy",
  "affiliation": "Senior Salesforce Lead Architect, USAA",
  "location": "USA",
  "image": "/judges/Santhosh_Reddy_BasiReddy.jpeg",
  "expertise": "Enterprise Architecture, AI Governance, Generative AI, Risk Management",
  "linkedin": "https://www.linkedin.com/in/santhosh-reddy-basireddy-077005149",
  "email": "santhureddy245@gmail.com"
},
{
  "name": "Tripatjeet Singh",
  "affiliation": "Senior Cloud Engineer, UMB Bank",
  "location": "USA",
  "image": "/judges/Tripatjeet_Singh.jpeg",
  "expertise": "Cloud Architecture, Banking Technology, AI/ML",
  "linkedin": "https://www.linkedin.com/in/tripatjeet-singh-71626",
  "email": "tripatlives@gmail.com"
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