'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/resume';
import { 
  Monitor, Server, Database, Cloud, Shield, Wrench,
  Code2, Terminal, GitBranch, Container, Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'monitor': Monitor,
  'server': Server,
  'database': Database,
  'cloud': Cloud,
  'shield': Shield,
  'wrench': Wrench,
  'code': Code2,
  'terminal': Terminal,
  'git-branch': GitBranch,
  'container': Container,
  'layers': Layers,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern web technologies, cloud infrastructure, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Layers;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 card-hover bg-card/50 backdrop-blur border-border/50 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge 
                        key={item} 
                        variant="secondary"
                        className="px-3 py-1 text-sm"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border border-border/50"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-muted-foreground">REST API Endpoints Built</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-muted-foreground">React Components Libraries</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100K+</div>
              <p className="text-muted-foreground">Daily Active Users Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}