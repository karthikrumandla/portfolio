'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo } from '@/data/resume';
import { Mail, Heart, ArrowUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from '@/components/icons';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Karthik.dev</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Senior Full Stack Engineer specializing in scalable MERN applications, cloud-native systems, and enterprise solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Experience', 'Projects', 'Skills', 'Architecture', 'Blog', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p className="flex items-center gap-1"><MapPin className="w-4 h-4" />{personalInfo.location}</p>
            </div>
            <a 
              href={personalInfo.resume} 
              download
              className="inline-flex items-center justify-center mt-4 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors gap-2"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built by Karthik with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            className="inline-flex items-center justify-center mt-2 md:mt-0 px-3 py-1.5 text-sm hover:bg-muted rounded-lg transition-colors gap-1"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="w-4 h-4 mr-2" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}