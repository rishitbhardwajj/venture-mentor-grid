import { Link } from "@tanstack/react-router";
import { GraduationCap, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl btn-gradient grid place-items-center">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg">MentorConnect</span>
          </div>
          <p className="mt-4 text-sm text-secondary-foreground/70">
            Connecting Students with Industry Leaders to Build Future Careers.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/mentors" className="hover:text-primary">Find Mentors</Link></li>
            <li><Link to="/roadmaps" className="hover:text-primary">Career Roadmaps</Link></li>
            <li><Link to="/events" className="hover:text-primary">Events</Link></li>
            <li><Link to="/communities" className="hover:text-primary">Communities</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><a href="#" className="hover:text-primary">FAQs</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary">Terms</a></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-secondary-foreground/70 mb-3">
            Get mentorship tips and event updates in your inbox.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="you@example.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="btn-gradient border-0">Join</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-secondary-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} MentorConnect. All rights reserved.</p>
          <p>Built with ♥ for learners everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
