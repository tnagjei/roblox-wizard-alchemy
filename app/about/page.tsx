// input: `/about/` route request
// output: independent template identity and verification policy page
// pos: about route

import type { Metadata } from "next";
import { BrandIdentity } from "@/components/BrandIdentity";
import { siteData } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `About ${siteData.site.name}`,
  description: `About ${siteData.site.name}, an independent verification-aware Roblox guide template.`,
  alternates: {
    canonical: absoluteUrl("/about/")
  }
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">About this template</p>
          <h1>About {siteData.site.name}</h1>
          <p className="lede">
            This page explains the template identity, verification policy, and fan-site boundary. Replace this copy for each production game site.
          </p>
        </div>
        <img className="hero-image" src={siteData.assets.hero} alt={`${siteData.game.name} Roblox thumbnail`} />
      </section>

      <section className="content-grid">
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Independent fan guide</h2>
          <p>
            This template is designed for independent Roblox game guide sites. It should not claim official status unless ownership or authorization is verified.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Verification first</h2>
          <p>
            Codes, rewards, unit stats, value lists, Discord links, and official claims should stay pending until supported by official or in-game evidence.
          </p>
        </article>
        <article className="guide-card">
          <span className="card-rule" />
          <h2>Template boundary</h2>
          <p>
            Use this page as a placeholder. For a real site, update the game name, domain, contact email, sources, and safety rules before deployment.
          </p>
        </article>
      </section>

      <BrandIdentity />
    </main>
  );
}
