"use client";
// input: app children, site config, page registry, and shared site data
// output: locale-aware site navigation and footer shell limited to completed pages with mobile-collapsed header and top ad banners
// pos: components/SiteChrome.tsx (更新规则：全局布局、移动端导航或头部/底部导航项变更需同步此文件与所属目录 README)

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSlugFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { localeMeta, type Locale } from "@/lib/i18n/locales";
import { gameConfig } from "@/lib/game-config";
import { completedCoreSlugs, completedEnglishOnlySlugs } from "@/lib/page-registry";
import { siteData } from "@/lib/site-data";
import AdBanner from "./AdBanner";
import SmartLink from "./SmartLink";
import SmallBanner from "./SmallBanner";

type SiteChromeProps = {
  children: React.ReactNode;
};

type FriendLink = {
  name: string;
  url: string;
  badgeUrl?: string;
};

function shortLocaleLabel(code: string): string {
  const labels: Record<string, string> = {
    en: "EN",
    "zh-tw": "繁中",
    th: "TH"
  };

  return labels[code] || code.toUpperCase();
}

const completedLocales = gameConfig.completedLocales.map((code) => ({
  code: code as Locale,
  label: localeMeta[code as Locale]?.nativeName || code,
  shortLabel: shortLocaleLabel(code)
}));

const englishHighIntentSlugs = completedEnglishOnlySlugs.map((slug) => ({
  href: getLocalizedPath("en", slug),
  label: labelForSlug(slug)
}));

function labelForSlug(slug: string): string {
  const page = siteData.pages.find((item) => item.key === slug);

  if (page?.focus) {
    return page.focus;
  }

  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getCurrentLocale(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const matched = completedLocales.find((item) => item.code === firstSegment)?.code;
  return matched || (gameConfig.defaultLocale as Locale);
}

function normalizedCurrentSlug(pathname: string) {
  const slug = getSlugFromPath(pathname);
  return completedCoreSlugs.includes(slug as never) ? slug : "";
}

function brandMark(value: string): string {
  const initials = value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return initials || "GG";
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const currentSlug = normalizedCurrentSlug(pathname);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const coreNavKeys = completedCoreSlugs.filter((slug) => slug !== "");
  const coreNavItems = coreNavKeys
    .map((key) => siteData.pages.find((p) => p.key === key))
    .filter((p) => p !== undefined)
    .map((p) => ({ href: getLocalizedPath(currentLocale, p.path), label: p.focus }));
  const currentLanguage = completedLocales.find((item) => item.code === currentLocale);
  const isEnglish = currentLocale === gameConfig.defaultLocale;
  const developerName = siteData.game.creator.name || "the game developer";
  const friendLinks = siteData.site.friendLinks as FriendLink[];

  function closeMobileNav() {
    setIsMobileNavOpen(false);
    setIsLanguageOpen(false);
  }

  return (
    <div className="site-shell">
      <style jsx global>{`
        .site-header-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .mobile-nav-toggle {
          display: none;
          border: 1px solid rgba(226, 204, 255, 0.18);
          border-radius: 999px;
          padding: 9px 13px;
          color: #efe7ff;
          background: rgba(255, 255, 255, 0.08);
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
        }

        .language-dropdown {
          position: relative;
        }

        .language-dropdown-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 42px;
          border: 1px solid rgba(226, 204, 255, 0.16);
          border-radius: 999px;
          padding: 10px 13px;
          color: #efe7ff;
          background: rgba(255, 255, 255, 0.06);
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 14px;
          cursor: pointer;
        }

        .language-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          z-index: 30;
          display: grid;
          min-width: 180px;
          gap: 6px;
          border: 1px solid rgba(226, 204, 255, 0.18);
          border-radius: 16px;
          padding: 8px;
          background: rgba(12, 7, 26, 0.96);
          box-shadow: 0 18px 60px rgba(4, 0, 18, 0.38);
        }

        .language-dropdown-menu a {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-radius: 12px;
        }

        @media (max-width: 560px) {
          .site-header {
            top: 8px;
            width: min(100% - 20px, 1180px);
            padding: 10px;
            border-radius: 18px;
          }

          .site-header-topline {
            width: 100%;
          }

          .site-header .brand-mark {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            font-size: 12px;
          }

          .site-header .brand strong {
            font-size: 15px;
          }

          .site-header .brand small {
            font-size: 11px;
          }

          .mobile-nav-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .site-nav {
            display: none;
            width: 100%;
            padding-top: 10px;
          }

          .site-nav.mobile-open {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            animation: mobile-nav-in 160ms ease-out;
          }

          .site-nav.mobile-open > a,
          .site-nav.mobile-open .language-dropdown,
          .site-nav.mobile-open .smart-link-btn {
            width: 100%;
          }

          .site-nav.mobile-open > a,
          .site-nav.mobile-open .language-dropdown-trigger,
          .site-nav.mobile-open .smart-link-btn {
            min-height: 44px;
            padding: 10px 12px;
            text-align: center;
          }

          .site-nav.mobile-open .smart-link-btn {
            grid-column: 1 / -1;
          }

          .language-dropdown-menu {
            left: 0;
            right: auto;
            width: min(260px, calc(100vw - 44px));
          }
        }

        @keyframes mobile-nav-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <header className="site-header">
        <div className="site-header-topline">
          <Link className="brand" href={getLocalizedPath(currentLocale, "")} aria-label={`${siteData.site.name} home`} onClick={closeMobileNav}>
            <span className="brand-mark">{brandMark(siteData.site.shortName)}</span>
            <span>
              <strong>{siteData.site.shortName}</strong>
              <small>Roblox guide</small>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
            aria-controls="site-nav"
            onClick={() => setIsMobileNavOpen((current) => !current)}
          >
            <span>{isMobileNavOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
        <nav id="site-nav" className={isMobileNavOpen ? "site-nav mobile-open" : "site-nav"} aria-label="Main navigation">
          {coreNavItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMobileNav}>
              {item.label}
            </Link>
          ))}
          <div className="language-dropdown">
            <button
              type="button"
              className="language-dropdown-trigger"
              aria-label="Choose language"
              aria-expanded={isLanguageOpen}
              aria-haspopup="menu"
              onClick={() => setIsLanguageOpen((current) => !current)}
              onBlur={(event) => {
                if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) {
                  setIsLanguageOpen(false);
                }
              }}
            >
              <span>Language</span>
              <strong>{currentLanguage?.shortLabel || "EN"}</strong>
            </button>
            {isLanguageOpen ? (
              <div
                className="language-dropdown-menu"
                role="menu"
                aria-label="Language navigation"
                onMouseDown={(event) => event.preventDefault()}
              >
                {completedLocales.map((item) => (
                  <Link
                    key={item.code}
                    href={getLocalizedPath(item.code, currentSlug)}
                    role="menuitem"
                    onClick={closeMobileNav}
                  >
                    <span>{item.shortLabel}</span>
                    <strong>{item.label}</strong>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <SmartLink className="nav-cta" label="Open Game" />
        </nav>
      </header>
      <SmallBanner placement="top" />
      <AdBanner placement="top" />
      {children}
      <AdBanner />
      <footer className="site-footer">
        <div className="footer-clusters">
          <div className="footer-cluster">
            <h3>Guides</h3>
            {coreNavItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            {isEnglish ? englishHighIntentSlugs.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            )) : null}
          </div>
          <div className="footer-cluster">
            <h3>Languages</h3>
            {completedLocales.map((item) => (
              <Link href={getLocalizedPath(item.code, currentSlug)} key={item.code}>{item.label}</Link>
            ))}
          </div>
          <div className="footer-cluster">
            <h3>Official & Contact</h3>
            <a
              href={siteData.game.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play on Roblox
            </a>
            <a href={gameConfig.robloxGroupUrl} target="_blank" rel="noopener noreferrer">Muggle Academy</a>
            <a href={`mailto:${siteData.site.contactEmail}`}>Contact</a>
            <Link href={getLocalizedPath(currentLocale, "codes")}>Code Safety</Link>
          </div>
        </div>
        {friendLinks.length > 0 && (
          <section className="friend-links-section">
            <div className="friend-links-container">
              <div className="friend-links-scroller">
                {[
                  ...friendLinks,
                  ...friendLinks,
                  ...friendLinks,
                  ...friendLinks
                ].map((link, i) => (
                  <a
                    key={`${link.url}-${i}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="friend-link-item"
                  >
                    {link.badgeUrl ? (
                      <img src={link.badgeUrl} alt={link.name} />
                    ) : (
                      <span className="friend-link-text">{link.name}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="footer-summary">
          <strong>{siteData.site.name}</strong>
          <p>
            Independent fan guide. Not affiliated with Roblox Corporation or {developerName}.
          </p>
        </div>
        <div className="footer-meta">
          <span>Contact: {siteData.site.contactEmail}</span>
          <span>Last full check: {siteData.site.lastFullCheck}</span>
          <span>
            <a
              href="https://www.effectivecpmnetwork.com/xcu7wqum?key=d2d7124679fe91cc600cd5d747b904c6"
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              Sponsored
            </a>
          </span>
        </div>
        <p className="copyright">
          © 2026 {siteData.site.copyrightOwner}. All Roblox trademarks belong
          to their respective owners.
        </p>
      </footer>
    </div>
  );
}
