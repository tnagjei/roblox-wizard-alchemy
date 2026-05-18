// input: typed localized homepage content and locale
// output: Wizard Alchemy homepage with official Roblox visual and source-safe content
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

  const alchemyLoop = [
    { step: "01", title: "Ingredients", body: "Collect materials and learn what each resource is used for before chasing builds." },
    { step: "02", title: "Potions", body: "Brew and test potion effects inside the game instead of copying unsupported claims." },
    { step: "03", title: "Spells", body: "Unlock spells, compare their roles, then wait for verified data before ranking them." },
    { step: "04", title: "Power", body: "Upgrade power and explore new magical areas with source-checked progression notes." }
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

      <section className="alchemy-status-grid" aria-label="First version status">
        {completedCards.map((card) => (
          <Link className="alchemy-status-card" href={card.href} key={card.href}>
            <span>{card.title}</span>
            <strong>{card.description}</strong>
          </Link>
        ))}
      </section>

      <section className="alchemy-section alchemy-loop-section">
        <div className="alchemy-section-heading">
          <p>Gameplay loop</p>
          <h2>Ingredients to power, without fake stats.</h2>
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
