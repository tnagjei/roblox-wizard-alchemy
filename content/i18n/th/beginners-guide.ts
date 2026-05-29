// input: Thai Wizard Alchemy beginner guide requirements plus week-1 Thai search signals
// output: typed Thai beginner guide content object with stronger internal links to updates and codes
// pos: th beginners-guide SEO content（更新规则：泰语新手页标题、首屏或内链调整需同步此文件与所属目录 README）

import type { StrategyPageContent } from "@/lib/content/page-types";

export const thBeginnersGuidePage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Beginner Guide | Thai First Session, Updates & Codes",
    description: "คู่มือเริ่มต้น Wizard Alchemy ภาษาไทย สำหรับเส้นทางเล่นครั้งแรก อัปเดต โค้ด Potion การต่อสู้พื้นฐาน และขอบเขตความปลอดภัยของบัญชี Roblox"
  },
  slug: "beginners-guide",
  hero: {
    eyebrow: "Thai beginner route",
    h1: "Wizard Alchemy Beginner Guide",
    lede: "เริ่มจากข้อมูลที่ตรวจสอบได้: เก็บวัตถุดิบ ปรุง Potion ปลดล็อก Spell เพิ่มพลัง และสำรวจพื้นที่เวทมนตร์ ถ้าต้องการข้อมูลล่าสุด ให้เริ่มจากหน้า Updates แล้วค่อยตรวจ Codes อย่างระวัง",
    primaryAction: { label: "ดู Updates", href: "/th/updates/" },
    secondaryAction: { label: "Check codes", href: "/th/codes/" }
  },
  summaryCards: [
    {
      title: "First 10 minutes",
      description: "เรียนรู้ UI เก็บวัตถุดิบพื้นฐาน ทดสอบระบบ Potion และอย่าใช้ทรัพยากรหายากก่อนตรวจสอบกลไกจริง"
    },
    {
      title: "Update first",
      description: "ถ้าคุณค้นหา Wizard Alchemy หลังมีการเปลี่ยนแปลง ให้ดู Updates ก่อนเชื่อ patch, map, potion หรือ race claim"
    },
    {
      title: "Code caution",
      description: "RELEASE และ WIZARD เป็นโค้ดที่หน้า Roblox กล่าวถึง แต่รางวัลจริงและตำแหน่ง redeem UI ยังต้องทดสอบในเกม"
    }
  ],
  sections: [
    {
      heading: "First-session route",
      body: [
        "เปิด Wizard Alchemy จากหน้า Roblox ทางการ และใช้รอบแรกเพื่อเรียนรู้ UI แทนการรีบเชื่อ tier list จากเว็บอื่น",
        "เป้าหมายแรกคือเข้าใจ loop พื้นฐานจากคำอธิบายเกม: เก็บ resource, ปรุง potion, ปลดล็อก spell, เพิ่มพลัง และไปยังพื้นที่ใหม่"
      ],
      list: [
        "เปิดเกมจากหน้า Roblox ทางการ",
        "หาเมนูพื้นฐาน เช่น settings, inventory, spell และ reward interface",
        "เก็บวัตถุดิบก่อนตัดสิน build หรือ race",
        "อ่าน /th/updates/ ก่อน หากต้องการดูการเปลี่ยนแปลงล่าสุด",
        "ถ้าเจอ code UI ให้บันทึกตำแหน่งไว้ แต่อย่าเดารางวัลเอง"
      ]
    },
    {
      heading: "Code and reroll warning",
      body: [
        "เว็บคู่แข่งบางแห่งแสดง MACHI และจำนวน race reroll ที่แน่นอน ข้อมูลเหล่านี้ใช้เป็น research lead ได้ แต่ยังไม่พอสำหรับ active code table ของเว็บนี้",
        "RELEASE และ WIZARD ควรทดสอบก่อน เพราะอยู่ในคำอธิบายเกมบน Roblox แต่ยังต้องบันทึกผลในเกมก่อน"
      ],
      list: [
        "ตรวจ /th/codes/ ก่อนใช้โค้ดหรือเชื่อ reward claim",
        "อย่าใช้ reroll ทันทีเพียงเพราะเว็บอื่นบอกว่า race หนึ่งเป็น S-tier",
        "อย่าใช้ code generator หรือ script tool ภายนอก",
        "อย่าเผยแพร่จำนวนรางวัลจนกว่าจะมีบันทึกจากในเกม",
        "MACHI ยังเป็น pending จนกว่าจะมีแหล่งที่แข็งแรงกว่าหรือผลทดสอบในเกม"
      ]
    },
    {
      heading: "Update-aware beginner path",
      body: [
        "ข้อมูลของเกม Roblox เปลี่ยนได้เร็ว ผู้เล่นใหม่ควรดูหน้า Updates ก่อนตัดสินว่า code, potion, chest route หรือ race ranking ยังใช้ได้อยู่หรือไม่",
        "ถ้า update ใหม่เปลี่ยน map หรือระบบ potion คำแนะนำเก่าจากเว็บอื่นอาจล้าสมัยทันที"
      ],
      list: [
        "ดู /th/updates/ เพื่อเช็ก source tracker",
        "กลับมาที่ /th/codes/ เพื่อตรวจ code evidence",
        "ใช้ Beginner Guide เป็นเส้นทางเล่น ไม่ใช่ตาราง meta สุดท้าย",
        "อย่าเชื่อ exact rewards หากไม่มี in-game record"
      ]
    },
    {
      heading: "What to verify next",
      body: [
        "หัวข้อที่มีประโยชน์สำหรับผู้เริ่มต้นค่อนข้างชัด แต่ส่วนใหญ่ต้องมีหลักฐานจากเกมจริงก่อนจะกลายเป็นคำแนะนำสุดท้าย",
        "หน้านี้ควรขยายจากการตรวจสอบในเกม ไม่ใช่คัดลอกตาราง race, element หรือ farming จากเว็บคู่แข่ง"
      ],
      list: [
        "ตำแหน่ง code redemption UI",
        "ใช้ Settings, Utilities หรือเมนูอื่นในการกรอกโค้ดหรือไม่",
        "Potion ส่งผลต่อ early power progression อย่างไร",
        "Resource ใดพบง่าย หายาก หรือเป็นคอขวด",
        "parry, ascension, shards, races และ boss farming เป็นกลไก early-game จริงหรือไม่"
      ]
    },
    {
      heading: "Account safety rules",
      body: [
        "หน้า guide ของ Wizard Alchemy ไม่ควรถามข้อมูลลับของบัญชี Roblox เครื่องมือหรือเว็บใดที่ขอข้อมูลเหล่านี้ควรถูกมองว่าไม่ปลอดภัย",
        "Guide ที่ปลอดภัยอธิบายตำแหน่งในเกมได้ แต่ไม่ควรขอ extension, cookie, download หรือ script execution"
      ],
      list: [
        "อย่าใส่ Roblox password, cookie, session token หรือ recovery code",
        "หลีกเลี่ยง script และ macro download จากคอมเมนต์หรือหน้า code",
        "Redeem code เฉพาะใน UI ของเกม Roblox",
        "เริ่มจากหน้า Roblox ทางการและแหล่งที่ developer เชื่อมไว้"
      ]
    }
  ],
  relatedLinks: [
    { href: "/th/updates/", title: "Updates", description: "ดูการเปลี่ยนแปลงจากแหล่งสาธารณะที่ตรวจสอบได้ก่อนเชื่อ patch หรือ balance claim" },
    { href: "/th/codes/", title: "Codes", description: "ตรวจสอบ RELEASE, WIZARD, MACHI และสถานะหลักฐานก่อน redeem" },
    { href: "/th/", title: "Guide hub", description: "กลับไปหน้าแรกเพื่อดู source status, pending topics และ research backlog" }
  ],
  faq: [
    {
      q: "ผู้เริ่มต้นควรทำอะไรก่อนใน Wizard Alchemy?",
      a: "เปิดจากหน้า Roblox ทางการ เรียนรู้ UI เก็บวัตถุดิบ ทดสอบ potion flow และดูหน้า Updates ก่อนเชื่อ claim ใหม่จากเว็บอื่น"
    },
    {
      q: "ควรดู Updates หรือ Codes ก่อน?",
      a: "ถ้าคุณต้องการข้อมูลล่าสุด ให้ดู Updates ก่อน ถ้าคุณต้องการ redeem ให้ไป Codes และตรวจ evidence label ก่อนใช้โค้ด"
    },
    {
      q: "ควรใช้ RELEASE และ WIZARD ทันทีไหม?",
      a: "สองโค้ดนี้อยู่ในคำอธิบายเกมบน Roblox จึงเป็นโค้ดแรกที่ควรทดสอบ แต่รางวัลจริงต้องบันทึกจากในเกมก่อนถือว่า verified"
    },
    {
      q: "ผู้เริ่มต้นควรตาม race tier list ตอนนี้ไหม?",
      a: "ยังไม่ควร Race ranking และลำดับ reroll ต้องมีข้อมูลเกมที่ตรวจสอบได้ก่อนจึงเหมาะกับการตัดสินใจช่วงต้นเกม"
    }
  ]
};
