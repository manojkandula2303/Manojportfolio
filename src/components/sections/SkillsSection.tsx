import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone, Brain, GitBranch, Server, Palette, Cloud, Lock, Zap, Monitor } from "lucide-react";

const iconStyles = [
  "bg-gradient-to-br from-primary to-accent shadow-lg border-2 border-primary",
  "bg-gradient-to-tr from-secondary to-primary shadow-md border-2 border-secondary",
  "bg-gradient-to-bl from-accent to-primary shadow-xl border-2 border-accent",
  "bg-gradient-to-r from-primary to-secondary shadow-lg border-2 border-primary",
];

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'database';
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", icon: Code2, category: 'languages' },
  { name: "Java", icon: Code2, category: 'languages' },
  { name: "JavaScript", icon: Code2, category: 'languages' },
  { name: "C", icon: Code2, category: 'languages' },
  
  // Frontend Technologies
  { name: "React.js", icon: Monitor, category: 'frontend' },
  { name: "HTML5", icon: Globe, category: 'frontend' },
  { name: "CSS3", icon: Palette, category: 'frontend' },
  { name: "Bootstrap", icon: Palette, category: 'frontend' },
  
  // Backend Technologies
  { name: "App Script", icon: Code2, category: 'backend' },
  
  // Databases
  { name: "MySQL", icon: Database, category: 'database' },
  { name: "MongoDB", icon: Database, category: 'database' },
  
  // Development Tools
  { name: "Git", icon: GitBranch, category: 'tools' },
  { name: "GitHub", icon: GitBranch, category: 'tools' },
  { name: "AWS", icon: Cloud, category: 'tools' },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-slide-in>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and development tools
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const styleIdx = index % iconStyles.length;
            return (
              <Card
                key={skill.name}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 p-2 text-center transition-all duration-300 hover:scale-105"
                data-scale-in
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`p-2 rounded-lg ${iconStyles[styleIdx]} transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-5 w-5 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};