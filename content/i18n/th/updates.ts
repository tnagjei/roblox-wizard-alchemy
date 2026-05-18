// input: Thai Wizard Alchemy updates page requirements
// output: typed Thai updates content object
// pos: th updates SEO content

import type { StrategyPageContent } from "@/lib/content/page-types";

export const thUpdatesPage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Updates | Release Notes, Codes & Source Tracker",
    description: "หน้าอัปเดต Wizard Alchemy สำหรับสถานะ release บน Roblox การเปลี่ยนคำอธิบาย หลักฐานโค้ด Discord ที่ยัง pending และกฎตรวจสอบ changelog ในอนาคต"
  },
  slug: "updates",
  hero: {
    eyebrow: "Source tracker",
    h1: "Wizard Alchemy Updates",
    lede: "หน้านี้ติดตามเฉพาะข้อมูล Wizard Alchemy ที่ตรวจสอบได้: หน้าเกม Roblox ที่เผยแพร่แล้ว, ผู้พัฒนา Muggle Academy, คำอธิบาย gameplay สาธารณะ และ code leads RELEASE กับ WIZARD ส่วน patch notes, Discord, MACHI และจำนวน reward ยังเป็น pending จนกว่าจะมีหลักฐานที่ดีกว่า",
    primaryAction: { label: "Check codes", href: "/th/codes/" },
    secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
  },
  summaryCards: [
    {
      title: "Release page verified",
      description: "Wizard Alchemy มีหน้าเกม Roblox สาธารณะ พร้อมชื่อ released และ attribution ไปยัง Muggle Academy"
    },
    {
      title: "Codes changed carefully",
      description: "RELEASE และ WIZARD ถูกติดตามเป็น Roblox-page-mentioned leads ไม่ใช่ active codes ที่เว็บนี้ทดสอบในเกมแล้ว"
    },
    {
      title: "Patch claims pending",
      description: "Discord, Trello, MACHI, race reroll quantities, race tiers และ balance notes ยังไม่ผ่านการยืนยันใน source pass รอบแรก"
    }
  ],
  sections: [
    {
      heading: "Current verified snapshot",
      body: [
        "แหล่งข้อมูลสาธารณะหลักคือหน้าเกม Roblox ทางการ ซึ่งระบุว่า Wizard Alchemy เป็น Roblox wizard RPG โดย Muggle Academy",
        "กรอบ gameplay ที่เขียนได้อย่างปลอดภัยยังเป็นภาพรวมกว้าง: เก็บ ingredients, ปรุง potions, ปลดล็อก spells, เพิ่ม power และสำรวจ magical areas หน้านี้จะไม่ขยายข้อมูลกว้าง ๆ ให้กลายเป็น stat หรือ tier ranking ปลอม"
      ],
      list: [
        "Game page: verified public Roblox source",
        "Developer attribution: Muggle Academy",
        "Gameplay loop: ingredients, potions, spells, power, exploration",
        "Official Discord: still pending",
        "Detailed patch log: still pending"
      ]
    },
    {
      heading: "Code update policy",
      body: [
        "โค้ดจะไม่ถูกเผยแพร่เป็น fully active เพียงเพราะมีเว็บหนึ่งกล่าวถึง ต้องมีทั้ง source evidence และ in-game redemption evidence ที่สอดคล้องกัน",
        "RELEASE และ WIZARD ตอนนี้เป็น source-backed leads เพราะอยู่ในคำอธิบาย Roblox ส่วน MACHI เป็น third-party lead เท่านั้น"
      ],
      list: [
        "ถ้า source กล่าวถึง code ให้ย้ายเข้า pending ก่อน",
        "ย้ายเข้า active เฉพาะเมื่อมี in-game redemption record",
        "อย่าเผยแพร่ exact rewards โดยไม่มีผลจากในเกม",
        "แยก community reports ออกจาก Roblox-page mentions"
      ]
    },
    {
      heading: "Pending update queue",
      body: [
        "หัวข้อต่อไปนี้ต้องตรวจสอบก่อนจะกลายเป็น standalone guide pages หรือ indexed sections",
        "เป้าหมายไม่ใช่การคัดลอกเว็บคู่แข่ง แต่คือการเปลี่ยน claim ที่มีประโยชน์ให้เป็น update ที่มีหลักฐานรองรับ"
      ],
      list: [
        "ตำแหน่ง code redemption UI",
        "MACHI ใช้งานได้จริงในเกมหรือไม่",
        "ผล reward ที่แม่นยำของ RELEASE และ WIZARD",
        "Discord invite เชื่อมโยงจาก developer จริงหรือไม่",
        "parry, ascension, shards, races และ boss farming เป็น core mechanics หรือไม่"
      ]
    },
    {
      heading: "What will not be treated as an update",
      body: [
        "การที่ third-party guide เผยแพร่ claim หนึ่ง ไม่ได้แปลว่าเว็บนี้จะบันทึกเป็น update ทันที",
        "claim ที่มีประโยชน์เข้า research queue ได้ แต่จะยังไม่เป็น verified update หากไม่มีหลักฐานที่แข็งแรงกว่า"
      ],
      list: [
        "ไม่คัดลอก race tier changes",
        "ไม่แต่ง balance notes",
        "ไม่เขียน unofficial Discord links เป็น official sources",
        "ไม่เขียน reward quantities หากไม่มี test proof",
        "ไม่อ้างอิง script หรือ macro download"
      ]
    }
  ],
  relatedLinks: [
    { href: "/th/codes/", title: "Codes", description: "ดู RELEASE, WIZARD, MACHI และระดับหลักฐานของแต่ละ code claim" },
    { href: "/th/beginners-guide/", title: "Beginner Guide", description: "เริ่มเกมอย่างปลอดภัยก่อนเชื่อคำแนะนำ race หรือ reroll ที่ยังไม่ได้ยืนยัน" },
    { href: "/th/", title: "Guide hub", description: "กลับไปหน้าแรกเพื่อดู quick facts, source status และ research backlog" }
  ],
  faq: [
    {
      q: "นี่คือ patch log เต็มของ Wizard Alchemy หรือไม่?",
      a: "ไม่ใช่ นี่คือ source tracker สำหรับเวอร์ชันแรก patch log เต็มต้องมี official หรือ in-game changelog evidence"
    },
    {
      q: "ทำไม Discord และ Trello ยังเป็น pending?",
      a: "ต้องมี developer-linked proof จากหน้า Roblox, Muggle Academy community หรือ official source ที่ชัดเจนก่อนจึงจะถือว่า official"
    },
    {
      q: "RELEASE และ WIZARD จะเป็น active codes เมื่อไหร่?",
      a: "ต้องมี successful in-game redemption result และ exact reward ที่เว็บนี้บันทึกก่อน จึงจะย้ายจาก pending เป็น active"
    },
    {
      q: "third-party guides ทำให้เว็บนี้อัปเดตได้ไหม?",
      a: "ทำให้เกิด research tasks ได้ แต่จะไม่กลายเป็น verified updates หากไม่มีหลักฐานที่แข็งแรงกว่า"
    }
  ]
};
