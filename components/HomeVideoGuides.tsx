// input: current locale and user-selected YouTube video URLs
// output: homepage YouTube embed section with SEO-safe VideoObject structured data
// pos: Wizard Alchemy video guide module（更新规则：文件变更需同步本注释与所属目录 README）

import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

type VideoCopy = {
  eyebrow: string;
  title: string;
  lede: string;
  note: string;
  relatedLabel: string;
  videos: VideoItem[];
};

const videoIds = ["GYWXYT40GMc", "9Tl38UScWMo", "a9WfOg8Zjiw", "vKn7q_niJeA", "-Hf_fcuIlFI"];

function embedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

function thumbnailUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function videoCopy(locale: Locale): VideoCopy {
  if (locale === "zh-tw") {
    return {
      eyebrow: "影片指南",
      title: "Wizard Alchemy 影片攻略",
      lede: "這裡嵌入 5 個你指定的 YouTube 影片，用於補足文字攻略不容易表達的選單位置、地圖路線、戰鬥節奏和新手流程。影片內容仍需人工判斷，不等於本站已驗證所有數值或排名。",
      note: "安全規則：不要使用影片描述或留言中的 Roblox 密碼、cookie、恢復碼、外掛、script 或自動農怪工具連結。",
      relatedLabel: "先閱讀文字版新手指南",
      videos: videoIds.map((id, index) => ({
        id,
        title: `Wizard Alchemy 影片攻略 ${index + 1}`,
        description: "用影片輔助理解 Wizard Alchemy 的玩法、介面、代碼、戰鬥或新手流程。",
        tag: ["codes", "guide", "potions", "boss", "walkthrough"][index]
      }))
    };
  }

  if (locale === "th") {
    return {
      eyebrow: "Video guides",
      title: "Wizard Alchemy video guides",
      lede: "ส่วนนี้ฝังวิดีโอ YouTube 5 รายการที่คุณเลือก เพื่อช่วยดูเมนู เส้นทาง แพตเทิร์นต่อสู้ และขั้นตอนเริ่มต้น วิดีโอเหล่านี้ไม่ได้แปลว่าทุก stat, tier หรือ reward ได้รับการยืนยันแล้ว",
      note: "กฎความปลอดภัย: หลีกเลี่ยงลิงก์ในคำอธิบายหรือคอมเมนต์ที่ขอ Roblox password, cookie, recovery code, extension, script หรือ auto farm tool",
      relatedLabel: "อ่าน beginner guide แบบข้อความก่อน",
      videos: videoIds.map((id, index) => ({
        id,
        title: `Wizard Alchemy video guide ${index + 1}`,
        description: "Use this video to visually inspect Wizard Alchemy gameplay, UI, codes, combat, or beginner flow.",
        tag: ["codes", "guide", "potions", "boss", "walkthrough"][index]
      }))
    };
  }

  return {
    eyebrow: "Video guides",
    title: "Wizard Alchemy video guides",
    lede: "These 5 user-selected YouTube videos help show menus, map routes, combat timing, and beginner flow. Embedded videos are useful for visual learning, but they do not automatically verify stats, tiers, rewards, or third-party claims.",
    note: "Safety rule: ignore links in video descriptions or comments that ask for Roblox passwords, cookies, recovery codes, extensions, scripts, or auto farm downloads.",
    relatedLabel: "Read the written beginner guide first",
    videos: videoIds.map((id, index) => ({
      id,
      title: `Wizard Alchemy video guide ${index + 1}`,
      description: "Use this video to visually inspect Wizard Alchemy gameplay, UI, codes, combat, or beginner flow.",
      tag: ["codes", "guide", "potions", "boss", "walkthrough"][index]
    }))
  };
}

function videoListJsonLd(copy: VideoCopy) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.title,
    itemListElement: copy.videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: [thumbnailUrl(video.id)],
        embedUrl: embedUrl(video.id),
        contentUrl: watchUrl(video.id)
      }
    }))
  };
}

export function HomeVideoGuides({ locale }: { locale: Locale }) {
  const copy = videoCopy(locale);

  return (
    <section className="alchemy-section video-guide-section" aria-label={copy.title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoListJsonLd(copy)) }}
      />
      <div className="alchemy-section-heading">
        <p>{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
      </div>
      <p className="video-guide-lede">{copy.lede}</p>
      <div className="video-guide-grid video-embed-grid">
        {copy.videos.map((video) => (
          <article className="video-guide-card video-embed-card" key={video.id}>
            <span>{video.tag}</span>
            <div className="video-embed-frame">
              <iframe
                src={embedUrl(video.id)}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <a href={watchUrl(video.id)} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </article>
        ))}
      </div>
      <p className="video-guide-note">{copy.note}</p>
      <Link className="video-guide-related" href={locale === "en" ? "/beginners-guide/" : `/${locale}/beginners-guide/`}>
        {copy.relatedLabel}
      </Link>
    </section>
  );
}
