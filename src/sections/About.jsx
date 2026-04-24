import { Code, BookOpen, Target, GitBranch } from "lucide-react";

const highlights = [
    {
        icon: Code,
        title: "Full-Stack Developer",
        description: "Building complete MERN stack applications from UI to backend."
    },
    {
        icon: BookOpen,
        title: "Continuous Learner",
        description: "Always exploring new technologies and improving my skills."
    },
    {
        icon: Target,
        title: "Detail Oriented",
        description: "Focused on clean code, performance, and great user experience."
    },
    {
        icon: GitBranch,
        title: "Clean Code Practices",
        description: "Readable, maintainable code using Git and modular design."
    },
]

export const About = () => {
    return <section id="about" className="py-32 relative "> 
                <div className="container mx-auto px-6 relative x-10 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left column */}
                        <div className="space-y-8">
                            <div className="animate-fade-in">
                                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                                Crafting modern web experiences,
                                <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                            </h2>

                            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                                <p>
                                    I’m Omar Nasif, a full-stack web developer who enjoys building modern,
                                    scalable web applications that solve real-world problems. 
                                    My primary focus is the MERN stack (MongoDB, Express.js, React, and Node.js), 
                                    where I create responsive interfaces and robust backend systems that work seamlessly together.
                                </p>
                                <p>
                                    I’m passionate about writing clean, maintainable code and designing user experiences 
                                    that are both functional and visually appealing. Whether it's building dynamic front-end components 
                                    or developing efficient APIs, I enjoy turning complex ideas into simple, effective solutions.
                                </p>
                                
                            </div>

                            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                                <p className="text-lg font-medium italic text-foreground">
                                    "Driven by curiosity and continuous learning,
                                    I constantly refine my skills to create thoughtful digital experiences 
                                    and impactful solutions."
                                </p>
                            </div>
                        </div>

                        {/* Right column - highlights */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-all">
                                        <item.icon className="w-6 h-6 text-primary"/>
                                    </div>
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>;
}