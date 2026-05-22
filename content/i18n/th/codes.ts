// input: Thai Wizard Alchemy codes page requirements from GSC signal
// output: typed Thai codes content object optimized for Thai code queries
// pos: th codes SEO content（更新规则：文件变更需同步本注释与所属目录 README）

import type { CodesPageContent } from "@/lib/content/page-types";

export const thCodesPage: CodesPageContent = {
  meta: {
    title: "Wizard Alchemy โค้ด | RELEASE, WIZARD, MACHI Status",
    description: "หน้า Wizard Alchemy โค้ด สำหรับ RELEASE, WIZARD, MACHI วิธี redeem อย่างปลอดภัย สถานะ reward และหลักฐานโค้ด Roblox"
  },
  slug: "codes",
  hero: {
    eyebrow: "Codes evidence desk",
    h1: "Wizard Alchemy โค้ด",
    lede: "กำลังหา Wizard Alchemy โค้ด? RELEASE และ WIZARD ถูกกล่าวถึงในหน้าเกม Roblox ส่วน MACHI ปรากฏบนเว็บ third-party ดังนั้นเว็บนี้ยังเก็บ MACHI เป็น pending จนกว่าจะมี proof ที่ดีกว่าหรือผลทดสอบ redeem ในเกม",
    primaryAction: { label: "Open Roblox page", href: "roblox", external: true },
    secondaryAction: { label: "Beginner guide", href: "/th/beginners-guide/" }
  },
  verifiedCodes: {
    eyebrow: "Active code table",
    title: "ยังไม่มี active codes ที่ verified จากในเกม",
    description: "ตาราง active ยังว่างโดยตั้งใจ RELEASE และ WIZARD เป็น source-backed leads แต่เว็บนี้ยังไม่มี in-game redemption result และ exact reward ที่บันทึกไว้",
    emptyCode: "ยังไม่มี in-game verified code",
    emptyReward: "Exact reward ยังไม่ verified",
    emptySource: "รอ in-game test log"
  },
  communityCodes: {
    eyebrow: "Community-reported leads",
    title: "MACHI และ code claims จากเว็บอื่น",
    description: "MACHI อยู่ใน third-party Wizard Alchemy code lists จึงเป็น lead ที่น่าทดสอบ แต่ยังไม่ถูกใส่เป็น active code จนกว่าจะมี Roblox-page proof หรือผล redeem ในเกม",
    actionLabel: "ทดสอบเฉพาะใน Roblox",
    statusLabels: { "community reported": "Community reported", "not verified": "Not verified", pending: "Pending", verified: "Verified", "official-page-mentioned": "Roblox page mentioned" }
  },
  pendingCodes: {
    eyebrow: "Roblox-page-mentioned codes",
    title: "RELEASE และ WIZARD คือโค้ดแรกที่ควรทดสอบ",
    description: "สองโค้ดนี้มี public signal แข็งแรงที่สุด เพราะถูกกล่าวถึงในคำอธิบายเกม Roblox แต่ exact rewards ยังไม่เผยแพร่จนกว่าจะมีผลในเกม",
    reasonLabel: "ทำไมยัง pending",
    defaultReason: "ยังไม่มี in-game redemption result และ exact reward quantity ที่บันทึกไว้",
    statusLabels: { pending: "Pending", verified: "Verified", "not verified": "Not verified", "official-page-mentioned": "Roblox page mentioned" }
  },
  conflictMatrix: {
    eyebrow: "Code claim conflict check",
    title: "Claims ที่ยังไม่เลื่อนเป็น active",
    description: "บางเว็บแสดง MACHI, race reroll rewards หรือ exact reward numbers หน้านี้แยก claim เหล่านั้นออกจาก Roblox-page-mentioned leads",
    siteStatusLabel: "สถานะเว็บนี้",
    externalClaimsLabel: "External claim",
    reasonLabel: "เหตุผล",
    notVerifiedLabel: "Held pending",
    defaultReason: "ยังไม่ยืนยันจากหน้า Roblox หรือ in-game test ใน source pass นี้"
  },
  verificationWorkflow: {
    eyebrow: "Verification workflow",
    title: "โค้ด Wizard Alchemy จะกลายเป็น active ได้อย่างไร",
    cards: [
      {
        title: "1. Source check",
        list: [
          "ตรวจหน้าเกม Roblox ทางการก่อน",
          "เก็บ third-party code lists เป็น research leads เท่านั้น",
          "อย่า treat Discord หรือ video comments เป็น official ถ้าไม่มี developer-linked proof"
        ]
      },
      {
        title: "2. In-game test",
        list: [
          "Redeem เฉพาะใน Wizard Alchemy Roblox game UI",
          "บันทึก code text, date, server state และ exact reward result",
          "อย่าใช้ browser extensions, scripts หรือ code generators"
        ]
      },
      {
        title: "3. Publish rule",
        list: [
          "ย้ายโค้ดเข้า active เฉพาะเมื่อ source และ in-game evidence สอดคล้องกัน",
          "ไม่แต่ง race reroll counts หรือ reward names",
          "แยก expired, rejected และ community-reported claims ออกจากกัน"
        ]
      }
    ]
  },
  redeemGuide: {
    eyebrow: "How to redeem",
    title: "วิธี redeem Wizard Alchemy โค้ดอย่างปลอดภัย",
    steps: [
      "เปิดหน้า Wizard Alchemy Roblox ทางการ",
      "Launch เกมจาก Roblox ไม่ใช่ third-party code tool",
      "หา code, settings, rewards, utility หรือ redeem interface ภายในเกม",
      "ทดสอบ RELEASE และ WIZARD ก่อน เพราะถูกกล่าวถึงบนหน้า Roblox",
      "บันทึกผลจริงก่อน treat reward amount ว่า verified"
    ],
    note: "อย่าใส่ Roblox password, cookie, recovery code, session token หรือ two-factor code ลงใน Wizard Alchemy code site หรือ tool ใด ๆ"
  },
  sections: [
    {
      heading: "สรุปสถานะ Wizard Alchemy โค้ดตอนนี้",
      body: [
        "RELEASE และ WIZARD คือจุดเริ่มต้นที่ดีที่สุด เพราะถูกกล่าวถึงในคำอธิบายเกม Roblox",
        "MACHI ยังมีประโยชน์ในฐานะ research lead แต่หน้านี้ไม่ mark เป็น active หากไม่มีหลักฐานที่ดีกว่า"
      ],
      list: [
        "Active table: ว่างจนกว่าจะมี in-game test evidence",
        "Pending table: RELEASE และ WIZARD",
        "Community leads: MACHI ยัง unverified",
        "Reward quantities: ไม่เผยแพร่จนกว่าจะบันทึกจากในเกม"
      ]
    },
    {
      heading: "ทำไมยังไม่ใส่ reward แบบละเอียด",
      body: [
        "เว็บ third-party หลายแห่งแสดง race reroll quantities แต่การคัดลอกตัวเลขโดยไม่มี in-game test จะกลายเป็น fake precision",
        "หน้านี้จะใส่ exact rewards หลังจากตรวจ result ใน Wizard Alchemy แล้วเท่านั้น"
      ],
      list: [
        "ไม่แต่ง reroll counts",
        "ไม่คัดลอก Discord claims",
        "ไม่ใส่ script หรือ macro download links"
      ]
    }
  ],
  faq: [
    { q: "Wizard Alchemy โค้ดตอนนี้มีอะไรบ้าง?", a: "RELEASE และ WIZARD ถูกกล่าวถึงบนหน้า Roblox และเป็นโค้ดแรกที่ควรทดสอบ แต่เว็บนี้ยังเก็บเป็น pending จนกว่าจะมี in-game redemption result" },
    { q: "MACHI เป็น active code หรือไม่?", a: "MACHI อยู่ใน third-party code lists แต่หน้านี้เก็บเป็น community-reported จนกว่าจะมี Roblox-page proof หรือ in-game test" },
    { q: "ทำไมไม่มี reward ที่ verified?", a: "เพราะเว็บนี้ยังไม่มีผล redeem จากในเกม การเผยแพร่ reward quantities โดยไม่มี test จะเป็น fake precision" },
    { q: "ใช้ code tool redeem แทนได้ไหม?", a: "อย่าใช้ tools ที่ขอ Roblox credentials, cookies, recovery codes, session tokens, browser extensions หรือ script downloads" }
  ]
};
