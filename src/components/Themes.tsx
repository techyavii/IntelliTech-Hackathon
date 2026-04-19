import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain,
  Zap,
  Building,
  MapPin,
  Leaf,
  Shield
} from "lucide-react";

const Themes = () => {
  const themes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Artificial Intelligence & Machine Learning 🤖",
      subtitle: "Enabling systems to learn from data and make intelligent decisions",
      color: "from-red-500 to-pink-600",
      subThemes: [
        "AI-powered recommendation systems",
        "Chatbots and virtual assistants",
        "Image and speech recognition systems",
        "Predictive analytics for healthcare, finance, or education",
        "Intelligent automation tools"
      ],
      impactFocus: "Smart applications capable of learning, adapting, and improving over time"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Internet of Things (IoT) & Smart Systems 🌐",
      subtitle: "Connecting devices for real-time monitoring and intelligent decision-making",
      color: "from-blue-500 to-cyan-600",
      subThemes: [
        "Smart home automation systems",
        "Intelligent agriculture and precision farming",
        "Environmental monitoring systems",
        "Smart transportation and mobility solutions",
        "Health monitoring wearable devices"
      ],
      impactFocus: "Connected systems that integrate sensors, cloud platforms, and data analytics"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Manufacturing & Industry 4.0 🏭",
      subtitle: "Revolutionizing manufacturing through automation and digital twins",
      color: "from-yellow-500 to-orange-600",
      subThemes: [
        "Predictive maintenance for machines",
        "AI-driven quality inspection systems",
        "Digital twin applications for production systems",
        "Robotics and automation solutions",
        "Smart supply chain and logistics optimization"
      ],
      impactFocus: "Intelligent tools and platforms that support the future of smart factories"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Sustainability & Smart Cities 🌱",
      subtitle: "Technology solutions for environmental sustainability and urban living",
      color: "from-gray-500 to-slate-600",
      subThemes: [
        "Smart energy management systems",
        "Waste management and recycling technologies",
        "Smart traffic and mobility solutions",
        "Water conservation and monitoring systems",
        "Climate monitoring and environmental analytics"
      ],
      impactFocus: "Greener, safer, and more sustainable communities"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Data Intelligence & Decision Support Systems 📊",
      subtitle: "Transforming raw data into actionable insights and intelligent decisions",
      color: "from-primary to-accent",
      subThemes: [
        "Real-time analytics dashboards",
        "Data visualization platforms",
        "Decision-support systems for healthcare or governance",
        "Business intelligence solutions",
        "AI-driven forecasting and risk analysis tools"
      ],
      impactFocus: "Data-driven systems that support strategic planning and operational efficiency"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Education Technology & Intelligent Learning Systems 🎓",
      subtitle: "Enhancing learning experiences through intelligent technologies",
      color: "from-accent to-earth-blue",
      subThemes: [
        "AI-powered learning assistants",
        "Adaptive learning platforms",
        "Virtual laboratories and simulations",
        "Intelligent assessment and feedback systems",
        "Smart classroom technologies"
      ],
      impactFocus: "Personalized and interactive learning tools"
    }
  ];

  return (
    <section id="themes" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Thematic Tracks – IntelliTech Hackathon
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our six thematic tracks, each offering unique opportunities to create impactful intelligent technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {themes.map((theme, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-0 shadow-card hover:shadow-earth transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center text-white shadow-lg`}>
                  {theme.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {theme.title}
                </CardTitle>
                <p className="text-muted-foreground italic">
                  {theme.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {theme.subThemes.map((subTheme, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-earth-green mt-1">•</span>
                      <span>{subTheme}</span>
                    </li>
                  ))}
                </ul>
                <Badge variant="secondary" className="w-full text-center py-2">
                  📌 Impact Focus: {theme.impactFocus}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-card">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-earth-green" />
            <span className="text-xl font-semibold text-foreground">
              Ready to Drive Innovation?
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether your focus lies in AI & ML, IoT & Smart Systems, or any of our thematic tracks, your innovative solutions have the potential to transform industries and society.
          </p>
          <Button variant="earth" size="lg" className="min-w-48">
            Choose Your Theme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Themes;