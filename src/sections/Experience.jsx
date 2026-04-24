const experiences = [
  {
    period: "2025 — Present",
    role: "Full-Stack Developer",
    company: "Independent Projects",
    description:
      "Developing full-stack web applications using the MERN stack. Focused on building scalable backend APIs, responsive frontend interfaces, and deploying applications to cloud platforms.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    current: true,
  },
  {
    period: "2025",
    role: "Full-Stack Developer Intern",
    company: "Euphoria GenX ",
    description:
      "Worked on real-world web applications by implementing responsive UI components and RESTful APIs. Collaborated with developers using Git and improved application performance and usability.",
    technologies: ["React", "JavaScript", "Node.js", "Git", "REST APIs"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "MERN Stack Developer",
    company: "Personal Projects",
    description:
      "Built multiple full-stack applications including a travel planning platform and a Spotify-inspired music UI. Implemented authentication, CRUD functionality, and responsive designs.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    current: false,
  },
  {
    period: "2023 — 2024",
    role: "Web Development Learner",
    company: "Self-Learning",
    description:
      "Focused on mastering modern web development fundamentals including JavaScript, responsive design, version control, and backend development concepts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    current: false,
  },
];

export const Experience = () => {
    return <section id="experience" className="py-32 relative overflow-hidden ">
        <div
        className="absolute top-1/2 left-1/2 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      />

        <div className="container px-6 mx-auto relative z-10">
          {/* Section header */}
          <div className="max-w-3xl mb-16 ">
            <span
              className="text-secondary-foreground text-sm font-medium
              tracking-wider uppercase animate-fade-in"
            > 
              Career Journey</span>
            <h2
              className="text-4xl md:text-5xl font-bold
              mt-4 mb-6 animate-fade-in animation-delay-100
              text-secondary-foreground"
              >
              Experience that <span className="font-serif italic font-normal text-white">delivers results.</span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Building modern web applications with a focus on performance, scalability, and user experience.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] animate-fade-in "/>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div  key={index} 
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                  style={{animationDelay: `${(index + 1) * 100}ms`}}
                >

                  {/* Pulse */}
                  <div className=" absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 md:-translate-x-1 ring-4 ring-background z-10">
                  {exp.current && <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 ${ index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                      <span className="text-sm text-primay font-medium">{exp.period}</span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${ index % 2 === 0 ? "md:justify-end" : "" }`}>
                        {exp.technologies.map((tech, techIdx) => (
                          <span 
                            key={techIdx} 
                            className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>;
}