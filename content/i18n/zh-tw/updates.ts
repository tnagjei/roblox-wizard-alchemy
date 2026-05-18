// input: Traditional Chinese Wizard Alchemy updates page requirements
// output: typed Traditional Chinese updates content object
// pos: zh-tw updates SEO content

import type { StrategyPageContent } from "@/lib/content/page-types";

export const zhTwUpdatesPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy 更新追蹤 | 發布狀態、代碼與來源紀錄",
    description: "Wizard Alchemy 更新追蹤頁，整理 Roblox 發布狀態、描述變化、代碼證據、Discord 待驗證狀態與未來更新驗證規則。"
  },
  slug: "updates",
  hero: {
    eyebrow: "來源追蹤",
    h1: "Wizard Alchemy 更新追蹤",
    lede: "本頁只追蹤已驗證的 Wizard Alchemy 資訊：已發布的 Roblox 遊戲頁、Muggle Academy 開發者歸屬、公開玩法描述，以及 RELEASE 和 WIZARD 代碼線索。Patch notes、Discord、MACHI 和具體獎勵數量，在有更強證據前都保持 pending。",
    primaryAction: { label: "查看代碼", href: "/zh-tw/codes/" },
    secondaryAction: { label: "打開 Roblox 頁面", href: "roblox", external: true }
  },
  summaryCards: [
    {
      title: "發布頁已確認",
      description: "Wizard Alchemy 有公開 Roblox 遊戲頁，標題顯示 released，並標註 Muggle Academy。"
    },
    {
      title: "代碼謹慎更新",
      description: "RELEASE 和 WIZARD 目前是 Roblox 頁面提到的線索，不是本站已遊戲內實測的 active code。"
    },
    {
      title: "Patch 說法待驗證",
      description: "Discord、Trello、MACHI、race reroll 數量、種族排名和平衡變動，在第一輪來源檢查中仍未驗證。"
    }
  ],
  sections: [
    {
      heading: "目前已驗證快照",
      body: [
        "公開來源基線是官方 Roblox 遊戲頁。它顯示 Wizard Alchemy 是由 Muggle Academy 開發的 Roblox 魔法 RPG。",
        "目前可安全描述的玩法框架仍是寬泛層級：收集材料、釀造藥水、解鎖法術、提升力量、探索魔法區域。本頁不會把這些寬泛描述擴寫成假的數值或排名。"
      ],
      list: [
        "遊戲頁：已確認的公開 Roblox 來源。",
        "開發者歸屬：Muggle Academy。",
        "玩法循環：材料、藥水、法術、力量、探索。",
        "官方 Discord：仍 pending。",
        "詳細 patch log：仍 pending。"
      ]
    },
    {
      heading: "代碼更新規則",
      body: [
        "代碼不會因為被某個網站提到，就直接發布為 fully active。必須同時有來源證據和遊戲內兌換證據。",
        "RELEASE 和 WIZARD 目前是 source-backed leads，因為它們出現在 Roblox 描述裡。MACHI 目前只作為第三方線索。"
      ],
      list: [
        "來源提到代碼時，先放入 pending。",
        "只有遊戲內兌換記錄後，才移入 active。",
        "沒有遊戲內結果前，不發布具體獎勵。",
        "社群回報和 Roblox 頁面提到要分開處理。"
      ]
    },
    {
      heading: "待驗證更新隊列",
      body: [
        "以下是下一步要驗證的主題，驗證後才適合拆成獨立頁或 indexed section。",
        "目標不是複製對標站，而是把有用說法變成有證據支撐的更新。"
      ],
      list: [
        "代碼兌換 UI 在哪裡。",
        "MACHI 是否能在遊戲內成功兌換。",
        "RELEASE 和 WIZARD 的準確獎勵結果。",
        "Discord 邀請是否由開發者明確連結。",
        "parry、ascension、shards、races、boss farming 是否為核心機制。"
      ]
    },
    {
      heading: "哪些不算正式更新",
      body: [
        "第三方攻略頁發布某個說法，不等於本站可以把它記為更新。",
        "有用說法可以進入研究隊列，但要成為 verified update，需要更強證據。"
      ],
      list: [
        "不複製種族排名變動。",
        "不編造平衡調整。",
        "不把未驗證 Discord 寫成官方來源。",
        "沒有測試證據前，不寫獎勵數量。",
        "不引用 script 或 macro 下載。"
      ]
    }
  ],
  relatedLinks: [
    { href: "/zh-tw/codes/", title: "代碼", description: "查看 RELEASE、WIZARD、MACHI 和每個代碼說法的證據等級。" },
    { href: "/zh-tw/beginners-guide/", title: "新手指南", description: "在跟隨未驗證種族或重抽建議前，先安全開始遊戲。" },
    { href: "/zh-tw/", title: "攻略首頁", description: "回到首頁查看快速狀態、來源狀態和研究隊列。" }
  ],
  faq: [
    {
      q: "這是完整 Wizard Alchemy patch log 嗎？",
      a: "不是。這是第一版來源追蹤頁。完整 patch log 需要官方或遊戲內更新證據。"
    },
    {
      q: "為什麼 Discord 和 Trello 還是 pending？",
      a: "它們需要來自 Roblox 頁面、Muggle Academy 社群或其他明確官方來源的開發者連結證據。"
    },
    {
      q: "RELEASE 和 WIZARD 什麼時候會變 active codes？",
      a: "只有本站記錄到成功的遊戲內兌換結果和準確獎勵後，才會從 pending 移到 active。"
    },
    {
      q: "第三方攻略可以觸發本站更新嗎？",
      a: "可以觸發研究任務，但沒有更強證據前，不會成為 verified update。"
    }
  ]
};
