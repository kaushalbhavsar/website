import Link from "next/link";
import { siteConfig, footerExpertise, footerResources, footerTraining, footerExternal } from "@/lib/site";
import { portal } from "@/lib/portal";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <Link href="/" className="font-mono text-sm font-semibold tracking-[0.2em] text-text-primary">
              PRATIKAR
            </Link>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
              Expertise
            </h3>
            <ul className="space-y-2">
              {footerExpertise.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
              Training
            </h3>
            <ul className="space-y-2">
              {footerTraining.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerResources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {footerExternal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.description && (
                    <p className="text-xs text-text-muted mt-0.5">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">
              Portal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={portal.assessment}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Start incident assessment
                </a>
              </li>
              <li>
                <a
                  href={portal.auth}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Sign in to a case
                </a>
              </li>
              <li>
                <a
                  href={portal.origin}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Incident Response Portal
                </a>
              </li>
              <li>
                <Link
                  href="/training/register-interest/"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Training interest
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-text-muted">
              Based in {siteConfig.location.country}. Remote technical engagements worldwide.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Terms
            </Link>
            <Link href="/security/" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Responsible Disclosure
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
