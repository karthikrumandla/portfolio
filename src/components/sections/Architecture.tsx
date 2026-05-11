'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lock, Database, Cloud, GitBranch, ShieldCheck, 
  ArrowRight, Server, Globe, Key, Layers
} from 'lucide-react';

const architectureTopics = [
  {
    title: 'Authentication Architecture',
    description: 'Enterprise-grade JWT implementation with refresh token rotation and secure cookie strategy',
    icon: Lock,
    items: [
      'Access token + Refresh token flow',
      'JWT payload optimization',
      'Token expiration handling',
      'Secure HTTP-only cookies',
      'Refresh token rotation',
      'Multi-device session management'
    ]
  },
  {
    title: 'RBAC Authorization System',
    description: 'Granular permission management with role-based access control and API guards',
    icon: ShieldCheck,
    items: [
      'Role hierarchy design',
      'Permission matrix implementation',
      'Route-level guards',
      'API middleware authorization',
      'Resource ownership validation',
      'Audit logging for permissions'
    ]
  },
  {
    title: 'Scalable MERN Architecture',
    description: 'Production-ready folder structure with service layer, repository pattern, and modular design',
    icon: Layers,
    items: [
      'Controller → Service → Repository',
      'Middleware chain implementation',
      'Request validation strategy',
      'Error handling standardization',
      'Database connection pooling',
      'API versioning strategy'
    ]
  },
  {
    title: 'Cloud Infrastructure',
    description: 'AWS-native deployment with Lambda, S3, CloudFront, and CI/CD pipeline automation',
    icon: Cloud,
    items: [
      'Serverless Lambda functions',
      'S3 + CloudFront CDN setup',
      'API Gateway configuration',
      'Environment variable management',
      'Auto-scaling policies',
      'Cost optimization strategies'
    ]
  }
];

const flowSteps = [
  { icon: Server, label: 'Client Request', desc: 'React app sends authenticated request' },
  { icon: Globe, label: 'API Gateway', desc: 'AWS API Gateway routes to Lambda' },
  { icon: Lock, label: 'Auth Middleware', desc: 'JWT validation & RBAC check' },
  { icon: Database, label: 'Data Layer', desc: 'MongoDB with optimized queries' },
  { icon: Cloud, label: 'Response', desc: 'Cached & compressed response' }
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">System Design & Engineering</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade architectural patterns for scalability, security, and maintainability
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl bg-card border border-border/50"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Request Flow Architecture
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50 border border-border/50 w-36">
                  <step.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-medium text-sm">{step.label}</p>
                  <p className="text-xs text-muted-foreground text-center mt-1">{step.desc}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {architectureTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 card-hover bg-card/50 backdrop-blur border-border/50 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <topic.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {topic.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border border-primary/20"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Security Best Practices</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'JWT Security', desc: 'Short-lived access tokens, secure refresh' },
              { label: 'Input Validation', desc: 'Zod schema validation on all endpoints' },
              { label: 'Rate Limiting', desc: 'API Gateway throttling & DDoS protection' },
              { label: 'Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' }
            ].map((item) => (
              <div key={item.label} className="text-center p-4 rounded-lg bg-card/50">
                <Key className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-sm mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}