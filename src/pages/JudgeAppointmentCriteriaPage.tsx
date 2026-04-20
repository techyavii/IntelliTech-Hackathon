import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

const JudgeAppointmentCriteriaPage = () => {

  const sections = [
    {
      icon: "🎯",
      title: "Eligibility Criteria",
      content: [
        "Judges are selected from diverse backgrounds, including industry, academia, startups, and research organizations. Candidates should meet one or more of the following:",
        "• Industry Experts: Minimum 5–10 years of experience in AI, software development, data science, or related domains",
        "• Academicians/Researchers: PhD or significant research contributions in emerging technologies",
        "• Startup Founders/Leaders: Proven track record in building scalable tech products",
        "• Domain Specialists: Expertise in sectors aligned with hackathon themes (e.g., healthcare, fintech, sustainability)"
      ]
    },
    {
      icon: "🧠",
      title: "Core Competencies Required",
      content: [
        "Judges are expected to demonstrate:",
        "• Strong technical knowledge in AI and emerging technologies",
        "• Understanding of real-world problem-solving and innovation",
        "• Ability to evaluate scalability and feasibility of solutions",
        "• Experience in mentoring, evaluating, or leading teams",
        "• Ethical judgment and unbiased decision-making"
      ]
    },
    {
      icon: "⚖️",
      title: "Selection Parameters",
      content: [
        "Candidates are shortlisted based on:",
        "• Professional experience and achievements",
        "• Prior judging/mentoring experience in hackathons or competitions",
        "• Industry recognition (awards, publications, patents)",
        "• Alignment with hackathon themes and objectives"
      ]
    },
    {
      icon: "🔍",
      title: "Diversity & Representation",
      content: [
        "We ensure a balanced and inclusive jury panel by incorporating:",
        "• Industry and academic representation",
        "• Cross-domain expertise",
        "• Gender diversity",
        "• Mix of senior leaders and emerging innovators"
      ]
    },
    {
      icon: "📋",
      title: "Roles & Responsibilities",
      content: [
        "Selected judges will:",
        "• Evaluate team submissions across all stages",
        "• Participate in mentor reviews and final judging rounds",
        "• Provide constructive feedback to participants",
        "• Ensure adherence to evaluation guidelines and fairness"
      ]
    },
    {
      icon: "🤝",
      title: "Code of Conduct",
      content: [
        "All judges must:",
        "• Maintain confidentiality of participant ideas",
        "• Declare any conflict of interest",
        "• Follow a fair, unbiased, and transparent evaluation process"
      ]
    },
    {
      icon: "🏆",
      title: "Final Selection",
      content: [
        "Judges are appointed by the organizing committee based on:",
        "• Merit and expertise",
        "• Availability during the event",
        "• Alignment with event vision and values"
      ]
    },
    {
      icon: "🌟",
      title: "Our Commitment",
      content: [
        "We aim to bring together a credible, experienced, and diverse panel of judges to ensure that the most innovative and impactful solutions are recognized and rewarded."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <nav className="text-sm mb-6 opacity-90">
                <span>Home</span>
                <span className="mx-2">&gt;</span>
                <span>Judge Appointment Criteria</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Judge Appointment Criteria
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-4">
                IntelliTech Hackathon: Engineering Smart Solutions
              </p>
              <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                At IntelliTech Hackathon, we appoint judges through a rigorous and merit-based selection process to ensure fairness, credibility, and high-quality evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Judge Appointment Criteria
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <span className="text-4xl">{section.icon}</span>
                      <h3 className="text-2xl font-bold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {section.content.map((point, pointIndex) => (
                        <p key={pointIndex} className="text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Judge Reveal */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Card className="bg-gradient-hero text-white border-0 shadow-earth max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Judge Reveal
                  </h2>
                  <p className="text-lg opacity-90 leading-relaxed mb-8">
                    Our distinguished panel of environmental AI experts will be unveiled in March 2026. These industry leaders and researchers will bring unparalleled expertise to evaluate your innovative solutions.
                  </p>

                  <div className="border-t border-white/20 pt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Judge Nominations & Technical Inquiries
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-5 h-5" />
                      <a
                        href="mailto:info@intellitechhackathon.com"
                        className="text-lg hover:underline"
                      >
                        info@intellitechhackathon.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JudgeAppointmentCriteriaPage;
