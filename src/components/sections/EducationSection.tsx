import React, { useRef, useEffect, useState } from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import sscCertificate from "@/assets/ssc.jpg";
import interCertificate from "@/assets/inter.png";

const certificatesData = [
  {
    id: "mbu",
    title: "Mohan Babu University Certificate",
    image: "/placeholder.svg",
    details: "Bachelor of Technology - Computer Science and Engineering, 2022-2026."
  },
  {
    id: "narayana",
    title: "Narayana Junior College Certificate",
    image: interCertificate,
    details: "Board of Intermediate Education - MPC, 2020-2022."
  },
  {
    id: "chaithanya",
    title: "Sri Chaithanya Techno School Certificate",
    image: sscCertificate,
    details: "Board of Secondary Education - Science, 2019-2020."
  }
];

const educationData = [
  {
    institution: "Mohan Babu University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "2022 – 2026",
    icon: <GraduationCap className="w-8 h-8 text-primary" />
  },
  {
    institution: "Narayana Junior College",
    degree: "Board of Intermediate Education - MPC",
    period: "2020 – 2022",
    icon: <BookOpen className="w-8 h-8 text-secondary" />
  },
  {
    institution: "Sri Chaithanya Techno School",
    degree: "Board of Secondary Education - Science",
    period: "2019 – 2020",
    icon: <School className="w-8 h-8 text-accent" />
  }
];

const useScrollReveal = (count: number) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState(Array(count).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, [count]);

  return { refs, visible };
};

export const EducationSection = () => {
  const { refs, visible } = useScrollReveal(educationData.length);
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey, visualized in a modern and minimal style
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              ref={el => refs.current[idx] = el}
              className={`relative flex flex-col items-center group transition-transform duration-500 hover:scale-105 cursor-pointer
                ${visible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
              `}
              style={{ transitionDelay: `${idx * 0.15 + 0.2}s` }}
              onClick={() => setOpenId(certificatesData[idx].id)}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-primary shadow-lg mb-4 animate-pulse">
                {edu.icon}
              </div>
              <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6 shadow-xl w-64 text-center">
                <h3 className="font-semibold text-primary text-xl mb-1">{edu.institution}</h3>
                <p className="text-foreground font-medium mb-1">{edu.degree}</p>
                <p className="text-muted-foreground text-sm mb-2">{edu.period}</p>
              </div>
              {idx < educationData.length - 1 && (
                <div className="hidden md:block absolute right-[-64px] top-1/2 transform -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-primary/40 to-accent/40" />
              )}
              {idx < educationData.length - 1 && (
                <div className="block md:hidden w-1 h-12 bg-gradient-to-b from-primary/40 to-accent/40 mt-4" />
              )}
              <Dialog open={openId === certificatesData[idx].id} onOpenChange={open => setOpenId(open ? certificatesData[idx].id : null)}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <img 
                      src={certificatesData[idx].image} 
                      alt={certificatesData[idx].title} 
                      className="w-full max-w-xl object-contain rounded-xl mx-auto mb-6 shadow-xl" 
                    />
                    <h3 className="text-2xl font-bold text-primary mb-2 text-center">{certificatesData[idx].title}</h3>
                  </DialogHeader>
                  <p className="text-base text-foreground text-center">{certificatesData[idx].details}</p>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};