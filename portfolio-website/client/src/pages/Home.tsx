/**
 * 
 * Design: Soft pink (#F5A8C7), cream background (#FFF8F0), rounded organic shapes
 * Run locally: cd portfolio-website
pnpm install
pnpm dev
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, ExternalLink, Mail, Download, Code2, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Chelsea.</div>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="font-medium text-foreground/70 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="font-medium text-foreground/70 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#blog" className="font-medium text-foreground/70 hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="font-medium text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Soft and dreamy */}
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
              <Heart className="w-4 h-4 fill-current" />
              Available for opportunities
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold text-primary leading-tight">
              Chelsea's Portfolio.
            </h1>
            
            <div className="relative inline-block">
              <div className="bg-primary/20 rounded-[40px] px-12 py-8 backdrop-blur-sm">
                <p className="text-2xl text-foreground/80 font-medium">
                  Georgia Tech Computer Science Student
                </p>
                <p className="text-lg text-foreground/60 mt-2">
                  Building beautiful, functional web experiences.
                </p>
              </div>
              <Heart className="absolute -top-3 -right-3 w-8 h-8 text-primary fill-current animate-pulse" />
            </div>
            
            <div className="flex gap-4 justify-center pt-8">
              <a
                href="https://github.com/chelseaadrienne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chelsea-adrienne-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all border-2 border-primary/20"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/chelseaadrienne/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all border-2 border-primary/20"
              >
                <Code2 className="w-5 h-5" />
                LeetCode
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center pt-8">
              {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "TailwindCSS", "Figma", "PowerBI"].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-2 bg-white rounded-full font-medium text-foreground/70 shadow-sm hover:shadow-md hover:scale-105 transition-all border border-primary/10"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-foreground/60">Building cool stuff, one commit at a time</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Curl Collective",
                description: "Curly hair care app that creates custom routines based on your unique curl pattern, porosity, and hair goals.",
                image: "/images/thecurlcollective.png",
                tags: ["React Native", "TailwindCSS", "Typescript", "Expo", "tRPC", "Figma"],
                demo: "https://www.figma.com/proto/GxTZSsOlvLGLXdBTIYZJA0/The-Curl-Collective?node-id=12-1769&starting-point-node-id=12%3A1769&t=x1qiNPh5OBDK44hx-1",
                repo: "#",
              },
              {
                title: "ATL Food Finder",
                description: "Discover Atlanta's best dining spots with a simple search.",
                image: "/images/atl_food_finder.png",
                tags: ["Django", "Python", "CSS", "HTML", "JavaScript", "Yelp API", "Google Maps API"],
                demo: "#",
                repo: "#",
              },
              {
                title: "CareerBridge",
                description: "Helping career changers identify and articulate transferable skills they didn't know they had.",
                image: "/images/careerbridge.png",
                tags: ["Next.js", "Framer Motion", "Tailwind"],
                demo: "#",
                repo: "#",
              },
              {
                title: "US Customer Purchase Behaviour",
                description: "Tracks seasonal shopping trends and discount effectiveness to understand what drives customer spending, while monitoring satisfaction through review ratings.",
                image: "/images/power_bi_customer.png",
                tags: ["PowerBI", "DAX Formulas", "Kaggle"],
                demo: "#",
                repo: "#",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all bg-white rounded-3xl border-0"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-foreground/60">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-full hover:scale-105 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.repo}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary font-medium rounded-full hover:scale-105 transition-all border-2 border-primary/20"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-background to-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Tech Stack</h2>
            <p className="text-xl text-foreground/60">Tools I use to bring ideas to life</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", level: 95 },
              { name: "TypeScript", level: 90 },
              { name: "React", level: 95 },
              { name: "Node.js", level: 85 },
              { name: "Python", level: 80 },
              { name: "PostgreSQL", level: 75 },
              { name: "MongoDB", level: 80 },
              { name: "Docker", level: 70 },
              { name: "Git", level: 90 },
              { name: "Figma", level: 85 },
              { name: "Tailwind CSS", level: 95 },
              { name: "REST APIs", level: 90 },
            ].map((skill) => (
              <div key={skill.name} className="bg-white rounded-3xl p-6 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all border border-primary/10">
                <div className="text-xl font-bold text-foreground mb-3">{skill.name}</div>
                <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-sm font-medium text-primary mt-2">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Technical Writing</h2>
            <p className="text-xl text-foreground/60">Sharing knowledge and learning in public</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Accessibility Audit - Apple Music (Web Version)",
                date: "Nov 2025",
                excerpt: "Accessibility audit improving Apple Music's web player experience.",
                readTime: "12 min read",
                url: "https://docs.google.com/document/d/e/2PACX-1vQRX4ex8XmXM4zVw6senYLCrhg6EU3f8yn-e4j18a34bqxDxFnQMwVw5ln22KoXgfqfY2OkFxUpWeIf/pub", 
              },
              {
                title: "Khan Academy Redesign",
                date: "April 2025",
                excerpt: "Accessible learning platform redesign for low-income K-12 children.",
                readTime: "5 min read",
                url: "https://sincere-ping-bd6.notion.site/Khan-Academy-Redesigned-1e4238dc2b6080058698fb0a99790f45?source=copy_link",
              },
              {
                title: "CollegeSHARC",
                date: "April 2025",
                excerpt: "College application navigator for first-generation students.",
                readTime: "3 min read",
                url: "https://sincere-ping-bd6.notion.site/CollegeSHARK-1e4238dc2b6080719e07e00e4551ab85?source=copy_link",
              },
            ].map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                target={post.url !== "#" ? "_blank" : undefined}
                rel={post.url !== "#" ? "noopener noreferrer" : undefined}
                className="block bg-white rounded-3xl p-8 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all border border-primary/10 group"
              >
                <div className="text-sm font-medium text-primary mb-3">{post.date} · {post.readTime}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/60">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Let's Build Something</h2>
              <p className="text-foreground/70 text-lg mb-8">
                Always open to new opportunities, collaborations, and interesting projects. Drop me a message!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:cadmanning@gmail.com"
                  className="inline-flex items-center gap-3 text-lg text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  cadmanning@gmail.com
                </a>
                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="p-4 bg-white text-primary rounded-full hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all border border-primary/20"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-white text-primary rounded-full hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all border border-primary/20"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-2 border-primary/20 bg-white rounded-2xl focus:border-primary focus:ring-primary/20"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 border-primary/20 bg-white rounded-2xl focus:border-primary focus:ring-primary/20"
                required
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-2 border-primary/20 bg-white rounded-2xl focus:border-primary focus:ring-primary/20 min-h-32"
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-lg py-6 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50">© 2026 Chelsea. Built with React & TailwindCSS.</p>
            <a
              href="https://drive.google.com/file/d/1z8ZQ7o88Jqd04ojwHieC7QB6lfNpXwnW/view?usp=sharing"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all border-2 border-primary/20"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
