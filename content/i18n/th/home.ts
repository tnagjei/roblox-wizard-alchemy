// input: Thai homepage requirements plus week-1 Thai search signals
// output: typed Thai homepage content object with stronger updates and codes entry points
// pos: th homepage SEO content（更新规则：泰语首页标题、首屏或内链调整需同步此文件与所属目录 README）

import { createTemplateHomePage } from "@/lib/content/template-pages";

const page = createTemplateHomePage("th");

page.meta.title = "Wizard Alchemy Guide ภาษาไทย | Updates, Codes & Beginner Tips";
page.meta.description = "คู่มือ Wizard Alchemy ภาษาไทย สำหรับ Roblox updates, codes, beginner tips, potion progress และ source-labeled research notes.";
page.hero.lede = "คู่มือ Wizard Alchemy ภาษาไทยสำหรับผู้เล่น Roblox เริ่มจาก Updates เพื่อตรวจข้อมูลล่าสุด จากนั้นดู Codes และ Beginner Guide โดยแยกข้อมูลที่ verified, source-reported และ pending ออกจากกัน";
page.hero.primaryAction = { label: "ดู Updates", href: "/th/updates/" };
page.hero.secondaryAction = { label: "Check codes", href: "/th/codes/" };
page.directory.title = "หน้าแนะนำสำหรับผู้เล่นไทย";
page.directory.cards = [
  { href: "/th/updates/", title: "Updates", description: "ติดตาม Wizard Alchemy update, patch claim, code mention และข้อมูลที่ยัง pending จากแหล่งที่ตรวจสอบได้" },
  { href: "/th/beginners-guide/", title: "Beginner Guide", description: "เริ่มเล่นอย่างปลอดภัยก่อนเชื่อ race, potion, chest หรือ reroll claim จากเว็บอื่น" },
  { href: "/th/codes/", title: "Codes", description: "ตรวจ RELEASE, WIZARD และ MACHI พร้อมระดับหลักฐานก่อน redeem" }
];
page.popularSearches = [
  { href: "/th/updates/", title: "Wizard Alchemy Updates", description: "เหมาะสำหรับผู้เล่นที่ต้องการดูการเปลี่ยนแปลงล่าสุดและ source tracker", coversLabel: "Covers", covers: "Update · Patch · Source" },
  { href: "/th/beginners-guide/", title: "Wizard Alchemy Beginner Guide", description: "เส้นทางเริ่มเล่นสำหรับผู้เล่นไทย โดยไม่แต่งข้อมูล reward หรือ tier ranking", coversLabel: "Covers", covers: "Beginner · Potion · Safety" },
  { href: "/th/codes/", title: "Wizard Alchemy Codes", description: "ตรวจโค้ดและสถานะหลักฐานก่อนใช้ใน Roblox UI", coversLabel: "Covers", covers: "RELEASE · WIZARD · MACHI" }
];
page.faq = [
  { q: "ควรเริ่มอ่านหน้าไหนก่อน?", a: "ถ้าต้องการข้อมูลล่าสุด ให้เริ่มที่ Updates ถ้าเพิ่งเล่น ให้เริ่มที่ Beginner Guide แล้วค่อยไป Codes" },
  { q: "หน้านี้เป็นเว็บทางการของ Wizard Alchemy ไหม?", a: "ไม่ใช่ นี่คือ independent fan guide และไม่ได้เป็นตัวแทนของ Roblox Corporation หรือ Muggle Academy" },
  { q: "ทำไมบางข้อมูลยัง pending?", a: "เพราะ code reward, race ranking, potion recipe และ Discord link ต้องมี official หรือ in-game evidence ก่อนจึงจะถือว่า verified" }
];

export const thHomePage = page;
