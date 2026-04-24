import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    //{href: "#testimonials", label: "Testimonials"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    

    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    },[])

    return (
        <header 
            className= {`fixed top-0 left-0 right-0 transition-all duration-500 border-none ${
            isScrolled ? "glass-strong py-3" : "bg-transparent py-5" 
            } z-50` }>
            <nav className="container mx-auto px-6 flex items-center justify-between z-50">
                <a href="#hero" className="text-xl font-bold tracking-tight hover:text-primary hover:transition-colors duration-300">
                    OM<span className="text-primary" onClick={()=>setIsMobileMenuOpen(false)}>.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="glass rounded-full px-3 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface hover:transition-colors duration-300 ">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/* CTA button */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <Button size = "sm"  >
                            Contact Me
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer z-40" onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
                <div className = "container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2" onClick={()=>setIsMobileMenuOpen(false)}>
                                {link.label}
                            </a>
                        ))}

                        <a href="#contact">
                            <Button onClick={()=>setIsMobileMenuOpen(false)} >
                                Contact Me
                            </Button>
                        </a>
                </div>
            </div>)}
        </header>
    );
}