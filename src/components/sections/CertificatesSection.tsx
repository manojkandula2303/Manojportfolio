import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import tcsIonCert from "@/assets/tcs-ion.png";
import simpliLearnCert from "@/assets/simplilearn-frontend.jpg";
import infosysJavaCert from "@/assets/infosys-java.jpg";
import greatLearningHtmlCert from "@/assets/great-learning-html.jpg";
import awsCloudCert from "@/assets/aws-cloud-practitioner.jpg";
import innovationAmbassadorCert from "@/assets/Innovation Ambassador – Advanced Level.png";
import roadmapCertificate from "@/assets/AI Engineer Skill Certification – One Roadmap.png";
import awsCertificate from "@/assets/AWS Solutions Architecture Job Simulation – Forage.png";

const certificatesData = [
  {
    id: "ai-engineer-cert",
    title: "AI Engineer Skill Certification – One Roadmap",
    image: roadmapCertificate,
    details: "Achieved certification for successfully passing the One Roadmap Skill Certification Test in AI Engineering, June 2025."
  },
  {
    id: "aws-solutions-architecture-simulation",
    title: "AWS Solutions Architecture Job Simulation – Forage",
    image: awsCertificate,
    details: "Completed practical tasks in designing a simple, scalable hosting architecture during the AWS Solutions Architecture Job Simulation, December 2024."
  },
  {
    id: "innovation-ambassador",
    title: "Innovation Ambassador – Advanced Level",
    image: innovationAmbassadorCert,
    details: "Successfully completed 16 sessions (30 contact hours) of Innovation Ambassador Advanced Level training under MoE’s Innovation Cell & AICTE for the year 2024–25."
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner Essentials",
    image: awsCloudCert,
    details: "Successfully completed AWS Cloud Practitioner Essentials training from AWS Training and Certification. Completed on May 20, 2024, demonstrating fundamental understanding of AWS Cloud concepts, services, and architecture."
  },
  {
    id: "great-learning-html",
    title: "Front End Development - HTML",
    image: greatLearningHtmlCert,
    details: "Successfully completed the free online course on Front End Development - HTML from Great Learning Academy. Completed in July 2024, demonstrating proficiency in HTML fundamentals and front-end development concepts."
  },
  {
    id: "infosys-java",
    title: "Java Foundation Certification",
    image: infosysJavaCert,
    details: "Successfully completed Java Foundation Certification from Infosys Springboard. Issued on June 1, 2024 by Infosys Limited under the leadership of Thirumala Arohi, Executive Vice President and Global Head of Education, Training & Assessment (ETA)."
  },
  {
    id: "simplilearn-frontend",
    title: "Introduction to Front End Development",
    image: simpliLearnCert,
    details: "Successfully completed the online course on Introduction to Front End Development from Simplilearn. Certificate Code: 6754636. Completed on June 16th, 2024."
  },
  {
    id: "tcs-ion",
    title: "TCS iON Career Edge - Young Professional",
    image: tcsIonCert,
    details: "Successfully completed comprehensive training covering Communication Skills, Soft Skills, Career Guidance, Resume Writing, Business Etiquette, and IT Foundational Skills. Duration: Aug 4, 2024 - Aug 25, 2024"
  }
];

export const CertificatesSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-slide-in>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my academic certifications
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {certificatesData.map(cert => (
            <Dialog key={cert.id} open={openId === cert.id} onOpenChange={open => setOpenId(open ? cert.id : null)}>
              <DialogTrigger asChild>
                <Card 
                  className="cursor-pointer group hover:scale-105 transition-all duration-300 shadow-lg bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
                  data-rotate-in
                  style={{ animationDelay: `${parseInt(cert.id) * 0.2}s` }}
                >
                  <CardHeader className="flex flex-col items-center">
                    <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain rounded-xl mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:rotate-3" />
                    <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors duration-300">{cert.title}</CardTitle>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <img src={cert.image} alt={cert.title} className="w-full max-w-xl h-auto object-contain rounded-xl mx-auto mb-6 shadow-xl" />
                  <h3 className="text-2xl font-bold text-primary mb-2 text-center">{cert.title}</h3>
                </DialogHeader>
                <CardContent>
                  <p className="text-base text-foreground text-center">{cert.details}</p>
                </CardContent>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}