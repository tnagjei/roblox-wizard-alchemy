// input: current locale and official guide homepage context
// output: homepage-only YouTube video guide discovery section with SEO-safe search links
// pos: Wizard Alchemy video guide module

import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";

type VideoTopic = {
  title: string;
  description: string;
  query: string;
  tag: string;
};

type VideoCopy = {
  eyebrow: string;
  title: string;
  lede: string;
  watchLabel: string;
  note: string;
  topics: VideoTopic[];
};

function youtubeSearch(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function videoCopy(locale: Locale): VideoCopy {
  if (locale === "zh-tw") {
    return {
      eyebrow: "影片指南",
      title: "用 YouTube 查找可視化攻略",
      lede: "影片最適合確認選單位置、地圖路線、Boss 動作和 parry 時機。本站先提供高相關 YouTube 搜尋入口；等確認具體影片品質後，再替換為正式嵌入影片。",
      watchLabel: "到 YouTube 搜尋",
      note: "安全規則：不要使用要求 Roblox 密碼、cookie、恢復碼、外掛或 script 下載的影片連結。",
      topics: [
        {
          title: "Codes & beginner guide",
          description: "查找 Settings、Utilities、Type Here 和 Claim 按鈕位置。",
          query: "Wizard Alchemy Roblox codes beginner guide",
          tag: "codes"
        },
        {
          title: "Race tier & reroll strategy",
          description: "觀察 race reroll 介面與重抽流程，但不要直接照抄 tier 結論。",
          query: "Wizard Alchemy Roblox race tier list reroll strategy",
          tag: "races"
        },
        {
          title: "Potion crafting & shards",
          description: "看 potion、elemental shards 和 spell unlock 的實際流程。",
          query: "Wizard Alchemy Roblox potion crafting elemental shards",
          tag: "potions"
        },
        {
          title: "Dwarf King & parry timing",
          description: "影片比文字更適合學紅色提示、F parry 和 boss 節奏。",
          query: "Wizard Alchemy Roblox Dwarf King parry timing",
          tag: "boss"
        },
        {
          title: "Full beginner route walkthrough",
          description: "查找第一局路線、早期材料、升級與探索順序。",
          query: "Wizard Alchemy Roblox full beginner route walkthrough",
          tag: "walkthrough"
        }
      ]
    };
  }

  if (locale === "th") {
    return {
      eyebrow: "Video guides",
      title: "ค้นหาคู่มือแบบวิดีโอบน YouTube",
      lede: "วิดีโอเหมาะสำหรับดูตำแหน่งเมนู เส้นทางแผนที่ boss patterns และ parry timing ตอนนี้เว็บนี้ให้ลิงก์ค้นหา YouTube ที่เกี่ยวข้องก่อน หลังจากตรวจคุณภาพวิดีโอแล้วจึงค่อยเปลี่ยนเป็น embedded videos",
      watchLabel: "Search on YouTube",
      note: "กฎความปลอดภัย: หลีกเลี่ยงวิดีโอหรือลิงก์ที่ขอ Roblox password, cookie, recovery code, extension หรือ script download",
      topics: [
        {
          title: "Codes & beginner guide",
          description: "ค้นหาตำแหน่ง Settings, Utilities, Type Here และ Claim button",
          query: "Wizard Alchemy Roblox codes beginner guide",
          tag: "codes"
        },
        {
          title: "Race tier & reroll strategy",
          description: "ดู race reroll UI และ flow แต่ยังไม่ควรคัดลอก tier claim โดยตรง",
          query: "Wizard Alchemy Roblox race tier list reroll strategy",
          tag: "races"
        },
        {
          title: "Potion crafting & shards",
          description: "ดูการใช้งาน potions, elemental shards และ spell unlock flow",
          query: "Wizard Alchemy Roblox potion crafting elemental shards",
          tag: "potions"
        },
        {
          title: "Dwarf King & parry timing",
          description: "วิดีโอเหมาะกับการดู red indicator, F parry และ boss rhythm",
          query: "Wizard Alchemy Roblox Dwarf King parry timing",
          tag: "boss"
        },
        {
          title: "Full beginner route walkthrough",
          description: "ค้นหา first-session route, early materials, upgrades และ exploration order",
          query: "Wizard Alchemy Roblox full beginner route walkthrough",
          tag: "walkthrough"
        }
      ]
    };
  }

  return {
    eyebrow: "Video guides",
    title: "Find visual Wizard Alchemy guides on YouTube",
    lede: "Videos are best for seeing menus, map routes, boss attack patterns, and parry timing. This section uses precise YouTube searches first; after specific videos are quality-checked, they can be replaced with direct embeds.",
    watchLabel: "Search on YouTube",
    note: "Safety rule: ignore videos or links that ask for Roblox passwords, cookies, recovery codes, extensions, scripts, or downloads.",
    topics: [
      {
        title: "Codes & beginner guide",
        description: "Find the Settings cogwheel, Utilities tab, Type Here box, and Claim button.",
        query: "Wizard Alchemy Roblox codes beginner guide",
        tag: "codes"
      },
      {
        title: "Race tier & reroll strategy",
        description: "Watch the race reroll UI and decision flow without copying unverified tier claims.",
        query: "Wizard Alchemy Roblox race tier list reroll strategy",
        tag: "races"
      },
      {
        title: "Potion crafting & shards",
        description: "See potion crafting, elemental shards, and spell unlock flow in action.",
        query: "Wizard Alchemy Roblox potion crafting elemental shards",
        tag: "potions"
      },
      {
        title: "Dwarf King & parry timing",
        description: "Use video to study red indicators, F parry timing, and boss rhythm.",
        query: "Wizard Alchemy Roblox Dwarf King parry timing",
        tag: "boss"
      },
      {
        title: "Full beginner route walkthrough",
        description: "Look for first-session routes, early materials, upgrades, and exploration order.",
        query: "Wizard Alchemy Roblox full beginner route walkthrough",
        tag: "walkthrough"
      }
    ]
  };
}

function itemListJsonLd(copy: VideoCopy) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.title,
    itemListElement: copy.topics.map((topic, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: topic.title,
      description: topic.description,
      url: youtubeSearch(topic.query)
    }))
  };
}

export function HomeVideoGuides({ locale }: { locale: Locale }) {
  const copy = videoCopy(locale);

  return (
    <section className="alchemy-section video-guide-section" aria-label={copy.title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd(copy)) }}
      />
      <div className="alchemy-section-heading">
        <p>{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
      </div>
      <p className="video-guide-lede">{copy.lede}</p>
      <div className="video-guide-grid">
        {copy.topics.map((topic) => (
          <a
            className="video-guide-card"
            href={youtubeSearch(topic.query)}
            target="_blank"
            rel="noopener noreferrer"
            key={topic.query}
          >
            <span>{topic.tag}</span>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <strong>{copy.watchLabel}</strong>
          </a>
        ))}
      </div>
      <p className="video-guide-note">{copy.note}</p>
      <Link className="video-guide-related" href={locale === "en" ? "/beginners-guide/" : `/${locale}/beginners-guide/`}>
        {locale === "zh-tw" ? "先閱讀文字版新手指南" : locale === "th" ? "อ่าน beginner guide แบบข้อความก่อน" : "Read the written beginner guide first"}
      </Link>
    </section>
  );
}
