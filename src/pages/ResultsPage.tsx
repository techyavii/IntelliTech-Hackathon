import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

//changes done here
const feedbackVideos = [
  {
    team: "GenZPT",
    description: "Winning team feedback on their challenge journey.",
    link: "https://drive.google.com/file/d/1fnFtUYYKTNjHFKwiOi6lqAUXs2kxAN4F/view",
  },
  {
    team: "Hackaholics",
    description: "Winning team feedback on their challenge journey.",
    link: "https://drive.google.com/file/d/1pxYv9YK41K6uKL5iwjcY7bm5Mk0m5gMT/view",
  },
  {
    team: "Terminal Coders",
    description: "Winning team feedback on their challenge journey.",
    link: "https://drive.google.com/file/d/1yBovUQCQGerZnxw6djnFOx5IP1v3wrKW/view",
  },
];

const ResultsPage = () => {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl font-bold text-foreground">
            IntelliTech Hackathon: Engineering Smart Solutions 🚀
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Official results and feedback from our winning teams.
          </p>

          {/* Results Button */}
          <div className="mt-10">
            <a
              href="https://drive.google.com/file/d/1aDVCyD5qChA-LVxd3SK6z97njsh5lrZ6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition"
            >
              📄 See Results (PDF)
            </a>
          </div>

          {/* <section className="mt-20">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              🎥 Feedback from Winning Teams
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {feedbackVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-left"
                >
                  <div className="h-40 bg-secondary rounded-xl flex items-center justify-center text-5xl group-hover:scale-105 transition">
                    ▶️
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {video.team}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {video.description}
                  </p>

                  <span className="inline-block mt-4 text-accent font-medium">
                    Watch Video →
                  </span>
                </a>
              ))}
            </div>
          </section> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResultsPage;
