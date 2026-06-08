import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/40 bg-card/30 backdrop-blur-md mt-auto">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <img src="/logo-full.png" alt="FENZO Web Design" style={{ width: "200px", height: "auto" }} />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building Digital Products That Move Businesses Forward. We craft
              premium software experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-4 text-muted-foreground mb-8">
              <li>hello@fenzo.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-16 text-center border-t text-sm font-medium text-muted-foreground border-border/40">
          <p>&copy; 2026 FENZO. All Rights Reserved. Built with passion.</p>
        </div>
      </div>
    </footer>
  );
}