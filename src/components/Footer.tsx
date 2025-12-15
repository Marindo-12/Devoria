import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Devoria</h2>
            <p className="text-sm text-muted-foreground">
              Connecting visionaries with talented developers to build the future together.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="developers" className="hover:text-primary transition-colors text-gray-500">Browse Developers</Link></li>
              <li><Link to="projects" className="hover:text-primary transition-colors text-gray-500">Explore Projects</Link></li>
              <li><Link to="communities" className="hover:text-primary transition-colors text-gray-500">Join Communities</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-card border hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-cyan-400" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-card border hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-gray-500" data-testid="link-github">
                <Github className="w-4 h-4 " />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-card border hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-blue-500" data-testid="link-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-card border hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-blue-700" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-card border hover-elevate active-elevate-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:text-pink-500" data-testid="link-instagram">
                <Instagram className="w-4 h-4 " />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Devoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
