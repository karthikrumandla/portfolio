'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/resume';
import { Building2, MapPin, Calendar, Award } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            9+ years of building enterprise solutions across insurance, communication, and SaaS platforms
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-primary/50" />
          
          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: expIndex * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background glow-primary" />
                
                <Card className="p-6 card-hover bg-card/50 backdrop-blur">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.role}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{exp.description}</p>
                  
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={project.title} className="border-t border-border/50 pt-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}