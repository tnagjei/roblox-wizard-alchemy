// input: typed localized homepage content and locale
// output: Wizard Alchemy homepage with official Roblox visual, player-first modules, and localized source-safe content
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

type HomeCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  primaryAction: string;
  secondaryAction: string;
  officialVisual: string;
  byDeveloper: string;
  quickFactsAria: string;
  quickFacts: Array<{ label: string; value: string; note: string }>;
  completedCards: Array<{ href: string; title: string; description: string }>;
  firstSessionEyebrow: string;
  firstSessionTitle: string;
  firstSession: string[];
  loopEyebrow: string;
  loopTitle: string;
  alchemyLoop: Array<{ step: string; title: string; body: string }>;
  codeEyebrow: string;
  codeTitle: string;
  codeAria: string;
  codeWarning: string;
  researchEyebrow: string;
  researchTitle: string;
  researchQueue: Array<{ title: string; body: string }>;
  evidenceEyebrow: string;
  evidenceTitle: string;
  evidenceLabels: Record<string, string>;
  boundaryEyebrow: string;
  boundaryTitle: string;
  boundaryCards: Array<{ title: string; description: string }>;
  faqTitle: string;
  faq: Array<{ q: string; a: string }>;
};

function actionHref(href: string): string {
  return href === "roblox" ? siteData.game.robloxUrl : href;
}

function localizedHref(locale: Locale, slug: string) {
  return getLocalizedPath(locale, slug);
}

function buildHomeCopy(locale: Locale): HomeCopy {
  const href = (slug: string) => localizedHref(locale, slug);

  if (locale === "zh-tw") {
    return {
      heroEyebrow: "獨立 Roblox 攻略站",
      heroTitle: "Wizard Alchemy 攻略",
      heroLede: "Wizard Alchemy 是 Muggle Academy 開發的 Roblox 魔法 RPG。本首頁聚焦已驗證來源、代碼狀態、新手路線與待驗證主題，避免把第三方說法直接寫成事實。",
      primaryAction: "查看代碼",
      secondaryAction: "打開 Roblox 頁面",
      officialVisual: "官方 Roblox 圖像",
      byDeveloper: "由 Muggle Academy 開發",
      quickFactsAria: "Wizard Alchemy 快速狀態",
      quickFacts: [
        { label: "代碼狀態", value: "RELEASE + WIZARD", note: "Roblox 頁面提到" },
        { label: "MACHI", value: "待驗證", note: "僅第三方說法" },
        { label: "Discord", value: "待驗證", note: "Roblox 頁面未確認" },
        { label: "獎勵數量", value: "未知", note: "不編造具體數量" }
      ],
      completedCards: [
        { href: href("codes"), title: "代碼", description: "追蹤 RELEASE 和 WIZARD 的 Roblox 頁面線索，並把遊戲內未測試狀態標清楚。" },
        { href: href("beginners-guide"), title: "新手指南", description: "從已驗證玩法框架開始：收集材料、釀造藥水、解鎖法術、提升力量與探索。" },
        { href: href("updates"), title: "更新", description: "記錄有來源標籤的變更，不把未支持的 patch 說法放進索引。" }
      ],
      firstSessionEyebrow: "從這裡開始",
      firstSessionTitle: "深入攻略完成前，先照這條第一局路線走。",
      firstSession: [
        "打開官方 Roblox 遊戲頁並啟動 Wizard Alchemy。",
        "輸入任何代碼前，先檢查遊戲內設定或工具選單。",
        "在記錄兌換結果前，把 RELEASE 和 WIZARD 當作有來源的待測線索。",
        "種族資料未驗證前，不要花重抽資源，也不要追種族排名。",
        "忽略任何要求 Roblox 密碼、cookie、恢復碼或下載檔案的攻略。"
      ],
      loopEyebrow: "玩法循環",
      loopTitle: "收集、釀造、戰鬥、升級。",
      alchemyLoop: [
        { step: "01", title: "收集", body: "先收集材料和資源，不要急著追種族或數值建議。" },
        { step: "02", title: "釀造", body: "用藥水解鎖法術，並在遊戲內測試效果。" },
        { step: "03", title: "戰鬥", body: "熟悉敵人、移動與戰鬥節奏，再發布具體技巧。" },
        { step: "04", title: "升級", body: "提升力量並探索新區域，進度建議必須有來源邊界。" }
      ],
      codeEyebrow: "代碼證據",
      codeTitle: "Roblox 頁面提到，不編造獎勵。",
      codeAria: "Wizard Alchemy 代碼證據",
      codeWarning: "對標站常出現 MACHI 和 race reroll 數量。本站在沒有 Roblox 頁面證據或遊戲內測試前，保持 pending。",
      researchEyebrow: "研究隊列",
      researchTitle: "下一批高需求待驗證主題。",
      researchQueue: [
        { title: "兌換 UI", body: "第三方站指向 Settings 和 Utilities，但需要遊戲內截圖或測試記錄。" },
        { title: "種族重抽", body: "MACHI、5 次重抽獎勵與種族目標可見於對標站，但本站保持 pending。" },
        { title: "戰鬥機制", body: "Parry、Ascension、shards、controls 和 boss farming 值得研究，但需要遊戲內驗證。" },
        { title: "官方連結", body: "Roblox 遊戲頁和 Muggle Academy 已驗證。Discord 仍需開發者連結證據。" }
      ],
      evidenceEyebrow: "來源狀態",
      evidenceTitle: "目前已驗證什麼",
      evidenceLabels: { verified: "已驗證", pending: "待驗證", "needs verification": "需要驗證", "research-only": "僅研究" },
      boundaryEyebrow: "編輯立場",
      boundaryTitle: "本站不會假裝知道的內容",
      boundaryCards: [
        { title: "代碼", description: "Roblox 頁面提到的代碼只作為線索，不直接當成遊戲內已測試獎勵。" },
        { title: "排名與數值", description: "種族、法術、數值、價值和排名，在資料未驗證前保持 pending。" },
        { title: "官方連結", description: "Roblox 頁和 Muggle Academy 已連結；Discord 在驗證前不寫成官方。" }
      ],
      faqTitle: "Wizard Alchemy 攻略 FAQ",
      faq: [
        { q: "這是 Wizard Alchemy 官方網站嗎？", a: "不是。這是獨立粉絲攻略站，與 Roblox Corporation 或 Muggle Academy 沒有官方隸屬關係。" },
        { q: "為什麼有些頁面沒有出現在 footer 和 sitemap？", a: "tier list、units、scripts、macros、value list 和 Discord 尚未完成到可索引狀態。" }
      ]
    };
  }

  if (locale === "th") {
    return {
      heroEyebrow: "คู่มือ Roblox อิสระ",
      heroTitle: "Wizard Alchemy Guide",
      heroLede: "Wizard Alchemy เป็น Roblox wizard RPG โดย Muggle Academy หน้าแรกนี้เน้นแหล่งข้อมูลที่ตรวจสอบได้ สถานะโค้ด เส้นทางผู้เริ่มต้น และหัวข้อ pending โดยไม่เขียน claim จากเว็บอื่นเป็นข้อเท็จจริง",
      primaryAction: "Check codes",
      secondaryAction: "Open Roblox page",
      officialVisual: "Official Roblox visual",
      byDeveloper: "By Muggle Academy",
      quickFactsAria: "Wizard Alchemy quick facts",
      quickFacts: [
        { label: "Codes status", value: "RELEASE + WIZARD", note: "หน้า Roblox กล่าวถึง" },
        { label: "MACHI", value: "Pending", note: "เป็น claim จากเว็บอื่น" },
        { label: "Discord", value: "Pending", note: "ยังไม่ยืนยันจากหน้า Roblox" },
        { label: "Reward amount", value: "Unknown", note: "ไม่แต่งจำนวนรางวัล" }
      ],
      completedCards: [
        { href: href("codes"), title: "Codes", description: "ติดตาม RELEASE และ WIZARD ในฐานะ Roblox-page-mentioned codes พร้อมแยกสถานะที่ยังไม่ได้ทดสอบในเกม" },
        { href: href("beginners-guide"), title: "Beginner Guide", description: "เริ่มจาก gameplay frame ที่ตรวจสอบได้: ingredients, potions, spells, power และ exploration" },
        { href: href("updates"), title: "Updates", description: "บันทึก source-labeled updates และกัน patch claims ที่ยังไม่มีหลักฐานออกจาก index" }
      ],
      firstSessionEyebrow: "Start here",
      firstSessionTitle: "เส้นทางเล่นครั้งแรกก่อนที่ deep guides จะพร้อม.",
      firstSession: [
        "เปิดหน้าเกม Roblox ทางการและเริ่ม Wizard Alchemy",
        "ตรวจสอบ settings หรือ utility menu ในเกมก่อนใส่โค้ด",
        "Treat RELEASE และ WIZARD เป็น source-backed leads จนกว่าจะบันทึกผล redeem",
        "อย่าใช้ rerolls หรือไล่ตาม race rankings ก่อนตรวจสอบ tier data",
        "หลีกเลี่ยง guide ที่ขอ Roblox password, cookie, recovery code หรือ download"
      ],
      loopEyebrow: "Gameplay loop",
      loopTitle: "Collect, brew, fight, upgrade.",
      alchemyLoop: [
        { step: "01", title: "Collect", body: "เก็บ ingredients และ materials ก่อนเชื่อ race หรือ stat advice" },
        { step: "02", title: "Brew", body: "ใช้ potions เพื่อปลดล็อก spells และทดสอบผลในเกม" },
        { step: "03", title: "Fight", body: "ต่อสู้ เรียนรู้ movement และตรวจสอบ combat mechanics ก่อนเผยแพร่ tips" },
        { step: "04", title: "Upgrade", body: "อัปเกรด power และสำรวจพื้นที่ใหม่พร้อม source-checked progression notes" }
      ],
      codeEyebrow: "Code evidence",
      codeTitle: "หน้า Roblox กล่าวถึง แต่ไม่แต่งรางวัล.",
      codeAria: "Wizard Alchemy code evidence",
      codeWarning: "เว็บคู่แข่งมักแสดง MACHI และ race reroll quantities เว็บนี้เก็บ claim เหล่านั้นเป็น pending จนกว่าจะมี Roblox-page proof หรือ in-game test evidence",
      researchEyebrow: "Research backlog",
      researchTitle: "หัวข้อที่ต้อง verify ต่อไป.",
      researchQueue: [
        { title: "Redeem UI", body: "เว็บอื่นชี้ไปที่ Settings และ Utilities แต่ต้องมี screenshot หรือ test log จากในเกม" },
        { title: "Race rerolls", body: "MACHI, 5-reroll rewards และ race targets อยู่บนเว็บคู่แข่ง แต่ยัง pending ที่นี่" },
        { title: "Combat mechanics", body: "Parry, Ascension, shards, controls และ boss farming น่าสนใจ แต่ต้องมี game-checked evidence" },
        { title: "Official links", body: "Roblox game page และ Muggle Academy verified แล้ว ส่วน Discord ยังต้องมี developer-linked proof" }
      ],
      evidenceEyebrow: "Source status",
      evidenceTitle: "สิ่งที่ verified ตอนนี้",
      evidenceLabels: { verified: "Verified", pending: "Pending", "needs verification": "Needs verification", "research-only": "Research only" },
      boundaryEyebrow: "Editorial position",
      boundaryTitle: "สิ่งที่เว็บนี้จะไม่ fake",
      boundaryCards: [
        { title: "Codes", description: "Roblox-page-mentioned codes เป็น leads ไม่ใช่ rewards ที่ทดสอบในเกมแล้ว" },
        { title: "Tier and stats", description: "rankings, stats, races, spells และ values จะ pending จนกว่าข้อมูลจะถูกตรวจสอบ" },
        { title: "Official links", description: "Roblox game page และ Muggle Academy linked แล้ว ส่วน Discord ยัง pending" }
      ],
      faqTitle: "Wizard Alchemy Guide FAQ",
      faq: [
        { q: "นี่เป็นเว็บไซต์ทางการของ Wizard Alchemy หรือไม่?", a: "ไม่ใช่ นี่คือ independent fan guide และไม่ได้มีความเกี่ยวข้องอย่างเป็นทางการกับ Roblox Corporation หรือ Muggle Academy" },
        { q: "ทำไมบางหน้าไม่อยู่ใน footer และ sitemap?", a: "tier list, units, scripts, macros, value list และ Discord ยังไม่พร้อมสำหรับการ index" }
      ]
    };
  }

  return {
    heroEyebrow: "Independent Roblox guide",
    heroTitle: "Wizard Alchemy Guide",
    heroLede: "Wizard Alchemy is a Roblox wizard RPG by Muggle Academy. This first version focuses on source-checked code status, release notes, beginner direction, and clear pending labels where data is not verified yet.",
    primaryAction: "Check codes",
    secondaryAction: "Open Roblox page",
    officialVisual: "Official Roblox visual",
    byDeveloper: "By Muggle Academy",
    quickFactsAria: "Wizard Alchemy quick facts",
    quickFacts: [
      { label: "Codes status", value: "RELEASE + WIZARD", note: "Roblox page mentioned" },
      { label: "MACHI", value: "Pending", note: "Third-party claim only" },
      { label: "Discord", value: "Pending", note: "Not verified from Roblox page" },
      { label: "Reward amount", value: "Unknown", note: "Do not invent quantities" }
    ],
    completedCards: [
      { href: href("codes"), title: "Codes", description: "Track RELEASE and WIZARD as Roblox-page-mentioned codes while in-game testing remains pending." },
      { href: href("beginners-guide"), title: "Beginner Guide", description: "Start from the verified official description: collect ingredients, brew potions, unlock spells, upgrade power, and explore magical areas." },
      { href: href("updates"), title: "Updates", description: "Record source-labeled release notes and keep unsupported patch claims out of the index." }
    ],
    firstSessionEyebrow: "Start here",
    firstSessionTitle: "First session route before the deep guides are ready.",
    firstSession: [
      "Open the official Roblox game page and launch Wizard Alchemy.",
      "Check the in-game settings or utility menu before entering any code.",
      "Treat RELEASE and WIZARD as source-backed leads until the redemption result is recorded.",
      "Do not spend rerolls or chase race rankings before the tier data is verified.",
      "Ignore any guide that asks for Roblox passwords, cookies, recovery codes, or downloads."
    ],
    loopEyebrow: "Gameplay loop",
    loopTitle: "Collect, brew, fight, upgrade.",
    alchemyLoop: [
      { step: "01", title: "Collect", body: "Gather ingredients and materials before chasing race or stat advice." },
      { step: "02", title: "Brew", body: "Use potions to unlock spells and test effects from inside the game." },
      { step: "03", title: "Fight", body: "Fight enemies, learn movement, and verify combat mechanics before publishing tips." },
      { step: "04", title: "Upgrade", body: "Upgrade power and explore new areas with source-checked progression notes." }
    ],
    codeEyebrow: "Code evidence",
    codeTitle: "Roblox-page-mentioned, not reward-invented.",
    codeAria: "Wizard Alchemy code evidence",
    codeWarning: "Competitor pages commonly surface MACHI and race reroll quantities. This site keeps those claims pending until Roblox-page proof or in-game test evidence is recorded.",
    researchEyebrow: "Research backlog",
    researchTitle: "High-demand topics to verify next.",
    researchQueue: [
      { title: "Redeem UI", body: "Third-party sites point to Settings and Utilities. This needs an in-game screenshot or test log before becoming final." },
      { title: "Race rerolls", body: "MACHI, 5-reroll rewards, and race targets are visible on competitor sites but remain pending here." },
      { title: "Combat mechanics", body: "Parry, Ascension, shards, controls, and boss farming are useful topics, but need game-checked evidence." },
      { title: "Official links", body: "Roblox game page and Muggle Academy are verified. Discord remains unverified until developer-linked proof is found." }
    ],
    evidenceEyebrow: "Source status",
    evidenceTitle: "What is verified now",
    evidenceLabels: { verified: "Verified", pending: "Pending", "needs verification": "Needs verification", "research-only": "Research only" },
    boundaryEyebrow: "Editorial position",
    boundaryTitle: "What this site will not fake",
    boundaryCards: [
      { title: "Codes", description: "Roblox-page-mentioned codes are shown as leads, not as fully in-game tested rewards." },
      { title: "Tier and units", description: "Rankings, stats, races, spells, and values stay pending until the data is checked." },
      { title: "Official links", description: "The Roblox game page and Muggle Academy community are linked; Discord stays pending until verified." }
    ],
    faqTitle: "Wizard Alchemy Guide FAQ",
    faq: [
      { q: "Is this an official Wizard Alchemy website?", a: "No. This is an independent fan guide and is not affiliated with Roblox Corporation or Muggle Academy." },
      { q: "Why are some pages missing from the footer and sitemap?", a: "Tier list, units, scripts, macros, value list, and Discord pages are not complete enough to index yet." }
    ]
  };
}

function localizedStatus(status: string, labels: Record<string, string>) {
  return labels[status] || status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function HomePageTemplate({ content, locale }: HomePageTemplateProps) {
  const copy = buildHomeCopy(locale);
  const pendingCodes = siteData.codes.pendingCodes as PendingCode[];
  const sourceConfidence = siteData.game.sourceConfidence as Array<{ label: string; level: string }>;

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
            h1: copy.heroTitle,
            lede: copy.heroLede,
            focus: copy.heroEyebrow,
            primaryKeyword: siteData.pages.find((page) => page.key === "home")?.primaryKeyword || siteData.game.name,
            faq: copy.faq
          } as any),
          inLanguage: locale === "zh-tw" ? "zh-TW" : locale
        }}
      />
      <JsonLd data={buildFaqJsonLd({ faq: copy.faq } as any)} />
      <JsonLd data={buildBreadcrumbJsonLd({ path: getLocalizedPath(locale, ""), h1: copy.heroTitle } as any)} />

      <section className="alchemy-hero official-hero" aria-label={copy.heroTitle}>
        <div className="alchemy-hero-copy">
          <p className="alchemy-kicker">{copy.heroEyebrow}</p>
          <h1>{copy.heroTitle}</h1>
          <p>{copy.heroLede}</p>
          <div className="alchemy-actions">
            <Link className="alchemy-primary" href={getLocalizedPath(locale, "codes")}>{copy.primaryAction}</Link>
            <a className="alchemy-secondary" href={actionHref("roblox")} target="_blank" rel="noopener noreferrer">
              {copy.secondaryAction}
            </a>
          </div>
        </div>

        <div className="official-visual-panel" aria-label="Official Wizard Alchemy Roblox thumbnail">
          <img src="/official-hero-image" alt="Official Wizard Alchemy Roblox thumbnail" />
          <div className="official-visual-caption">
            <span>{copy.officialVisual}</span>
            <strong>{copy.byDeveloper}</strong>
          </div>
        </div>
      </section>

      <section className="quick-facts-grid" aria-label={copy.quickFactsAria}>
        {copy.quickFacts.map((item) => (
          <article className="quick-fact-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.note}</small>
          </article>
        ))}
      </section>

      <section className="alchemy-status-grid" aria-label="First version status">
        {copy.completedCards.map((card) => (
          <Link className="alchemy-status-card" href={card.href} key={card.href}>
            <span>{card.title}</span>
            <strong>{card.description}</strong>
          </Link>
        ))}
      </section>

      <section className="alchemy-section first-session-section">
        <div className="alchemy-section-heading">
          <p>{copy.firstSessionEyebrow}</p>
          <h2>{copy.firstSessionTitle}</h2>
        </div>
        <ol className="first-session-list">
          {copy.firstSession.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="alchemy-section alchemy-loop-section">
        <div className="alchemy-section-heading">
          <p>{copy.loopEyebrow}</p>
          <h2>{copy.loopTitle}</h2>
        </div>
        <div className="alchemy-loop-grid">
          {copy.alchemyLoop.map((item) => (
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
          <p>{copy.codeEyebrow}</p>
          <h2>{copy.codeTitle}</h2>
        </div>
        <div className="alchemy-code-table" role="table" aria-label={copy.codeAria}>
          {pendingCodes.map((item) => (
            <div className="alchemy-code-row" role="row" key={item.code}>
              <code>{item.code}</code>
              <span>{item.seenOn}</span>
              <strong>{localizedStatus(item.status, copy.evidenceLabels)}</strong>
            </div>
          ))}
        </div>
        <p className="alchemy-warning-note">{copy.codeWarning}</p>
      </section>

      <section className="alchemy-section research-queue-section">
        <div className="alchemy-section-heading">
          <p>{copy.researchEyebrow}</p>
          <h2>{copy.researchTitle}</h2>
        </div>
        <div className="research-queue-grid">
          {copy.researchQueue.map((item) => (
            <article className="research-queue-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="alchemy-section alchemy-evidence-section">
        <div className="alchemy-section-heading">
          <p>{copy.evidenceEyebrow}</p>
          <h2>{copy.evidenceTitle}</h2>
        </div>
        <div className="alchemy-evidence-grid">
          {sourceConfidence.map((source) => (
            <article className="alchemy-evidence-card" key={source.label}>
              <span className={`alchemy-badge ${source.level.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {copy.evidenceLabels[source.level] || localizedStatus(source.level, copy.evidenceLabels)}
              </span>
              <h3>{source.label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="alchemy-section alchemy-boundary-section">
        <div className="alchemy-section-heading">
          <p>{copy.boundaryEyebrow}</p>
          <h2>{copy.boundaryTitle}</h2>
        </div>
        <div className="alchemy-boundary-grid">
          {copy.boundaryCards.map((card) => (
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
          <h2>{copy.faqTitle}</h2>
        </div>
        <div className="alchemy-faq-list">
          {copy.faq.map((item) => (
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
