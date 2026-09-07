import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, ExternalLink, Mail, Download, Code2, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const experiences = [
    {
      role: "Security Engineer",
      company: "Equifax",
      period: "June 2026 – Present",
      type: "Full-time",
      summary:
        "Role spanning threat monitoring, triage, and cloud/app/identity security, using AI-enabled tools and cross-team collaboration to strengthen enterprise security posture.",
      bullets: [
        "Engineered Python and Docker automation workflows using Palo Cortex XSOAR and Virus Total REST APIs to validate sinkhole URLs and password reset statuses, slashing false positive tickets by 65% and saving 8 hours of manual triage weekly",
        "Co-developed a real-time threat intelligence scraper with 2 engineers to aggregate hacker conference discussions across X and targeted websites via web hooks into Google Sheets, cutting early threat identification time by 40%.",
        "Triaged leaked credentials, sinkhole data, external feeds, and dark web forum tickets in Cortex XSOAR and Cybersixgill, maintaining a 98% SLA compliance rate for critical incidents.",
      ],
    },
    {
      role: "Technology Operations Intern",
      company: "Vanguard",
      period: "May 2025 - August 2025",
      type: "Internship",
      summary:
        "Conducted network security research and administration while engineering data-driven tools to support operational visibility and compliance.",
      bullets: [
        "Conducted in-depth firewall configuration research using Palo Alto Panorama and Microsoft Excel to audit and validate network objects and firewall rules, ensuring adherence to security standards and compliance requirements.",
        "Gained practical exposure to CLI-based administration of Juniper network devices using SuperPuTTY/PuTTY to apply and modify configuration settings.",
        "Engineered a Python-based PagerDuty incident analytics dashboard utilizing pandas, NumPy, Plotly, Seaborn, and Matplotlib to surface insights into duplicate incidents, service team alert patterns, and temporal trends across operational data. Acted as the sole Python developer on the team, taking full ownership of the technical implementation and delivering the critical end product that the broader team depended on to complete the project.",
      ],
    },
        {
      role: "Technical Support Agent II",
      company: "Georgia Tech",
      period: "August 2024 - May 2026",
      type: "Part-time",
      summary:
        "Gained hands-on experience in IT security operations and system administration, supporting risk management practices within an enterprise technology environment.",
      bullets: [
        "Administered Active Directory to manage user accounts, security groups, and workstations, ensuring consistent enforcement of group policy across the organisation.",
        "Leveraged ServiceNow as the primary platform for managing customer support tickets and tracking devices throughout their lifecycle.",
        "Utilised BeyondTrust to provide secure remote assistance to end users, diagnosing and resolving technical issues efficiently.",
      ],
    },
    {
      role: "Cloud Security Data Analyst Intern",
      company: "Deloitte",
      period: "June 2024 - August 2024",
      type: "Internship",
      summary:
        "Built tools spanning front-end development, security analytics, and data reporting, gaining broad hands-on technical experience.",
      bullets: [
        "Developed a functional Chrome Extension for password management, leveraging HTML, SCSS, and Figma to deliver a polished, user-friendly interface from design through implementation.",
        "Built Power BI dashboards to track and communicate cloud security metrics and container vulnerabilities, enabling teams to monitor risk exposure through clear, real-time visual reporting.",
        "Designed and executed Python scripts to extract and analyze security data from PrismaCloud and DynamoDB, delivering actionable insights into cloud security posture.",
      ],
    }
  ];

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
            <a href="#experience" className="font-medium text-foreground/70 hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#education" className="font-medium text-foreground/70 hover:text-primary transition-colors">
              Education
            </a>
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
                  Software Security Engineer
                </p>
                <p className="text-lg text-foreground/60 mt-2">
                  Engineering secure, resilient web experiences.
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
            
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Experience</h2>
            <p className="text-xl text-foreground/60">A snapshot of my engineering journey.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((job, index) => (
              <div
                key={`${job.role}-${job.period}`}
                className="relative rounded-[32px] border border-primary/10 bg-white p-8 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-full h-8 w-px bg-primary/20" aria-hidden="true" />
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {job.type}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                      <p className="text-lg text-primary/80 font-medium">{job.company}</p>
                    </div>
                  </div>

                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">
                    {job.period}
                  </div>
                </div>

                <p className="mt-6 text-foreground/70 leading-relaxed">{job.summary}</p>

                <ul className="mt-6 space-y-3 text-foreground/70">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gradient-to-b from-white/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Education & Certifications</h2>
            <p className="text-xl text-foreground/60">Academic foundation and professional credentials.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                Degree
              </div>
              <h3 className="text-3xl font-bold text-foreground">Georgia Institute of Technology</h3>
              <p className="mt-3 text-xl text-primary/80 font-medium">Bachelor of Science in Computer Science</p>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                Degree concentrations in human-computer interaction and cybersecurity. Completed minor in Spanish.
              </p>
            </div>

            <div className="rounded-[32px] border border-primary/10 bg-white p-8 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                Certifications
              </div>
              <div className="space-y-5">
                <div>
                  <h4 className="text-xl font-bold text-foreground">AWS Certified Cloud Practitioner</h4>
                  <p className="text-foreground/60">Amazon Web Services</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">CompTIA Security+</h4>
                  <p className="text-foreground/60">CompTIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-foreground/60">Building cool stuff, one commit at a time.</p>
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
            <p className="text-xl text-foreground/60">Tools I use to bring ideas to life.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Wiz", level: 95 },
              { name: "Palo Alto Cortex XSOAR", level: 90 },
              { name: "VirusTotal", level: 95 },
              { name: "Node.js", level: 85 },
              { name: "Python", level: 80 },
              { name: "Cybersixgill", level: 75 },
              { name: "Palo Alto Panorama", level: 80 },
              { name: "Splunk", level: 70 },
              { name: "Procmon", level: 90 },
              { name: "Qualys", level: 85 },
              { name: "Wireshark", level: 95 },
              { name: "Postman", level: 90 },
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
            <p className="text-xl text-foreground/60">Sharing knowledge and learning in public.</p>
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
