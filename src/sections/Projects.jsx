import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Wanderlust Travel Planner",
        description: "A full-stack travel planning app built with the MERN stack, allowing users to create itineraries, discover destinations, and share travel experiences.",
        image: "/projects/WanderLust.png",
        tags : ["MongoDB", "Express.js", "React", "Node.js"],
        link: "https://wanderlust-ni5g.onrender.com/listings",
        github: "https://github.com/OmarNasif14/Wanderlust",
    },
    {
        title: "Spotify Clone",
        description: "A Front-end music streaming app , allowing users to discover their favorite songs.",
        image: "/projects/SpotifyClone.png",
        tags : ["React"],
        link: "#",
        github: "#",
    },
]


export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative " >
            {/* Bg Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />     
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16 overflow-hidden">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Where code meets
                        <span className="font-serif italic font-normal text-white"> meaningful impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Explore a selection of my recent projects, 
                        each project highlights responsive interfaces, 
                        robust backend systems, and thoughtful user experiences.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) =>(
                        <div key={index} className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video ">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                                {/* Overlay links */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all border-none" >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all border-none" >
                                        <Github className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>
                            {/* content */}
                            <div className="p-6 space-y-4 ">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 
                                    text-muted-foreground group-hover:text-primary
                                    group-hover:translate-x-1 
                                    group-hover:-translate-y-1 transition-all"
                                    /> 
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx)=>(
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                    {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton>
                            View All Projects
                             <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </div> */}
            </div>
        </section>
    );
}