// input: Traditional Chinese Wizard Alchemy beginner guide requirements
// output: typed Traditional Chinese beginner guide content object
// pos: zh-tw beginners-guide SEO content

import type { StrategyPageContent } from "@/lib/content/page-types";

export const zhTwBeginnersGuidePage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy 新手指南 | 第一局路線、代碼與安全進度",
    description: "Wizard Alchemy 新手指南，整理第一局路線、代碼使用提醒、藥水進度、戰鬥基礎與 Roblox 帳號安全邊界。"
  },
  slug: "beginners-guide",
  hero: {
    eyebrow: "新手路線",
    h1: "Wizard Alchemy 新手指南",
    lede: "先從已驗證的遊戲框架開始：收集材料、釀造藥水、解鎖法術、提升力量，並探索魔法區域。本指南提供安全的第一局路線，不編造種族排名、獎勵數量或最強流派。",
    primaryAction: { label: "查看代碼", href: "/zh-tw/codes/" },
    secondaryAction: { label: "打開 Roblox 頁面", href: "roblox", external: true }
  },
  summaryCards: [
    {
      title: "前 10 分鐘",
      description: "先熟悉 UI、收集基礎材料、理解藥水流程，不要在機制未確認前花掉稀有資源。"
    },
    {
      title: "代碼提醒",
      description: "RELEASE 和 WIZARD 是 Roblox 頁面提到的線索。實際獎勵和兌換入口仍需要遊戲內測試記錄。"
    },
    {
      title: "不做假 meta",
      description: "種族排名、最佳元素、Boss 農法和重抽優先級，在有更強證據前都保持待驗證。"
    }
  ],
  sections: [
    {
      heading: "第一局路線",
      body: [
        "從官方 Roblox 遊戲頁面啟動 Wizard Alchemy，第一局先熟悉遊戲 UI，不要急著追第三方站的種族排名。",
        "你的第一個目標是理解 Roblox 描述中的基本循環：收集資源、釀造藥水、解鎖法術、提升力量，並推進到新區域。"
      ],
      list: [
        "從官方 Roblox 頁面啟動遊戲。",
        "找到基礎選單、設定、背包、法術和獎勵介面。",
        "先收集材料，再判斷流派或種族。",
        "在遊戲內測試藥水效果，不要直接相信外部表格。",
        "如果看到代碼入口，先記錄位置，不要先假設獎勵。"
      ]
    },
    {
      heading: "代碼與重抽提醒",
      body: [
        "對標站常會顯示 MACHI 和具體 race reroll 獎勵。這些可以作為研究線索，但不足以直接放進本站的已驗證 active code 表。",
        "RELEASE 和 WIZARD 是 Roblox 遊戲描述提到的代碼，所以優先測試它們，但仍需要記錄遊戲內結果。"
      ],
      list: [
        "不要因為第三方頁面說某個種族是 S-tier 就立刻花重抽資源。",
        "不要使用外部代碼生成器或 script 工具。",
        "沒有遊戲內記錄前，不發布具體獎勵數量。",
        "MACHI 在更強來源或遊戲內測試確認前保持 pending。"
      ]
    },
    {
      heading: "下一步要驗證什麼",
      body: [
        "有價值的新手主題很明確，但大部分需要直接遊戲證據，才能變成正式攻略結論。",
        "這個頁面應該靠遊戲內檢查逐步擴展，而不是複製對標站的種族、元素或農法表。"
      ],
      list: [
        "代碼兌換 UI 在哪裡。",
        "是否由 Settings、Utilities 或其他選單輸入代碼。",
        "藥水如何影響早期力量成長。",
        "哪些資源常見、稀有或容易卡住。",
        "parry、ascension、shards、races、boss farming 是否是早期核心機制。"
      ]
    },
    {
      heading: "帳號安全規則",
      body: [
        "Wizard Alchemy 攻略頁不應要求 Roblox 憑證。任何要求帳號秘密資訊的頁面或工具，都應視為不安全。",
        "安全攻略可以說明遊戲內要點哪裡，但不應要求安裝瀏覽器擴充、提供 cookie、下載檔案或執行 script。"
      ],
      list: [
        "不要輸入 Roblox 密碼、cookie、session token 或 recovery code。",
        "避免從評論區或代碼頁下載 script、macro 檔案。",
        "只在 Roblox 遊戲內 UI 兌換代碼。",
        "以 Roblox 官方頁和開發者連結來源作為起點。"
      ]
    }
  ],
  relatedLinks: [
    { href: "/zh-tw/codes/", title: "代碼", description: "在兌換前查看 RELEASE、WIZARD、MACHI 和目前證據狀態。" },
    { href: "/zh-tw/updates/", title: "更新", description: "先追蹤已驗證公開來源變化，再相信 patch 或平衡調整說法。" },
    { href: "/zh-tw/", title: "攻略首頁", description: "回到首頁查看來源狀態、pending 主題和研究隊列。" }
  ],
  faq: [
    {
      q: "Wizard Alchemy 新手第一步做什麼？",
      a: "從官方 Roblox 頁面啟動遊戲，熟悉 UI、收集材料、測試藥水流程，在機制未確認前不要花重抽資源或追種族排名。"
    },
    {
      q: "RELEASE 和 WIZARD 可以立刻用嗎？",
      a: "它們出現在 Roblox 遊戲描述中，所以是優先測試的代碼。但具體獎勵仍要在遊戲內記錄後才算驗證。"
    },
    {
      q: "MACHI 安全嗎？",
      a: "MACHI 出現在第三方說法中，但本站在更強證據或遊戲內測試確認前，仍保持 pending。"
    },
    {
      q: "新手現在該照 race tier list 嗎？",
      a: "暫時不要。種族排名和重抽優先級需要已驗證遊戲資料，才適合指導早期決策。"
    }
  ]
};
