const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">O</span>
              </div>
              <span className="font-display text-lg font-bold text-background">Origin Dental</span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed">
              14+ years of trusted dental care in Jubilee Hills, Hyderabad.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Treatments", "Reviews", "FAQ", "Location"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-background/50 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/50">
              <p>Jubilee Hills, Hyderabad</p>
              <p>+91 98765 43210</p>
              <p>Mon–Sat: 9 AM – 8 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Origin Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
