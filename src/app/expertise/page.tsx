import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/layout/Container";
import { ContactCTA } from "@/components/conversion/ContactCTA";

export const metadata = createMetadata({
  title: "Expertise",
  description: "Pratikar expertise spans incident response, malware analysis, identity security, data security, insider threats and cloud application security.",
  path: "/expertise/",
});

const expertiseMatrix = [
  {
    category: "Incident Response",
    items: ["security incident investigation", "breach analysis", "compromise assessment", "containment planning", "recovery guidance"],
  },
  {
    category: "Malware & Web Security",
    items: ["malicious code analysis", "compromised website investigation", "persistence analysis", "web attack investigation", "indicators of compromise"],
  },
  {
    category: "Identity & Access",
    items: ["suspicious authentication", "account compromise", "privilege abuse", "access-control weaknesses", "identity attack investigation"],
  },
  {
    category: "Data Security",
    items: ["sensitive-data exposure", "access-path analysis", "data-flow review", "privacy-oriented security architecture"],
  },
  {
    category: "Insider Threats",
    items: ["behavioural signals", "privilege misuse", "anomalous activity", "insider-risk investigation", "evidence correlation"],
  },
  {
    category: "Cloud & Application Security",
    items: ["cloud security architecture", "application attack surfaces", "IAM", "logging and monitoring", "security control design"],
  },
];

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Technical depth across investigation domains"
        description="Security incidents cross boundaries. Investigation requires connecting signals across applications, infrastructure, identities and behaviour."
      />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {expertiseMatrix.map((group) => (
              <div key={group.category}>
                <h2 className="text-lg font-semibold text-text-primary mb-4">{group.category}</h2>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex gap-2">
                      <span className="text-accent shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA
        title="Need this expertise?"
        description="Whether you need a security review or an active investigation, start in the portal so context and evidence stay in one place."
      />
    </>
  );
}
