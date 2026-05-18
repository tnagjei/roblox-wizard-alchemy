// input: `/privacy/` route request
// output: template privacy policy page
// pos: privacy route

import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteData.site.name}`,
  description: `Privacy policy placeholder for ${siteData.site.name}. Replace with production privacy terms before deployment.`,
  alternates: {
    canonical: absoluteUrl("/privacy/")
  }
};

export default function PrivacyPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p className="lede">
            This is a template privacy page. Replace it with the final policy for each production site before deployment.
          </p>
        </div>
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Data collection</h2>
          <p>
            This template does not require account creation. If analytics, ads, or third-party embeds are enabled, disclose them here and link to their policies.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Third-party services</h2>
          <p>
            Production sites may use Roblox links, analytics, ad networks, or video embeds. Add only the services actually enabled in the project config.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Contact</h2>
          <p>
            For privacy questions, contact {siteData.site.contactEmail}. Replace this address in the site config before launch.
          </p>
        </article>
      </section>
    </main>
  );
}
