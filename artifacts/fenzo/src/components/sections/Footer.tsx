import { FaInstagram, FaWhatsapp } from "react-icons/fa";
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
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Blog
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
              <li>info.fenzo@gmail.com</li>
              <li>+91 63832213966</li>
              <li>Katpadi, Vellore, Tamil Nadu, India</li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fenzo_webdesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6383213966"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
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