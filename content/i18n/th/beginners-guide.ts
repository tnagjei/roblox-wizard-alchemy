// input: Thai Wizard Alchemy beginner guide requirements
// output: typed Thai beginner guide content object
// pos: th beginners-guide SEO content

import type { StrategyPageContent } from "@/lib/content/page-types";

export const thBeginnersGuidePage: StrategyPageContent = {
  meta: {
    title: "Wizard Alchemy Beginner Guide | First Session, Codes & Safe Progression",
    description: "คู่มือเริ่มต้น Wizard Alchemy สำหรับเส้นทางเล่นครั้งแรก การใช้โค้ดอย่างระวัง การพัฒนา Potion การต่อสู้พื้นฐาน และขอบเขตความปลอดภัยของบัญชี Roblox"
  },
  slug: "beginners-guide",
  hero: {
    eyebrow: "Beginner route",
    h1: "Wizard Alchemy Beginner Guide",
    lede: "เริ่มจากข้อมูลที่ตรวจสอบได้: เก็บวัตถุดิบ ปรุง Potion ปลดล็อก Spell เพิ่มพลัง และสำรวจพื้นที่เวทมนตร์ คู่มือนี้ให้เส้นทางเล่นครั้งแรกแบบปลอดภัย โดยไม่แต่ง race tier, จำนวนรางวัล หรือ build ranking เอง",
    primaryAction: { label: "Check codes", href: "/th/codes/" },
    secondaryAction: { label: "Open Roblox page", href: "roblox", external: true }
  },
  summaryCards: [
    {
      title: "First 10 minutes",
      description: "เรียนรู้ UI เก็บวัตถุดิบพื้นฐาน ทดสอบระบบ Potion และอย่าใช้ทรัพยากรหายากก่อนตรวจสอบกลไกจริง"
    },
    {
      title: "Code caution",
      description: "RELEASE และ WIZARD เป็นโค้ดที่หน้า Roblox กล่าวถึง แต่รางวัลจริงและตำแหน่ง redeem UI ยังต้องทดสอบในเกม"
    },
    {
      title: "No fake meta",
      description: "Race tier, element ที่ดีที่สุด, boss farming และลำดับ reroll ยังเป็นข้อมูล pending จนกว่าจะมีหลักฐานที่ดีกว่า"
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
        "ทดสอบผลของ potion ในเกมก่อนเชื่อตารางจากภายนอก",
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
        "อย่าใช้ reroll ทันทีเพียงเพราะเว็บอื่นบอกว่า race หนึ่งเป็น S-tier",
        "อย่าใช้ code generator หรือ script tool ภายนอก",
        "อย่าเผยแพร่จำนวนรางวัลจนกว่าจะมีบันทึกจากในเกม",
        "MACHI ยังเป็น pending จนกว่าจะมีแหล่งที่แข็งแรงกว่าหรือผลทดสอบในเกม"
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
    { href: "/th/codes/", title: "Codes", description: "ตรวจสอบ RELEASE, WIZARD, MACHI และสถานะหลักฐานก่อน redeem" },
    { href: "/th/updates/", title: "Updates", description: "ดูการเปลี่ยนแปลงจากแหล่งสาธารณะที่ตรวจสอบได้ก่อนเชื่อ patch หรือ balance claim" },
    { href: "/th/", title: "Guide hub", description: "กลับไปหน้าแรกเพื่อดู source status, pending topics และ research backlog" }
  ],
  faq: [
    {
      q: "ผู้เริ่มต้นควรทำอะไรก่อนใน Wizard Alchemy?",
      a: "เปิดจากหน้า Roblox ทางการ เรียนรู้ UI เก็บวัตถุดิบ ทดสอบ potion flow และอย่าใช้ reroll หรือไล่ตาม race claim ก่อนตรวจสอบกลไกจริง"
    },
    {
      q: "ควรใช้ RELEASE และ WIZARD ทันทีไหม?",
      a: "สองโค้ดนี้อยู่ในคำอธิบายเกมบน Roblox จึงเป็นโค้ดแรกที่ควรทดสอบ แต่รางวัลจริงต้องบันทึกจากในเกมก่อนถือว่า verified"
    },
    {
      q: "MACHI ใช้ได้ปลอดภัยไหม?",
      a: "MACHI ปรากฏใน claim จากเว็บอื่น แต่เว็บนี้ยังเก็บเป็น pending จนกว่าจะมีหลักฐานที่แข็งแรงกว่าหรือผลทดสอบในเกม"
    },
    {
      q: "ผู้เริ่มต้นควรตาม race tier list ตอนนี้ไหม?",
      a: "ยังไม่ควร Race ranking และลำดับ reroll ต้องมีข้อมูลเกมที่ตรวจสอบได้ก่อนจึงเหมาะกับการตัดสินใจช่วงต้นเกม"
    }
  ]
};
