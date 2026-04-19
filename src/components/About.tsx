import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Innovation in Intelligent Systems",
      description: "Encourage innovation in intelligent systems and emerging technologies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Technical Skills Showcase",
      description: "Provide a platform for students and developers to showcase their technical skills"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Collaboration",
      description: "Foster collaboration between academia, startups, and industry"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Real-World Solutions",
      description: "Support development of scalable technology solutions for real-world challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About IntelliTech Hackathon

          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
           The IntelliTech Hackathon: Engineering Smart Solutions is a dynamic innovation challenge designed to bring together students, developers, engineers, researchers, and innovators to solve real-world problems using intelligent technologies.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This hackathon aims to foster creativity, collaboration, and cutting-edge problem solving by encouraging participants to develop AI-driven, data-driven, and intelligent system-based solutions that can transform industries and society. Participants will work in teams to conceptualize, design, and prototype solutions within a limited time frame while being mentored by experts from academia and industry.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision and Mission */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🌐 Who Can Participate
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The hackathon is open to undergraduate and postgraduate students, research scholars, developers and programmers, startups and technology enthusiasts, and interdisciplinary teams interested in solving complex problems. Participants can form teams of 3–5 members.
            </p>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Participate
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Gain hands-on experience with emerging technologies, collaborate with talented innovators, receive expert mentorship, showcase your skills on a national platform, and transform your ideas into real-world solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;