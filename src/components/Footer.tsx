import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl text-foreground">SkillSpark</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting passionate learners and skilled professionals to create meaningful skill exchanges and build lasting relationships.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Heart className="h-4 w-4 text-accent" />
              <span>Made with passion for learning</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </a>
              <a href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                How It Works
              </a>
              <a href="/browse" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Browse Skills
              </a>
              <a href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Success Stories
              </a>
              <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Blog
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/help" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Help Center
              </a>
              <a href="/safety" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Safety Guidelines
              </a>
              <a href="/community" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Community Rules
              </a>
              <a href="/report" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Report Issue
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@skillspark.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 SkillSpark. All rights reserved.
          </div>
          <nav className="flex space-x-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;