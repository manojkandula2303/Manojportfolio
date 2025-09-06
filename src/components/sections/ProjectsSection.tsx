import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "@/components/ProjectModal";
import { ExternalLink, Github } from "lucide-react";
import weatherImage from "@/assets/windowview.png";
import dsaImage from "@/assets/DSA.png";
import platefinderImage from "@/assets/platefinder.png";
import biogasImage from "@/assets/biogas.png";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  features: string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "DSA Learning Platform",
    description: "A comprehensive platform for practicing Data Structures and Algorithms with progress tracking and difficulty levels.",
    longDescription: "Built a responsive web application for DSA practice featuring filters, progress tracking, notes, and multiple difficulty levels. The platform includes over 100 curated problems with real-time status tracking.",
    image: dsaImage,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    features: [
      "100+ curated DSA problems",
      "Real-time progress tracking",
      "Multiple difficulty levels",
      "Interactive problem filters",
      "Personal notes feature"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    liveUrl: "https://dsawithmanoj.vercel.app/",
    githubUrl: "https://github.com/manojkandula2303/DSA.git"
  },
  {
    id: "2",
    title: "Smart Biogas Monitoring",
    description: "IoT system for monitoring biogas digesters using sensors and ML-powered predictions.",
    longDescription: "Developed an IoT system to monitor temperature, pH, and methane levels in biogas digesters using sensors and camera technology. Features a real-time dashboard with logging, charts, and ML-based gas production prediction.",
    image: biogasImage,
    tags: ["Python", "IoT", "Machine Learning", "Flask"],
    features: [
      "Real-time monitoring dashboard",
      "ML-powered production prediction",
      "Temperature and pH tracking",
      "Automated data logging",
      "Interactive charts"
    ],
    techStack: ["Python", "Flask", "SQLite", "Raspberry Pi", "Machine Learning"],
    githubUrl: "https://github.com/manojkandula2303/Smart-Waste-Management.git"
  },
  {
    id: "3",
    title: "FindThePlate",
    description: "OCR-based license plate detection web application with Google Drive integration.",
    longDescription: "Implemented an OCR-based web application for automatic license plate detection with preprocessing capabilities. Features secure storage using Google Drive API and a responsive upload interface.",
    image: platefinderImage,
    tags: ["Python", "Flask", "OCR", "Google API"],
    features: [
      "Automatic license plate detection",
      "Image preprocessing",
      "Secure Google Drive storage",
      "Responsive upload interface"
    ],
    techStack: ["Python", "Flask", "Tesseract OCR", "Google Drive API"],
    liveUrl: "https://findtheplate.onrender.com/",
    githubUrl: "https://github.com/manojkandula2303/findtheplate.git"
  },
  {
    id: "4",
    title: "Weather Forecast",
    description: "A responsive web application that provides real-time weather data and forecasts for any location.",
    longDescription: "Built a modern weather dashboard that fetches live weather information using the OpenWeatherMap API. Users can search by city or use geolocation to view current conditions, hourly forecasts, and 5-day forecasts. The app features unit conversion (°C/°F), interactive icons, and a mobile-friendly UI with glassmorphism design.",
    image: weatherImage,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    features: [
      "Real-time weather data",
      "Hourly and 5-day forecasts",
      "City search and geolocation support",
      "Unit conversion between Celsius and Fahrenheit",
      "Clean and responsive UI"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Leaflet.js", "Moment.js"],
    liveUrl: "https://hncgzt.csb.app/",
    githubUrl: "https://github.com/manojkandula2303/weather-forecast"
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-slide-in>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, AI integration, and full-stack applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Card
              data-scale-in
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardHeader className="p-4">
                <div 
                  className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden cursor-pointer group/image"
                  onClick={() => handleProjectClick(project)}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                  />
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.liveUrl && (
                    <Button variant="hero" size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="hero-outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};