// input: typed localized homepage content and locale
// output: Wizard Alchemy homepage with official Roblox visual, player-first modules, and source-safe content
// pos: multilingual homepage template

import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import type { HomePageContent } from "@/lib/content/page-types";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { siteData } from "@/lib/site-data";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildVideoGameJsonLd,
  buildWebsiteJsonLd
} from "@/lib/seo";

type HomePageTemplateProps = {
  content: HomePageContent;
  locale: Locale;
};

type PendingCode = {
  code: string;
  seenOn: string;
  status: string;
};

function actionHref(href: string): string {
  return href === "roblox" ? siteData.game.robloxUrl : href;
}

function localizedStatus(status: string) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function HomePageTemplate({ content, locale }: HomePageTemplateProps) {
  const pendingCodes = siteData.codes.pendingCodes as PendingCode[];
  const completedCards = content.directory.cards;
  const researchCards = content.research.cards;
  const sourceConfidence = siteData.game.sourceConfidence as Array<{ label: string; level: string }>;

  const quickFacts = [
    { label: "Codes status", value: "RELEASE + WIZARD", note: "Roblox page mentioned" },
    { label: "MACHI", value: "Pending", note: "Third-party claim only" },
    { label: "Discord", value: "Pending", note: "Not verified from Roblox page" },
    { label: "Reward amount", value: "Unknown", note: "Do not invent quantities" }
  ];

  const alchemyLoop = [
    { step: "01", title: "Collect", body: "Gather ingredients and materials before chasing race or stat advice." },
    { step: "02", title: "Brew", body: "Use potions to unlock spells and test effects from inside the game." },
    { step: "03", title: "Fight", body: "Fight enemies, learn movement, and verify combat mechanics before publishing tips." },
    { step: "04", title: "Upgrade", body: "Upgrade power and explore new areas with source-checked progression notes." }
  ];

  const firstSession = [
    "Open the official Roblox game page and launch Wizard Alchemy.",
    "Check the in-game settings or utility menu before entering any code.",
    "Treat RELEASE and WIZARD as source-backed leads until the redemption result is recorded.",
    "Do not spend rerolls or chase race rankings before the tier data is verified.",
    "Ignore any guide that asks for Roblox passwords, cookies, recovery codes, or downloads."
  ];

  const researchQueue = [
    { title: "Redeem UI", body: "Third-party sites point to Settings and Utilities. This needs an in-game screenshot or test log before becoming final." },
    { title: "Race rerolls", body: "MACHI, 5-reroll rewards, and race targets are visible on competitor sites but remain pending here." },
    { title: "Combat mechanics", body: "Parry, Ascension, shards, controls, and boss farming are useful topics, but need game-checked evidence." },
    { title: "Official links", body: "Roblox game page and Muggle Academy are verified. Discord remains unverified until developer-linked proof is found." }
  ];

  return (
    <main className="page-main wizard-home">
      <JsonLd data={buildWebsiteJsonLd()} />
      <JsonLd data={buildVideoGameJsonLd()} />
      <JsonLd
        data={{
          ...buildArticleJsonLd({
            key: "home",
            path: getLocalizedPath(locale, ""),
            title: content.meta.title,
            description: content.meta.description,
            h1: content.hero.h1,
            lede: content.hero.lede,
            focus: content.hero.eyebrow,
            primaryKeyword: siteData.pages.find((page) => page.key === "home")?.primaryKeyword || siteData.game.name,
            faq: content.faq
          } as any),
          inLanguage: locale === "zh-tw" ? "zh-TW" : locale
        }}
      />
      <JsonLd data={buildFaqJsonLd({ faq: content.faq } as any)} />
      <JsonLd data={buildBreadcrumbJsonLd({ path: getLocalizedPath(locale, ""), h1: content.hero.h1 } as any)} />

      <section className="alchemy-hero official-hero" aria-label={content.hero.h1}>
        <div className="alchemy-hero-copy">
          <p className="alchemy-kicker">{content.hero.eyebrow}</p>
          <h1>{content.hero.h1}</h1>
          <p>{content.hero.lede}</p>
          <div className="alchemy-actions">
            {content.hero.primaryAction ? (
              content.hero.primaryAction.external ? (
                <a className="alchemy-primary" href={actionHref(content.hero.primaryAction.href)} target="_blank" rel="noopener noreferrer">
                  {content.hero.primaryAction.label}
                </a>
              ) : (
                <Link className="alchemy-primary" href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Link>
              )
            ) : null}
            {content.hero.secondaryAction ? (
              content.hero.secondaryAction.external ? (
                <a className="alchemy-secondary" href={actionHref(content.hero.secondaryAction.href)} target="_blank" rel="noopener noreferrer">
                  {content.hero.secondaryAction.label}
                </a>
              ) : (
                <Link className="alchemy-secondary" href={content.hero.secondaryAction.href}>{content.hero.secondaryAction.label}</Link>
              )
            ) : null}
          </div>
        </div>

        <div className="official-visual-panel" aria-label="Official Wizard Alchemy Roblox thumbnail">
          <img src="/official-hero-image" alt="Official Wizard Alchemy Roblox thumbnail" />
          <div className="official-visual-caption">
            <span>Official Roblox visual</span>
            <strong>By Muggle Academy</strong>
          </div>
        </div>
      </section>

      <section className="quick-facts-grid" aria-label="Wizard Alchemy quick facts">
        {quickFacts.map((item) => (
          <article className="quick-fact-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.note}</small>
          </article>
        ))}
      </section>

      <section className="alchemy-status-grid" aria-label="First version status">
        {completedCards.map((card) => (
          <Link className="alchemy-status-card" href={card.href} key={card.href}>
            <span>{card.title}</span>
            <strong>{card.description}</strong>
          </Link>
        ))}
      </section>

      <section className="alchemy-section first-session-section">
        <div className="alchemy-section-heading">
          <p>Start here</p>
          <h2>First session route before the deep guides are ready.</h2>
        </div>
        <ol className="first-session-list">
          {firstSession.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="alchemy-section alchemy-loop-section">
        <div className="alchemy-section-heading">
          <p>Gameplay loop</p>
          <h2>Collect, brew, fight, upgrade.</h2>
        </div>
        <div className="alchemy-loop-grid">
          {alchemyLoop.map((item) => (
            <article className="alchemy-loop-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="alchemy-section alchemy-code-section">
        <div className="alchemy-section-heading">
          <p>Code evidence</p>
          <h2>Roblox-page-mentioned, not reward-invented.</h2>
        </div>
        <div className="alchemy-code-table" role="table" aria-label="Wizard Alchemy code evidence">
          {pendingCodes.map((item) => (
            <div className="alchemy-code-row" role="row" key={item.code}>
              <code>{item.code}</code>
              <span>{item.seenOn}</span>
              <strong>{localizedStatus(item.status)}</strong>
            </div>
          ))}
        </div>
        <p className="alchemy-warning-note">
          Competitor pages commonly surface MACHI and race reroll quantities. This site keeps those claims pending until Roblox-page proof or in-game test evidence is recorded.
        </p>
      </section>

      <section className="alchemy-section research-queue-section">
        <div className="alchemy-section-heading">
          <p>Research backlog</p>
          <h2>High-demand topics to verify next.</h2>
        </div>
        <div className="research-queue-grid">
          {researchQueue.map((item) => (
            <article className="research-queue-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="alchemy-section alchemy-evidence-section">
        <div className="alchemy-section-heading">
          <p>{content.verification.eyebrow}</p>
          <h2>{content.verification.title}</h2>
        </div>
        <div className="alchemy-evidence-grid">
          {sourceConfidence.map((source) => (
            <article className="alchemy-evidence-card" key={source.label}>
              <span className={`alchemy-badge ${source.level.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {content.verification.labels[source.level] || localizedStatus(source.level)}
              </span>
              <h3>{source.label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="alchemy-section alchemy-boundary-section">
        <div className="alchemy-section-heading">
          <p>{content.research.eyebrow}</p>
          <h2>{content.research.title}</h2>
        </div>
        <div className="alchemy-boundary-grid">
          {researchCards.map((card) => (
            <article className="alchemy-boundary-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="alchemy-section alchemy-faq-section">
        <div className="alchemy-section-heading">
          <p>FAQ</p>
          <h2>{content.hero.h1} FAQ</h2>
        </div>
        <div className="alchemy-faq-list">
          {content.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
