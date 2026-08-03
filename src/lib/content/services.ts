// Single source of truth for all Services copy (detail pages + index).
// English is authoritative; Simplified Chinese is auto-placeholdered from it
// until real translations are supplied via the `zhHans*` override maps below.

import type { Metadata } from "next";
import type { ServiceContent } from "@/components/site/ServicePage";
import { type Locale, localePath, alternatesFor } from "@/lib/i18n";
import { placeholderize } from "./placeholder";

/* ------------------------------------------------------------------ *
 * Service detail pages
 * ------------------------------------------------------------------ */

const en: Record<string, ServiceContent> = {
  "close-protection": {
    slug: "close-protection",
    title: "Close Protection",
    eyebrow: "Close Protection",
    promise:
      "Embedded, principal-focused protection that runs beside the client's day — quiet in ordinary moments, decisive in critical ones.",
    coversHeading: "A protective presence built around a single life.",
    coversBody: [
      "Close protection is the discipline of keeping one person — the principal — safe across the entire fabric of their day. It is not manned guarding, and it is not a uniform on a door. It is a small team of experienced operators who understand the principal's routine, movements, associates and pressures, and who quietly remove the friction and the risk that would otherwise touch them.",
      "A Guardion close-protection engagement typically combines a lead operator who works directly alongside the principal, a security driver, and — where the threat picture warrants it — a residence and advance capability. Numbers are set by requirement, not by theatre. In most cases the principal barely notices we are working; that is the intent.",
      "Every detail is planned to a written operations order and rehearsed in advance. Journeys are surveyed, venues are walked, communications are tested, and contingencies for medical, mechanical and hostile events are agreed before the principal leaves the door.",
    ],
    coversPoints: [
      "Personal escort — daily movements, meetings, evenings",
      "Advance work — venue, route and access reconnaissance",
      "Security driving integrated as standard",
      "Discreet baggage, hotel and residence coordination",
      "Medical and trauma-trained operators",
      "Encrypted communications between the team",
    ],
    howHeading: "A small, rehearsed team — never an entourage.",
    steps: [
      { title: "Consult", body: "A confidential conversation with a principal of the firm to understand the person, the concerns and the calendar ahead. Nothing is put in writing until you agree it should be." },
      { title: "Assess", body: "A written protective assessment: threat picture, exposure points across the routine, residence and travel, and the operator profile and posture that fits the principal's life." },
      { title: "Deploy", body: "A selected team with a lead operator as your single point of contact. Advance work, driver, communications and medical kit are in place before the first movement." },
      { title: "Review", body: "A quiet debrief on close of engagement — what was seen, what was adjusted, and any residual risk worth acting on. Standing details are reviewed on a set cadence." },
    ],
    whoHeading: "For principals whose day cannot be interrupted.",
    whoBody:
      "Close protection suits people whose profile, wealth, work or personal circumstances create sustained exposure — and who need that exposure managed without turning their life into a security operation. It is equally suited to a short, sensitive window: a court appearance, a public announcement, a family transition, an unwelcome contact.",
    whoList: [
      "High-net-worth individuals and their immediate family",
      "Executives and founders with a public profile",
      "Visiting principals requiring an Australian-based team",
      "Individuals subject to a specific, identified threat",
    ],
    exampleTitle: "A standing detail for a family with young children, structured to be invisible.",
    exampleBody:
      "Following a credible intrusion attempt at a family home, Guardion stood up a small standing detail for the principals and their children. Operators were selected for demeanour as much as capability; school drop-offs, weekend sport and household deliveries were quietly absorbed into the protective routine. Over eighteen months the family reported no further incidents and — importantly to them — no visible change to their children's experience of ordinary life.",
    closingNote: "Details and identifying facts are altered to protect the client.",
  },

  "executive-protection": {
    slug: "executive-protection",
    title: "Executive Protection",
    eyebrow: "Executive Protection",
    promise:
      "Coordinated security for executives across travel, meetings and public appearances — planned around the calendar, not bolted onto it.",
    coversHeading: "Corporate exposure, quietly managed.",
    coversBody: [
      "Executive protection is close protection built for corporate life. The principal is a chief executive, chair, founder, general counsel or public-facing spokesperson; the exposure moves with earnings announcements, hostile transactions, activist attention, redundancies, litigation and media cycles. The requirement is protection that fits inside a professional calendar without becoming the subject of it.",
      "Guardion works alongside the executive's office — most often a chief of staff, executive assistant or in-house security lead — as a discreet extension of the team. We do not brand ourselves in front of colleagues, clients or shareholders. Operators arrive dressed for the room, brief in advance and step back the moment the requirement passes.",
      "Engagements range from a single sensitive movement — an AGM, a site closure, a difficult all-hands — to standing programs for a named executive across an entire year of travel and appearances. Domestic and international legs are stitched together so the principal experiences one continuous, coordinated service.",
    ],
    coversPoints: [
      "AGMs, earnings days and public announcements",
      "Domestic and international business travel",
      "Airport meet-and-assist and lounge coordination",
      "Site visits, town halls and difficult conversations",
      "Media appearances and industry conferences",
      "Family protection during executive exposure",
    ],
    howHeading: "Integrated with the office, invisible to the room.",
    steps: [
      { title: "Brief", body: "A confidential briefing with the executive and, where appropriate, chief of staff or in-house counsel. We map the calendar, the exposure, and the internal appetite for visibility." },
      { title: "Plan", body: "A protective plan per movement or per program — routes, venues, hotels, drivers, contingencies and communications — signed off before anything is booked in the principal's name." },
      { title: "Execute", body: "A named lead operator runs each movement. Advance work, driver and any local partner are already in position. Colleagues meeting the executive rarely realise a team is present." },
      { title: "Report", body: "A short written report to the nominated office contact after each movement, and a quarterly review of the standing program — what is working, what should change, what should stop." },
    ],
    whoHeading: "For offices that need protection to behave like professional services.",
    whoBody:
      "Executive protection suits organisations whose leadership carries genuine — not theatrical — exposure, and who want that exposure handled with the same discretion they expect from external counsel or a family office. It is regularly engaged by ASX-listed companies, private groups, family offices and their advisers on behalf of a named principal.",
    whoList: [
      "Chief executives, chairs and founders",
      "Boards commissioning protection for a director",
      "General counsel managing hostile litigation exposure",
      "Chiefs of staff coordinating international travel",
    ],
    exampleTitle: "An international travel program built around a chief executive's quarterly cycle.",
    exampleBody:
      "For a listed-company chief executive whose role required regular travel across Asia, Europe and North America, Guardion built a rolling protective travel program keyed to the earnings calendar. An Australian lead operator travelled with the principal; local partners in each destination were briefed to a common standard and handed off through a single named point of contact. Over two years the program absorbed several sensitive announcements, a boardroom transition and one credible threat referral, without any of it becoming visible externally.",
    closingNote: "Details and identifying facts are altered to protect the client.",
  },

  "residential-security": {
    slug: "residential-security",
    title: "Residential Security",
    eyebrow: "Residential Security",
    promise:
      "Layered protection of the home — assessed, hardened and, where required, quietly manned around the clock.",
    coversHeading: "The address treated as a considered environment.",
    coversBody: [
      "The home is where a principal is least on guard and most identifiable. It is where family members, staff, deliveries and contractors intersect on a daily basis, and where a lapse is felt most acutely. Guardion approaches residential security as an environment to be understood before it is defended: how the property is used, who has access, how information about the family circulates, and where the real vulnerabilities sit.",
      "Our residential work begins with a written assessment of the property and its routines. From there we recommend a proportionate response — often a combination of physical hardening, procedural changes for household staff, discreet electronic measures, and, when the threat picture warrants it, a standing residential team. The intent is a home that feels the same to the family as it always has, while quietly behaving differently.",
      "Where a standing team is in place, operators are selected for judgement and demeanour first. They understand household life, brief incoming staff and contractors, hold the perimeter without turning the driveway into a checkpoint, and coordinate with close-protection and driving teams when the family moves.",
    ],
    coversPoints: [
      "Written residential threat and vulnerability assessment",
      "Physical hardening advice — access, locks, glazing, lighting",
      "Procedures for household staff, deliveries and contractors",
      "Standing 24-hour residential teams where warranted",
      "Discreet electronic detection and response measures",
      "Coordination with close protection and security driving",
    ],
    howHeading: "Assess before we defend.",
    steps: [
      { title: "Survey", body: "A confidential site visit — usually presented to the household as an insurance or property review — to document the property, its routines and the people who move through it." },
      { title: "Report", body: "A written residential security report with prioritised recommendations, costed where possible, and separated into changes the household can make and work Guardion can perform." },
      { title: "Harden", body: "Implementation of agreed physical, procedural and electronic measures. Where staff behaviours need to change, we brief in person and in a language that does not alarm the family." },
      { title: "Sustain", body: "Ongoing review — quarterly or annually — plus a standing team where a persistent threat is present. New staff and contractors are re-briefed as a matter of routine." },
    ],
    whoHeading: "For families whose home is a known address.",
    whoBody:
      "Residential security suits principals whose address is publicly identifiable, whose household is large enough that access control has become informal, or whose circumstances — a media event, a legal dispute, a separation, an unwelcome contact — have suddenly made the home feel exposed. It is equally suited to a single-property review as it is to a standing multi-residence program.",
    whoList: [
      "Primary residences of high-net-worth families",
      "Secondary and holiday properties left empty for periods",
      "Executive residences during periods of corporate exposure",
      "Short-term hardening around a specific incident or event",
    ],
    exampleTitle: "A discreet upgrade to a family compound following a publicised event.",
    exampleBody:
      "After a family member's role attracted sustained public attention, Guardion conducted a full residential review of the primary home and a coastal property. Physical works were staged as ordinary renovations; household staff were re-briefed individually; a small standing team was placed on the primary residence for a defined window and stepped down as attention subsided. The family retained the character of both homes and, at their request, no household member outside the principals was ever told the reason for the changes.",
    closingNote: "Details and identifying facts are altered to protect the client.",
  },

  "security-driving": {
    slug: "security-driving",
    title: "Security Driving",
    eyebrow: "Security Driving",
    promise:
      "Trained protective drivers and vetted vehicles — the safest interval of any principal's day, treated with the seriousness it deserves.",
    coversHeading: "A vehicle is a small, mobile venue.",
    coversBody: [
      "The drive is where most principals are least protected and most predictable. A repeated route, a known vehicle and an unhardened driver together represent the single largest exposure in an otherwise well-managed day. Guardion's security driving service treats the vehicle as a mobile venue: a controlled environment that has been chosen, prepared and rehearsed in advance.",
      "Drivers are selected from operators with recognised protective driving qualifications and current state security licences. They are trained in surveillance detection, defensive and evasive driving, first aid and route planning, and they are matched to the principal — a driver for a family with young children is not the same driver we would place with a visiting executive.",
      "Vehicles are sourced discreetly, presentable rather than conspicuous, mechanically checked before each engagement and kept clean of anything that identifies the principal or their itinerary. Where the threat picture warrants, we can arrange armoured options through vetted partners.",
    ],
    coversPoints: [
      "Trained, licensed protective drivers",
      "Vetted, presentation-grade vehicles",
      "Pre-driven route planning with alternates",
      "Airport, hotel and residence coordination",
      "Integration with close and executive protection",
      "Armoured vehicle options through vetted partners",
    ],
    howHeading: "Route, vehicle and driver — all chosen before the door opens.",
    steps: [
      { title: "Scope", body: "A short call to confirm principals, dates, movements, luggage, family members and any specific concerns about the route, the destinations or the visibility of the vehicle." },
      { title: "Prepare", body: "Route survey and alternates driven in advance. Vehicle selected and inspected. Driver briefed on the principal, the itinerary and the communications plan for the day." },
      { title: "Drive", body: "Timings held quietly. The driver is early, calm and unobtrusive at every pick-up and drop-off. If a protection team is present, the driver is part of that team, not adjacent to it." },
      { title: "Close", body: "A short handover at end of engagement — anything observed on the route, on foot at venues or around the residence that the principal or the wider team should be aware of." },
    ],
    whoHeading: "For anyone whose calendar the vehicle sits inside.",
    whoBody:
      "Security driving is engaged both as a standalone service — a driver for a visiting family, an evening event, a difficult school run — and as an integrated component of close and executive protection. Many long-term clients begin with driving alone and expand from there as trust is established.",
    whoList: [
      "Visiting principals requiring an Australian-based driver",
      "Families with young children on repeated routines",
      "Executives during periods of heightened exposure",
      "Sensitive one-off movements — legal, medical, personal",
    ],
    exampleTitle: "A visiting family's Australian leg, driven end to end by a single vetted team.",
    exampleBody:
      "For an internationally based family visiting Australia over a school holiday, Guardion provided a lead driver and a second vehicle for luggage and staff across a three-week itinerary. Routes between the residence, private schools' summer programs and coastal destinations were driven in advance. The same driver was retained for the entire visit — a deliberate choice, so the children experienced continuity rather than a rotation of strangers.",
    closingNote: "Details and identifying facts are altered to protect the client.",
  },

  investigations: {
    slug: "investigations",
    title: "Investigations",
    eyebrow: "Investigations",
    promise:
      "Lawful, confidential private enquiries that produce evidence fit for court, board or family office — and, where warranted, a protective response from the same firm.",
    coversHeading: "Answers you can act on — and rely on in a hearing.",
    coversBody: [
      "Guardion's investigations practice exists to answer difficult questions properly. Enquiries are conducted by licensed investigators to a documented standard, with evidence gathered lawfully and preserved so it holds up if the matter goes further — into a courtroom, a board paper, a family office meeting, or a dispute between principals. Every step is designed with admissibility and confidentiality in mind from the outset.",
      "We do not take work that requires unlawful methods. We do not pretend to. Where a client's expectation cannot be met inside the law, we say so plainly and, where appropriate, propose a lawful alternative that will hold up under scrutiny. This is the discipline that makes our findings useful when it matters.",
      "Because Guardion also delivers protection, an investigation that uncovers a genuine threat does not end at a written report. Where the client wishes, the same firm can plan and stand up the protective response — end to end, under one relationship. It is the reason many clients come to us in the first place.",
    ],
    coversPoints: [
      "Threat assessments and person-of-interest enquiries",
      "Discreet surveillance conducted by licensed investigators",
      "Corporate and commercial due diligence",
      "Locating persons and asset tracing enquiries",
      "Workplace, fraud and misconduct investigations",
      "Evidence packages prepared for legal proceedings",
    ],
    howHeading: "Instructed carefully. Delivered admissibly.",
    steps: [
      { title: "Instruct", body: "A confidential meeting — often with the client's lawyer present — to define the question, the acceptable methods, the deliverable and the boundary at which the enquiry stops. Nothing begins until this is written and agreed." },
      { title: "Plan", body: "An investigative plan under the relevant state licence and privacy obligations. Where the matter is legally sensitive, we work at counsel's direction so material remains within legal professional privilege." },
      { title: "Enquire", body: "Fieldwork conducted quietly by licensed investigators. Surveillance, interviews and open-source enquiries are logged contemporaneously, with chain-of-custody maintained for anything intended as evidence." },
      { title: "Report", body: "A written report drafted for its audience — court, board or principal — supported by an evidence bundle. Where findings warrant it, we brief on protective options before the report is circulated." },
    ],
    whoHeading: "For lawyers, family offices and principals who need it done properly.",
    whoBody:
      "The investigations practice is engaged most often by legal counsel, family offices, corporate boards and private principals dealing with a specific concern — a threat, a dispute, an insider issue, a missing person, an untested counterparty. Clients come to Guardion when a matter is sensitive enough that both the answer and the process for reaching it need to be defensible.",
    whoList: [
      "Law firms instructing on behalf of a client",
      "Family offices assessing counterparties or staff",
      "Boards responding to a suspected internal issue",
      "Individuals dealing with harassment, stalking or a persistent threat",
    ],
    exampleTitle: "A lawful enquiry into a persistent threat, followed by a coordinated protective response.",
    exampleBody:
      "Instructed through counsel, Guardion investigated a sustained pattern of contact directed at a principal and their family. Surveillance and open-source enquiries were conducted under state licence; the resulting evidence supported an application to court and was accepted without challenge. On the same instruction the firm stood up a discreet close-protection posture around the family and residence during the hearing period, drawing down as the risk subsided.",
    closingNote: "All identifying details are altered. Every enquiry is conducted within the law of the operating jurisdiction and under strict client confidentiality.",
  },

  "tailored-security": {
    slug: "tailored-security",
    title: "Tailored Security",
    eyebrow: "Tailored Security",
    promise:
      "Bespoke programs for events, sensitive transitions and threat pictures that do not fit inside a standard brochure.",
    coversHeading: "When the requirement is unusual, the response should be too.",
    coversBody: [
      "Not every requirement is a standing detail or a single driver. Some sit deliberately across categories: a private wedding on a remote property; a difficult family transition; a founder's public exit; a house move under media attention; a philanthropic visit to a sensitive region; the closure of a business unit. These situations reward planning rather than headcount, and they usually benefit from being handled by a single firm that can move between disciplines as the day requires.",
      "Tailored security engagements begin with the situation, not the service list. We spend time understanding what is actually being asked — the people involved, the sensitivities, what success looks like, what the client wants to avoid at all costs — and only then design the smallest, quietest program that meets it. In many cases the finished program combines close protection, security driving, a residential posture and an investigative strand under one point of accountability.",
      "The value here is coordination. A single principal of the firm owns the engagement end to end; the client does not have to translate between vendors, brief the same context twice, or reconcile competing accounts of what happened.",
    ],
    coversPoints: [
      "Private events, weddings and milestone gatherings",
      "Family transitions, separations and estate matters",
      "Corporate closures, redundancies and announcements",
      "Sensitive relocations and house moves",
      "Philanthropic or personal travel to unusual locations",
      "One-off engagements requiring several disciplines together",
    ],
    howHeading: "Designed to the situation, delivered as one program.",
    steps: [
      { title: "Listen", body: "An unhurried conversation with the principals or their advisers. We ask a lot of questions and write nothing down that has not been agreed. The goal at this stage is a shared understanding, not a proposal." },
      { title: "Design", body: "A written program tailored to the situation — the smallest, quietest arrangement that meets it. Disciplines are combined only where they earn their place; nothing is included because it fills a page." },
      { title: "Deliver", body: "A named lead runs the engagement across every strand — protection, driving, residence, enquiry — so the client speaks to one person and receives one account of the day." },
      { title: "Close", body: "A single written debrief and, where appropriate, a set of recommendations for what should be sustained, adjusted or stood down. Most tailored engagements end cleanly; some evolve into standing work." },
    ],
    whoHeading: "For situations a standard package would misread.",
    whoBody:
      "Tailored security is engaged when a requirement is genuinely unusual — in scale, in sensitivity, in the mix of disciplines needed — or when several ordinary requirements need to be handled together with a single point of accountability. Advisers, family offices and executive assistants often bring these engagements to us on behalf of a principal who does not want to explain the situation more than once.",
    whoList: [
      "Private events on non-standard venues or properties",
      "Family offices managing a sensitive transition",
      "Advisers coordinating protection alongside legal matters",
      "Principals who need several capabilities under one hand",
    ],
    exampleTitle: "A private wedding on a remote property, planned as a single unbranded program.",
    exampleBody:
      "For a private family wedding held on a rural property with expected media interest and a genuine security concern relating to one guest, Guardion designed a program combining an advance survey, discreet perimeter management, close protection for two principals, security driving for arrivals and departures, and a quiet investigative watch on the flagged individual. Guests experienced a well-run private event; the family experienced the day they had wanted; the flagged risk never became visible.",
    closingNote: "Details and identifying facts are altered to protect the client.",
  },
};

/** Real Simplified Chinese detail-page copy, keyed by slug. */
const zhHans: Partial<Record<string, ServiceContent>> = {
  "close-protection": {
    slug: "close-protection",
    title: "贴身护卫",
    eyebrow: "贴身护卫",
    promise:
      "以要客为中心、融入其日常的贴身保护——在平常时刻低调无声，在关键时刻果断有力。",
    coversHeading: "围绕一个人的生活而构建的保护存在。",
    coversBody: [
      "贴身护卫，是让一个人——要客——在其一整天的方方面面都保持安全的专业。它不是驻守看守，也不是门口的一身制服。它是一支由经验丰富的护卫人员组成的小型团队，他们了解要客的作息、行踪、往来之人与所承受的压力，并悄然化解本会触及要客的摩擦与风险。",
      "Guardion 的一次贴身护卫委托，通常由一名直接陪同要客的主护卫、一名安保驾驶员，以及——在威胁态势需要时——住所与前期踏勘力量共同组成。人手多寡由需求决定，而非为了排场。在大多数情况下，要客几乎察觉不到我们正在工作；这正是我们的用意。",
      "每一处细节都依照书面行动指令加以规划，并事先演练。行程经过勘察，场地经过实地踏勘，通讯经过测试，针对医疗、机械故障与敌意事件的应急预案，都在要客出门之前就已议定。",
    ],
    coversPoints: [
      "贴身陪同——日常出行、会议与夜间活动",
      "前期踏勘——场地、路线与出入通道侦察",
      "标配整合安保驾驶",
      "谨慎的行李、酒店与住所协调",
      "受过医疗与创伤救护训练的护卫人员",
      "团队之间的加密通讯",
    ],
    howHeading: "一支精干、经过演练的团队——绝非前呼后拥的随从。",
    steps: [
      { title: "咨询", body: "与公司负责人进行一次保密交谈，了解当事人、所关切之事以及未来的日程安排。在您同意之前，任何内容都不会形成书面记录。" },
      { title: "评估", body: "一份书面的保护评估：威胁态势，日常作息、住所与出行中的暴露点，以及契合要客生活的护卫人员配置与布置方式。" },
      { title: "部署", body: "一支精选团队，由一名主护卫担任您的唯一对接人。前期踏勘、驾驶员、通讯与医疗装备，都在首次行动之前就位。" },
      { title: "复盘", body: "委托结束时进行一次低调的总结——所见所察、所作调整，以及任何值得处理的残余风险。常驻警卫则按固定周期复盘。" },
    ],
    whoHeading: "适合那些日程不容打断的要客。",
    whoBody:
      "贴身护卫适合那些因知名度、财富、工作或个人处境而长期处于风险之中的人——他们需要有人来管理这种风险，却不愿让自己的生活变成一场安保行动。它同样适用于某个短暂而敏感的时段：一次出庭、一则公开声明、一次家庭变故，或一次不受欢迎的接触。",
    whoList: [
      "高净值人士及其直系家人",
      "具有公众知名度的高管与创始人",
      "需要澳大利亚本地团队的到访要客",
      "面临具体、已查明威胁的个人",
    ],
    exampleTitle: "为一个有年幼子女的家庭设立的常驻警卫，其布置力求不着痕迹。",
    exampleBody:
      "在一处家庭住所发生一起可信的入侵未遂事件后，Guardion 为这对要客夫妇及其子女设立了一支小型常驻警卫。护卫人员的挑选既看能力，也看举止；上下学接送、周末运动与家中收货，都被悄然纳入保护日常之中。在十八个月里，这个家庭未再报告任何事件，而且——对他们而言尤为重要的是——孩子们对平常生活的感受没有任何可见的改变。",
    closingNote: "为保护客户，细节与可识别身份的事实均已更改。",
  },

  "executive-protection": {
    slug: "executive-protection",
    title: "高管保护",
    eyebrow: "高管保护",
    promise:
      "在差旅、会议与公开露面中，为高管提供统筹协调的安保——围绕日程规划，而非事后勉强附加。",
    coversHeading: "企业层面的风险，悄然管理。",
    coversBody: [
      "高管保护，是为企业生活量身打造的贴身护卫。要客可能是首席执行官、董事长、创始人、总法律顾问或面向公众的发言人；风险随着业绩发布、敌意交易、维权股东的关注、裁员、诉讼与媒体周期而起伏。这里的需求，是让保护融入职业日程之中，而不会喧宾夺主。",
      "Guardion 与高管的办公团队——通常是幕僚长、高管助理或内部安全负责人——并肩协作，作为团队谨慎的延伸。我们不会在同事、客户或股东面前彰显自己。护卫人员的着装契合场合，事先接受简报，并在需求一过便即退到幕后。",
      "委托的范围，从单次敏感行程——一次股东年会、一处场所关闭、一场棘手的全员大会——到为某位指定高管跨越全年差旅与露面的常驻方案，不一而足。国内与国际的各段行程被串联为一体，让要客体验到一项连续、统筹的服务。",
    ],
    coversPoints: [
      "股东年会、业绩发布日与公开声明",
      "国内与国际商务差旅",
      "机场接送协助与贵宾室协调",
      "现场视察、员工大会与棘手谈话",
      "媒体露面与行业会议",
      "高管处于风险期间的家人保护",
    ],
    howHeading: "融入办公团队，隐于现场之外。",
    steps: [
      { title: "简报", body: "与高管，以及在适当情况下与幕僚长或内部法律顾问，进行一次保密简报。我们厘清日程、风险敞口，以及内部对「可见度」的接受程度。" },
      { title: "规划", body: "针对每次行程或每项方案制定保护计划——路线、场地、酒店、驾驶员、应急预案与通讯——在以要客名义预订任何事项之前即获签署确认。" },
      { title: "执行", body: "每次行程由一名指定的主护卫负责。前期踏勘、驾驶员与任何当地合作伙伴均已就位。与高管会面的同事，很少会意识到有一支团队在场。" },
      { title: "汇报", body: "每次行程结束后，向指定的办公对接人提交一份简短书面报告，并对常驻方案进行季度复盘——哪些行之有效、哪些应作调整、哪些应当停止。" },
    ],
    whoHeading: "适合那些希望保护像专业服务一样运作的办公团队。",
    whoBody:
      "高管保护适合那些领导层承受着真实——而非做作的——风险的机构，他们希望以对待外部法律顾问或家族办公室那样的谨慎，来处理这种风险。它常由澳交所上市公司、私营集团、家族办公室及其顾问，代某位指定要客委托。",
    whoList: [
      "首席执行官、董事长与创始人",
      "为某位董事委托保护的董事会",
      "应对敌意诉讼风险的总法律顾问",
      "统筹国际差旅的幕僚长",
    ],
    exampleTitle: "一套围绕某位首席执行官季度周期打造的国际差旅方案。",
    exampleBody:
      "某上市公司首席执行官的职务需要频繁往返于亚洲、欧洲与北美，Guardion 为其打造了一套与业绩发布日程相契合、滚动进行的保护性差旅方案。一名澳大利亚主护卫随行；各目的地的当地合作伙伴均按统一标准接受简报，并通过唯一的指定对接人交接。在两年间，该方案消化了数次敏感声明、一次董事会换届与一起可信的威胁转介，而这一切都未曾对外显露。",
    closingNote: "为保护客户，细节与可识别身份的事实均已更改。",
  },

  "residential-security": {
    slug: "residential-security",
    title: "住宅安保",
    eyebrow: "住宅安保",
    promise:
      "对住所的多层次保护——经过评估、加固，并在需要时全天候低调驻守。",
    coversHeading: "将住址视为一个需要通盘考量的环境。",
    coversBody: [
      "住所，是要客最放松警惕、也最容易被辨认的地方。家人、员工、送货与承包商每天在此交汇，一旦出现疏漏，后果也最为切身。Guardion 对待住宅安保，是先理解、后防护这样一个环境：房产如何使用、谁有出入权限、关于这个家庭的信息如何流传，以及真正的薄弱环节究竟在哪里。",
      "我们的住宅工作，从一份针对房产及其日常作息的书面评估开始。在此基础上，我们提出与之相称的应对——往往是物理加固、家庭员工流程调整、谨慎的电子措施的组合，并在威胁态势需要时，配置一支常驻住宅团队。其用意，是让这个家在家人感受中一如往常，却在暗中以不同的方式运作。",
      "在配置常驻团队时，护卫人员的挑选首先看判断力与举止。他们了解家庭生活，向新来的员工与承包商作简报，守住外围而不至于把车道变成检查站，并在家人外出时与贴身护卫及驾驶团队协同配合。",
    ],
    coversPoints: [
      "书面的住宅威胁与脆弱性评估",
      "物理加固建议——出入、门锁、玻璃与照明",
      "针对家庭员工、送货与承包商的流程",
      "在必要时配置 24 小时常驻住宅团队",
      "谨慎的电子侦测与响应措施",
      "与贴身护卫及安保驾驶的协同",
    ],
    howHeading: "先评估，后防护。",
    steps: [
      { title: "勘察", body: "一次保密的实地探访——通常以保险或房产检查的名义向家庭呈现——以记录房产、其日常作息，以及在其中往来的人。" },
      { title: "报告", body: "一份书面的住宅安保报告，载有按优先级排列、尽可能标注成本的建议，并区分为家庭自身可作的改动，以及可由 Guardion 承担的工作。" },
      { title: "加固", body: "落实已商定的物理、流程与电子措施。凡需要改变员工行为之处，我们都当面沟通，并以不会惊扰家庭的措辞进行。" },
      { title: "维系", body: "持续复盘——按季度或年度进行——并在存在持续威胁时配置常驻团队。新的员工与承包商会作为惯例重新接受简报。" },
    ],
    whoHeading: "适合那些住址已为人知的家庭。",
    whoBody:
      "住宅安保适合那些住址已可被公开辨认、家庭规模大到门禁管理已流于随意，或因某种处境——一次媒体事件、一场法律纠纷、一次分居、一次不受欢迎的接触——而突然感到住所毫无遮蔽的要客。它既适用于单处房产的审查，也适用于多处住所的常驻方案。",
    whoList: [
      "高净值家庭的主要住所",
      "长期空置的第二住所与度假房产",
      "企业风险期间的高管住所",
      "围绕某一具体事件或活动的短期加固",
    ],
    exampleTitle: "在一起被公开报道的事件之后，对一处家庭宅院进行的谨慎升级。",
    exampleBody:
      "在一位家庭成员的职务引来持续的公众关注之后，Guardion 对其主要住所与一处海滨房产进行了全面的住宅审查。物理施工以普通翻修的名义分阶段进行；家庭员工逐一重新接受简报；一支小型常驻团队在既定时段内驻守主要住所，并随着关注度消退而撤离。这个家庭保留了两处住所原有的格调，并且按其要求，除这对要客外，家中没有任何成员被告知这些改动的缘由。",
    closingNote: "为保护客户，细节与可识别身份的事实均已更改。",
  },

  "security-driving": {
    slug: "security-driving",
    title: "安保驾驶",
    eyebrow: "安保驾驶",
    promise:
      "受训的防卫驾驶员与经审核的车辆——要客一天中最安全的那段时间，也当以应有的郑重对待。",
    coversHeading: "车辆，是一个小型的移动场所。",
    coversBody: [
      "行车途中，是大多数要客最缺乏保护、也最容易被预判的时刻。一条重复的路线、一辆众所周知的车，加上一名未经训练的司机，共同构成了在其余安排妥当的一天里最大的一处风险敞口。Guardion 的安保驾驶服务，将车辆视为一个移动的场所：一个经过事先挑选、准备与演练的可控环境。",
      "驾驶员从持有公认防卫驾驶资格与有效州安保牌照的护卫人员中挑选。他们接受过反监视侦测、防卫与规避驾驶、急救与路线规划的训练，并会与要客相匹配——为有年幼子女的家庭配备的司机，与我们安排给到访高管的司机，并不相同。",
      "车辆以谨慎方式调配，讲究体面而非招摇，每次任务前都经过机械检查，并保持车内不留任何能暴露要客或其行程的物件。在威胁态势需要时，我们可通过经审核的合作伙伴安排防弹车选项。",
    ],
    coversPoints: [
      "受训、持牌的防卫驾驶员",
      "经审核、体面级别的车辆",
      "事先驶过的路线规划及备用路线",
      "机场、酒店与住所协调",
      "与贴身及高管保护的整合",
      "通过经审核合作伙伴提供的防弹车选项",
    ],
    howHeading: "路线、车辆与驾驶员——都在车门打开之前就已选定。",
    steps: [
      { title: "界定", body: "一通简短的电话，以确认要客、日期、行程、行李、家人，以及对路线、目的地或车辆显眼程度的任何具体顾虑。" },
      { title: "准备", body: "事先勘察路线并驶过备用路线。挑选并检查车辆。就要客、行程与当天的通讯方案，向驾驶员作简报。" },
      { title: "行车", body: "时间安排悄然把控。每一次上下车，驾驶员都提前抵达、沉着而不张扬。若有保护团队在场，驾驶员是团队的一员，而非置身其外。" },
      { title: "收尾", body: "任务结束时进行一次简短交接——在路线上、在场地步行途中或在住所周边所观察到的、要客或更大团队应当知悉的任何情况。" },
    ],
    whoHeading: "适合任何将车辆纳入其日程的人。",
    whoBody:
      "安保驾驶既可作为独立服务委托——为到访的家庭、一场晚间活动、一次棘手的上下学接送配备司机——也可作为贴身与高管保护的一个整合环节。许多长期客户都从单独的驾驶服务开始，并随着信任的建立而逐步拓展。",
    whoList: [
      "需要澳大利亚本地司机的到访要客",
      "有固定日常作息、育有年幼子女的家庭",
      "处于风险升高期的高管",
      "敏感的单次行程——法律、医疗、私人事务",
    ],
    exampleTitle: "一个到访家庭的澳大利亚行程，由同一支经审核的团队从头驾驶到尾。",
    exampleBody:
      "一个常驻海外的家庭利用假期到访澳大利亚，Guardion 为其为期三周的行程配备了一名主驾驶员，以及一辆载运行李与随行人员的第二辆车。住所、私立学校暑期项目与海滨目的地之间的路线，都事先驶过。整趟到访始终由同一名驾驶员负责——这是刻意为之，好让孩子们感受到的是连贯，而非陌生人的轮换。",
    closingNote: "为保护客户，细节与可识别身份的事实均已更改。",
  },

  investigations: {
    slug: "investigations",
    title: "调查",
    eyebrow: "调查",
    promise:
      "合法、保密的私人调查，所得证据可用于法庭、董事会或家族办公室——并在必要时，由同一家公司提供保护性应对。",
    coversHeading: "既可据以行动、又能在庭审中依凭的答案。",
    coversBody: [
      "Guardion 的调查业务，旨在妥善解答棘手的问题。调查由持牌调查员按有据可循的标准开展，证据以合法方式收集并加以保全，以便在事态进一步发展时——进入法庭、董事会文件、家族办公室会议，或当事人之间的纠纷——依然经得起检验。每一步从一开始就以证据效力与保密性为考量而设计。",
      "我们不承接需要非法手段的工作，也绝不假装能够做到。凡客户的期望无法在法律范围内实现之处，我们都直言相告，并在适当情况下提出一个经得起审视的合法替代方案。正是这份自律，让我们的调查结论在关键时刻真正有用。",
      "由于 Guardion 同时提供保护，一项揭示出真实威胁的调查，并不会止步于一份书面报告。若客户愿意，同一家公司即可规划并启动保护性应对——端到端，在同一段合作关系之下完成。这正是许多客户最初选择我们的原因。",
    ],
    coversPoints: [
      "威胁评估与重点人物调查",
      "由持牌调查员开展的谨慎监视",
      "企业与商业尽职调查",
      "人员定位与资产追踪调查",
      "职场、欺诈与不当行为调查",
      "为法律程序准备的证据材料",
    ],
    howHeading: "谨慎受托，成果具备证据效力。",
    steps: [
      { title: "受托", body: "一次保密会面——通常有客户的律师在场——以界定所要解答的问题、可接受的方法、交付成果，以及调查止步的界限。在这些内容形成书面并获一致同意之前，任何工作都不会开始。" },
      { title: "规划", body: "在相关州牌照与隐私义务之下制定调查方案。凡事关法律敏感之处，我们都在律师指导下开展工作，以使材料保留在法律职业特权范围之内。" },
      { title: "调查", body: "现场工作由持牌调查员低调开展。监视、访谈与公开信息调查均即时记录，凡拟作为证据的材料，都保持完整的证据保管链。" },
      { title: "报告", body: "一份为其读者——法庭、董事会或当事人——而撰写的书面报告，并附有一套证据材料。凡调查结果需要时，我们会在报告分发之前，就保护方案作出说明。" },
    ],
    whoHeading: "适合需要把事情办得妥当的律师、家族办公室与当事人。",
    whoBody:
      "调查业务最常由法律顾问、家族办公室、企业董事会，以及正应对某一具体问题的私人当事人委托——一项威胁、一场纠纷、一起内部问题、一名失踪人员、一个尚未经检验的交易对手。当一件事敏感到答案本身与得出答案的过程都必须经得起推敲时，客户便会找到 Guardion。",
    whoList: [
      "代客户委托的律师事务所",
      "评估交易对手或员工的家族办公室",
      "应对疑似内部问题的董事会",
      "应对骚扰、跟踪或持续威胁的个人",
    ],
    exampleTitle: "针对持续威胁的一次合法调查，其后是一场统筹协调的保护性应对。",
    exampleBody:
      "经由律师委托，Guardion 就一系列针对某位当事人及其家人的持续接触展开调查。监视与公开信息调查均在州牌照下进行；所得证据支持了一项向法院提出的申请，并未受质疑即获采纳。在同一委托之下，公司在庭审期间于该家庭及住所周边设立了一套谨慎的贴身护卫布置，并随着风险消退而逐步撤减。",
    closingNote: "所有可识别身份的细节均已更改。每一项调查都在业务所在司法管辖区的法律范围内、并在对客户严格保密的前提下开展。",
  },

  "tailored-security": {
    slug: "tailored-security",
    title: "定制安保",
    eyebrow: "定制安保",
    promise:
      "为活动、敏感过渡期，以及无法套进标准服务册的威胁情形，量身定制的方案。",
    coversHeading: "当需求非同寻常时，应对之道也理应如此。",
    coversBody: [
      "并非每一项需求都是常驻警卫或一名司机所能涵盖。有些需求刻意横跨多个类别：一处偏远庄园的私人婚礼；一次棘手的家庭变故；一位创始人的公开退场；一次在媒体关注下的搬家；一次前往敏感地区的慈善访问；一个业务部门的关闭。这些情形所倚重的是规划，而非人数，且往往受益于由一家能够依当天需要在各专业之间灵活切换的公司来统一处理。",
      "定制安保委托，始于情形本身，而非服务清单。我们会花时间去理解真正被要求的是什么——涉及哪些人、有哪些敏感之处、成功是什么样子、客户不惜一切要避免的又是什么——然后才设计出满足需求的、最精简、最低调的方案。在许多情况下，最终的方案会将贴身护卫、安保驾驶、住宅布置与一条调查线，整合在同一个责任对接之下。",
      "这里的价值在于统筹。由公司的一位负责人端到端地全权负责整个委托；客户无需在不同供应商之间来回传话、把同样的来龙去脉讲两遍，或去核对彼此矛盾的事件说法。",
    ],
    coversPoints: [
      "私人活动、婚礼与重要纪念聚会",
      "家庭变故、分居与遗产事务",
      "企业关闭、裁员与公告",
      "敏感的迁居与搬家",
      "前往非常规地点的慈善或私人出行",
      "需要多个专业协同的单次委托",
    ],
    howHeading: "依情形而设计，以一套方案交付。",
    steps: [
      { title: "倾听", body: "与当事人或其顾问进行一次不慌不忙的交谈。我们会问许多问题，而未经同意的内容一概不落于纸面。此阶段的目标是达成共识，而非提出方案。" },
      { title: "设计", body: "一套依情形量身定制的书面方案——满足需求的、最精简、最低调的安排。各项专业只有在确有必要时才被纳入；绝不会为了凑篇幅而列入任何内容。" },
      { title: "交付", body: "由一名指定的负责人贯穿每一条线——保护、驾驶、住所、调查——统筹整个委托，好让客户只需面对一个人，并只收到一份关于当天的说法。" },
      { title: "收尾", body: "一份统一的书面总结，并在适当情况下附上一组建议，说明哪些应当维持、调整或撤除。大多数定制委托会干净利落地结束；也有一些会演变为长期工作。" },
    ],
    whoHeading: "适合那些标准套餐会误判的情形。",
    whoBody:
      "当一项需求确实非同寻常时——无论是在规模、敏感度，还是所需专业的组合上——或当若干寻常需求需要在同一个责任对接之下一并处理时，人们便会委托定制安保。顾问、家族办公室与高管助理，常常代那些不愿把情况解释第二遍的当事人，把这类委托带到我们面前。",
    whoList: [
      "在非常规场地或房产举办的私人活动",
      "处理敏感过渡期的家族办公室",
      "在处理法律事务的同时统筹保护的顾问",
      "需要多项能力由一方统筹的当事人",
    ],
    exampleTitle: "一场在偏远庄园举办的私人婚礼，作为一套不显品牌痕迹的统一方案加以策划。",
    exampleBody:
      "一场在乡间庄园举办的私人家庭婚礼，预计会引来媒体关注，且有一名宾客涉及真实的安全顾虑。为此，Guardion 设计了一套方案，将前期勘察、谨慎的外围管控、为两位当事人提供的贴身护卫、迎送宾客的安保驾驶，以及对该重点人物的低调调查监视融为一体。宾客体验到的是一场井然有序的私人活动；这个家庭度过了他们所期望的一天；而被标记的风险，则始终未曾显露。",
    closingNote: "为保护客户，细节与可识别身份的事实均已更改。",
  },
};

export function getServiceContent(slug: string, locale: Locale): ServiceContent {
  if (locale === "en") return en[slug];
  return zhHans[slug] ?? { ...placeholderize(en[slug]), slug };
}

/* ------------------------------------------------------------------ *
 * Per-service SEO metadata
 * ------------------------------------------------------------------ */

export type ServiceMeta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

const enMeta: Record<string, ServiceMeta> = {
  "close-protection": {
    title: "Close Protection Services Australia | Guardion",
    description:
      "Discreet, embedded close protection for principals and families. Licensed operators, security driving and advance work — engaged quietly, delivered precisely.",
    ogTitle: "Close Protection — Guardion",
    ogDescription:
      "Principal-focused close protection for high-net-worth individuals and executives. Quiet in ordinary moments, decisive in critical ones.",
  },
  "executive-protection": {
    title: "Executive Protection for CEOs & Boards | Guardion",
    description:
      "Coordinated protection for executives, chairs and founders across travel, AGMs and public appearances. Discreet, integrated with the office and calendar.",
    ogTitle: "Executive Protection — Guardion",
    ogDescription:
      "Corporate exposure, quietly managed. A protective program built around the executive calendar.",
  },
  "residential-security": {
    title: "Residential Security & Estate Protection | Guardion",
    description:
      "Assessed, hardened and, where required, manned protection of primary and secondary residences. Discreet residential security for principals and their families.",
    ogTitle: "Residential Security — Guardion",
    ogDescription:
      "The home treated as a considered environment. Written assessments, hardening and standing teams — proportionate to the threat.",
  },
  "security-driving": {
    title: "Security Driving & Protective Drivers Australia | Guardion",
    description:
      "Trained, licensed protective drivers and vetted vehicles for principals and families across Australia. Route planning, defensive driving and integrated protection.",
    ogTitle: "Security Driving — Guardion",
    ogDescription:
      "The drive is often the most exposed part of the day. Guardion treats the vehicle as a mobile venue — planned, rehearsed and quietly held.",
  },
  investigations: {
    title: "Private Investigations Australia — Licensed | Guardion",
    description:
      "Licensed private investigations producing court-admissible evidence. Threat assessments, surveillance, due diligence and workplace enquiries, in strict confidence.",
    ogTitle: "Investigations — Guardion",
    ogDescription:
      "Lawful, confidential enquiries that stand up in court. When findings warrant it, the same firm can stand up the protective response.",
  },
  "tailored-security": {
    title: "Tailored Security Programs & Bespoke Protection | Guardion",
    description:
      "Bespoke security programs for private events, sensitive transitions and unusual threat pictures. Multiple disciplines, one point of accountability.",
    ogTitle: "Tailored Security — Guardion",
    ogDescription:
      "When the requirement is unusual, the response should be too. Tailored programs delivered under a single principal of the firm.",
  },
};

const zhHansMeta: Partial<Record<string, ServiceMeta>> = {
  "close-protection": {
    title: "澳大利亚贴身护卫服务 | Guardion",
    description:
      "为要客与家庭提供谨慎、贴身的护卫。持牌护卫人员、安保驾驶与前期踏勘——低调委托，精准交付。",
    ogTitle: "贴身护卫 — Guardion",
    ogDescription:
      "面向高净值人士与高管、以要客为中心的贴身护卫。平常时刻低调，关键时刻果断。",
  },
  "executive-protection": {
    title: "面向 CEO 与董事会的高管保护 | Guardion",
    description:
      "在差旅、股东年会与公开露面中，为高管、董事长与创始人提供统筹协调的保护。谨慎，并与办公团队及日程融为一体。",
    ogTitle: "高管保护 — Guardion",
    ogDescription: "企业层面的风险，悄然管理。一套围绕高管日程打造的保护方案。",
  },
  "residential-security": {
    title: "住宅安保与庄园保护 | Guardion",
    description:
      "对主要与第二住所进行评估、加固，并在需要时驻守保护。为要客及其家人提供谨慎的住宅安保。",
    ogTitle: "住宅安保 — Guardion",
    ogDescription:
      "将住所视为一个需要通盘考量的环境。书面评估、加固与常驻团队——与威胁相称。",
  },
  "security-driving": {
    title: "澳大利亚安保驾驶与防卫驾驶员 | Guardion",
    description:
      "为澳大利亚各地的要客与家庭提供受训、持牌的防卫驾驶员与经审核的车辆。路线规划、防卫驾驶与整合式保护。",
    ogTitle: "安保驾驶 — Guardion",
    ogDescription:
      "行车往往是一天中最缺乏防护的时段。Guardion 将车辆视为一个移动场所——经过规划、演练，并低调把控。",
  },
  investigations: {
    title: "澳大利亚私人调查——持牌 | Guardion",
    description:
      "持牌私人调查，所得证据可用于法庭。威胁评估、监视、尽职调查与职场调查，全程严格保密。",
    ogTitle: "调查 — Guardion",
    ogDescription:
      "合法、保密、经得起法庭检验的调查。当结果需要时，同一家公司即可启动保护性应对。",
  },
  "tailored-security": {
    title: "定制安保方案与量身保护 | Guardion",
    description:
      "为私人活动、敏感过渡期与特殊威胁情形量身打造的安保方案。多项专业，一个责任对接。",
    ogTitle: "定制安保 — Guardion",
    ogDescription:
      "当需求非同寻常时，应对也理应如此。由公司的一位负责人统筹交付的定制方案。",
  },
};

export function getServiceMeta(slug: string, locale: Locale): ServiceMeta {
  if (locale === "en") return enMeta[slug];
  return zhHansMeta[slug] ?? placeholderize(enMeta[slug]);
}

/** Next.js Metadata for a service detail page, per locale (canonical + hreflang). */
export function buildServiceMetadata(slug: string, locale: Locale): Metadata {
  const m = getServiceMeta(slug, locale);
  const path = `/services/${slug}`;
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, path),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, path),
      siteName: "Guardion",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ *
 * Services index page
 * ------------------------------------------------------------------ */

export type ServicesIndexContent = {
  eyebrow: string;
  heading: string;
  intro: string[];
  readMore: string;
};

const enIndex: ServicesIndexContent = {
  eyebrow: "Services",
  heading: "Protection and intelligence, offered as one.",
  intro: [
    "Guardion's capabilities are deliberately narrow. We do not sell technology, uniforms or manned guarding at scale. We provide principal-focused protection and lawful private investigations — two disciplines that most firms treat separately, delivered here under a single standard and a single point of accountability.",
    "Each capability below can be engaged on its own or combined into a coordinated program. Where a threat is identified through an investigation, the same firm can stand up the protective response — end to end, without handoffs.",
  ],
  readMore: "Read more",
};

const zhHansIndex: ServicesIndexContent = {
  eyebrow: "服务",
  heading: "保护与情报，合而为一地提供。",
  intro: [
    "Guardion 的能力刻意保持专注。我们不大规模兜售技术、制服或驻守看守。我们提供以要客为中心的保护与合法的私人调查——这两门大多数公司分而治之的专业，在这里由同一套标准、同一个责任对接来提供。",
    "下方的每一项能力，都可单独委托，也可整合为一套统筹协调的方案。当一项威胁经由调查被查明时，同一家公司即可启动保护性应对——端到端，无需交接。",
  ],
  readMore: "了解更多",
};

export function getServicesIndexContent(locale: Locale): ServicesIndexContent {
  if (locale === "en") return enIndex;
  return zhHansIndex ?? placeholderize(enIndex);
}

export const servicesIndexMeta = {
  en: {
    title: "Services — Close Protection & Investigations | Guardion",
    description:
      "Close protection, executive protection, residential security, security driving, investigations and tailored programs. Australian-licensed, coordinated worldwide.",
    ogTitle: "Guardion Services — Protection & Intelligence",
    ogDescription:
      "A single firm for protection and lawful investigations. Explore Guardion's six service capabilities.",
  },
};

const zhHansServicesIndexMeta = {
  title: "服务 — 贴身护卫与调查 | Guardion",
  description:
    "贴身护卫、高管保护、住宅安保、安保驾驶、调查与定制方案。澳大利亚持牌，全球统筹。",
  ogTitle: "Guardion 服务 — 保护与情报",
  ogDescription: "一家兼顾保护与合法调查的公司。了解 Guardion 的六项服务能力。",
};

export function getServicesIndexMeta(locale: Locale) {
  if (locale === "en") return servicesIndexMeta.en;
  return zhHansServicesIndexMeta;
}

/** Next.js Metadata for the services index page, per locale. */
export function buildServicesIndexMetadata(locale: Locale): Metadata {
  const m = getServicesIndexMeta(locale);
  return {
    title: m.title,
    description: m.description,
    alternates: alternatesFor(locale, "/services"),
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: localePath(locale, "/services"),
      siteName: "Guardion",
      type: "website",
    },
  };
}
