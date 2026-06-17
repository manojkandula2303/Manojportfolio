import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/TypingEffect";
import profileImage from "@/assets/profile.jpg";
import { ArrowDown, FileText } from "lucide-react"; // removed unused Mail

export const HeroSection = () => {
  const typingWords = [
    "Computer Science Student",
    "AI & IoT Developer",
    "Full-Stack Developer",
    "Innovation Ambassador",
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8" data-slide-in>
            <div className="space-y-4">
              <h1
                className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                data-scale-in
              >
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Kandula Manoj Kumar
                </span>
              </h1>

              <div className="text-xl lg:text-2xl text-muted-foreground min-h-[3rem]">
                <TypingEffect words={typingWords} className="font-medium" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Computer Science Engineering student at Mohan Babu University,
              passionate about AI, IoT, and innovative technologies. Experienced
              in developing AI-driven solutions and web applications, with
              achievements in hackathons and freelancing projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default" // replaced hero with valid variant
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="hero-glow"
              >
                <FileText className="mr-2" />
                View Projects
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="/Manoj_Kumar_CV.docx" download="Manoj_Kumar_CV.docx">
                  <FileText className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={profileImage}
                alt="Kandula Manoj Kumar - Computer Science Student"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lift transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full hover:bg-primary/10"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </section>
  );
};
