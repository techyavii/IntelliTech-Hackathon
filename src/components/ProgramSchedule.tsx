import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Users, Award, AlertCircle } from "lucide-react";

const ProgramSchedule = () => {
  const scheduleInfo = [
    {
      title: "Registration & Idea Submission",
      icon: <Calendar className="w-5 h-5" />,
      description: "Teams register and submit their initial ideas and solutions."
    },
    {
      title: "Shortlisting of Teams",
      icon: <Users className="w-5 h-5" />,
      description: "Evaluation committee reviews submissions and shortlists teams."
    },
    {
      title: "Hackathon Development Phase",
      icon: <Clock className="w-5 h-5" />,
      description: "Shortlisted teams develop their prototypes with expert mentoring."
    },
    {
      title: "Final Presentation & Awards",
      icon: <Award className="w-5 h-5" />,
      description: "Teams present their solutions and winners are announced."
    }
  ];

  const guidelines = [
    "All participants and presenters should join their sessions at least 5 minutes before the scheduled start time.",
    "Please keep your microphone and video turned off unless instructed otherwise.",
    "Presenters must be fully prepared with their slides, demo of their prototype and ensure their microphone and camera are functioning properly ahead of time.",
    "Session Judges will invite presenters one by one to deliver their presentations.",
    "Presentations may be prepared in any slide format.",
    "The Day 2 schedule will be published after the completion of the Selection Round."
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            IntelliTech Hackathon Program Schedule
          </h1>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The IntelliTech Hackathon will be conducted in the following stages.
          </p>
        </div>

        {/* Schedule Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {scheduleInfo.map((info, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero text-white flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Days */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Day 1 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Day 1</Badge>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-earth-green" />
                April 11, 2026
              </CardTitle>
              <p className="text-lg font-semibold text-earth-green">Selection Round</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gradient-hero/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Initial Presentation Round</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All registered teams will present their solutions to the judging panel. 
                  Teams will be evaluated based on the judging criteria.
                </p>
              </div>
              <Button
                className="w-full py-6 mb-4 font-bold text-lg"
                disabled
                onClick={() =>
                  window.open(
                    "https://docs.google.com/spreadsheets/d/1KuGtb5cP3iOBgM5Ad5Zmlw5gRPLyXkoXiAlSuHe4tMM/edit?usp=sharing",
                    "_blank"
                  )
                }
              >
                Day-1 Shortlisted Teams
              </Button> 
              <Button
                className="w-full"
                onClick={() => window.open("https://us06web.zoom.us/j/88289871936?pwd=XmBu9Gn6t0fgOoH0AwEEkQ8bt6s443.1", "_blank")}
                disabled
              >
                <Video className="w-4 h-4 mr-2" />
                Join Session
              </Button>
            </CardContent>
          </Card>

          {/* Day 2 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 ring-2 ring-earth-green/30">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2 bg-earth-green text-white">Day 2</Badge>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-earth-green" />
                April 12, 2026
              </CardTitle>
              <p className="text-lg font-semibold text-earth-green">Final Round</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gradient-hero/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Final Presentations & Awards</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Selected teams from Day 1 will present their refined solutions. 
                  Winners will be announced and prizes distributed.
                </p>
              </div>
              <Button
                className="w-full py-6 mb-4 font-bold text-lg"
                disabled
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DinsLPCJ1oMYdWNxDdLaNeUGRj9u8SMS/view?usp=sharing",
                    "_blank"
                    
                  )
                }
              >
                Day-2 Shortlisted Teams
              </Button> 
              <Button
                className="w-full"
                onClick={() => window.open("https://us06web.zoom.us/j/82524425157?pwd=FaiIaPYdgJAhS97KQmT6AUWq79pZDy.1", "_blank")}
                disabled
              >
                <Video className="w-4 h-4 mr-2" />
                <Award className="w-4 h-4 mr-2" />
                Join Final Round (For Selected Teams Only)
              </Button>
            </CardContent>
          </Card>
        </div>

{/* Hackathon Stages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Stage 1 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Stage 1</Badge>
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-earth-green" />
                Registration & Idea Submission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Teams register and submit their initial ideas and proposed solutions.
              </p>
            </CardContent>
          </Card>

          {/* Stage 2 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Stage 2</Badge>
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-3">
                <Users className="w-6 h-6 text-earth-blue" />
                Shortlisting of Teams
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                A screening committee evaluates submissions and shortlists teams based on innovation, relevance, and feasibility.
              </p>
            </CardContent>
          </Card>

          {/* Stage 3 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Stage 3</Badge>
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-earth-teal" />
                Hackathon Development Phase
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Shortlisted teams participate in the development phase, building prototypes under mentor guidance.
              </p>
            </CardContent>
          </Card>

          {/* Stage 4 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Stage 4</Badge>
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-3">
                <Users className="w-6 h-6 text-purple-500" />
                Mentoring Sessions with Experts
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Teams receive expert mentorship and guidance throughout the development process.
              </p>
            </CardContent>
          </Card>

          {/* Stage 5 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Stage 5</Badge>
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                Final Prototype Demonstration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Teams present their working prototypes, software applications, or conceptual models.
              </p>
            </CardContent>
          </Card>

          {/* Stage 6 */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 ring-2 ring-earth-green/30">
            <CardHeader className="text-center pb-4">
              <Badge variant="secondary" className="w-fit mx-auto mb-2 bg-earth-green text-white">Stage 6</Badge>
              <CardTitle className="text-xl text-foreground flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-earth-green" />
                Jury Evaluation and Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Final evaluation by jury panel and announcement of winners with awards and recognition.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Instructions for Presenters */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-earth-green" />
                Instructions for Presenters
              </CardTitle>
              <p className="text-muted-foreground">
                To ensure a smooth experience, presenters are requested to review the following guidelines:
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </Badge>
                    <p className="text-foreground leading-relaxed">{guideline}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero/10 border-earth-green/30 border-2">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                📅 Important Dates
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Registration Opens: To be announced<br/>
                Idea Submission Deadline: To be announced<br/>
                Hackathon Dates: 06-07th June 2026<br/>
                Final Presentation & Awards: 06-07th June 2026
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-earth-green font-medium">
                  <Clock className="w-5 h-5" />
                  Online Mode
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;