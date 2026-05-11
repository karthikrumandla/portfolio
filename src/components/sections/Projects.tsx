'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/resume';
import { Github } from '@/components/icons';
import { 
  Layers, Database, Cloud, Code2, Shield, Zap, 
  ArrowRight, ExternalLink, ChevronDown, ChevronUp,
  Monitor, Server, Globe, Lock
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'monitor': Monitor,
  'server': Server,
  'database': Database,
  'cloud': Cloud,
  'code': Code2,
  'shield': Shield,
  'zap': Zap,
  'globe': Globe,
  'layers': Layers,
  'lock': Lock,
};

function FilterButton({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
        active 
          ? 'bg-primary text-primary-foreground' 
          : 'border border-border hover:bg-muted'
      }`}
    >
      {children}
    </button>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade solutions with scalable architecture, security, and real-world impact
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 card-hover bg-card/50 backdrop-blur border-border/50 cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-primary">{project.subtitle}</p>
                    </div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-3 rounded-lg bg-muted/50">
                        <div className="text-lg font-bold gradient-text">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProject && currentProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                    <p className="text-primary">{currentProject.subtitle}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted transition-colors"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-primary" />
                      Architecture Overview
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Frontend</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.architecture.frontend.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Backend</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.architecture.backend.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Database</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.architecture.database.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Cloud</p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.architecture.cloud.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    
                    <div className="space-y-3">
                      {currentProject.features.map((feature) => {
                        const Icon = iconMap[feature.icon] || Layers;
                        return (
                          <div key={feature.title} className="p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="w-4 h-4 text-primary" />
                              <p className="font-medium text-sm">{feature.title}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentProject.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors">
                    <Github className="w-4 h-4" /> View Code
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}