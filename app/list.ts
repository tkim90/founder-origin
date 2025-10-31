import dedent from "dedent";

export const LIST = [
  {
    name: "Surge",
    revenue: "$1,000,000,0000 ($1B)",
    story: dedent`
    ### First customers
    Edwin Chen's approach was very straightforward: built the v1 in a couple of weeks, posted on his data science blog, and became profitable in month one. Early customers include Twitter, Twitch, and Airbnb (in the search, recommendations, and content moderation space).
    
    At Twitter, he had this problem when trying to build a sentiment classifier from 10k labeled tweets - positive or negative. But their human data labeling system was just two people they hired off of Craigslist working 9 to 5. Starting required waiting a month.

    At Facebook, he tried to create a dataset of 50k labeled businesses to distinguish between different business types. They hired an outside firm, which took 6 months to deliver it, which on top of that was riddled with errors - restaurants mislabeled as coffeeshops, coffeeshops as hospitals.

    ### Factors 
    - He already had a data savvy audience from previous technical blog posts. When he posted about Surge, exactly the right readers were there.
    - Edwin was an expert on this problem. He had spent most of his career solving data problems at big tech companies.
    - Timing: Edwin launched Surge around the time GPT-3 launched.

    `,
    sources: [
      {
        name: "YouTube - 20VC Interview",
        url: "https://youtu.be/ziqsNe1sLHw?si=KFZa5q1et5gyKGck&t=1056",
      },
      {
        name: "Surge AI: A Modern Data Labeling Platform for NLP",
        url: "https://medium.com/@echen/surge-ai-a-modern-data-labeling-platform-for-nlp-d7045a1cb239",
      },
      {
        name: "Forbes - How this Google alum became a low-key AI billionaire",
        url: "https://www.forbes.com.au/news/billionaires/how-this-google-alum-became-a-low-key-ai-billionaire/",
      },
      {
        name: "Edwin Chen - 400 richest Americans list",
        url: "https://e.vnexpress.net/news/tech/personalities/meet-edwin-chen-mit-graduate-and-youngest-billionaire-on-forbes-400-richest-americans-list-4938703.html",
      },
    ],
    company_url: "https://www.surgehq.ai/",
    bootstrapped: true,
  },
  {
    name: "Chatbase",
    revenue: "$5,000,000+ ARR (as of Feb 2025)",
    story: `

  ### First customers
  Yasser Elsaid's got his first customers on X. When GPT-3 API just launched, he hustled by quickly creating free custom chatbots for books and podcasts in relevant communities (Reddit, Twitter), hiding the pricing page for Reddit users to avoid spam flags and maximize credibility.
  
  He had a breakthrough in February 4, 2023 when his demo video exploded overnight (from an account with only 16 followers), gaining 1,500+ likes and thousands of users. At launch, the product was completely free. Business owners demanded a pricing page, and within two hours of launching it, Elsaid had his first paying customer at $10/month.
  
  From there, he quickly hit revenue milestones:
  - $10K MRR by March 2023
  - $64K MRR by May 2023
  - $1M ARR in early 2024
  - $5M+ ARR by February 2025

  ### Factors
  - Perfect timing: Chatbase launched during peak ChatGPT hype, capturing businesses hungry for AI automation.
  - Built one of the first "Chat with PDFs", which contributed to virality
  - Building in public on X allowed AI influencers to amplify growth organically.
`,
    sources: [
      {
        name: "Jetstalk Substack - $6M AI Chatbot Business",
        url: "https://jetstalk.substack.com/p/how-one-developer-built-a-6m-ai-chatbot?action=share",
      },
      {
        name: "YouTube - Building a $3 million ARR product with AI | Yasser Elsaid",
        url: "https://www.youtube.com/watch?v=zliLjqf1hQY",
      },
      {
        name: "YouTube - From college to $4M ARR in 2 years with Yasser, founder of Chatbase",
        url: "https://www.youtube.com/watch?v=DYibi43h6o0",
      },
      {
        name: "LinkedIn - Bootstrapped Chatbase to $5M ARR in 2 Years",
        url: "https://linkedin.com/pulse/speed-perfection-how-yasser-elsaid-bootstrapped-5m-arr-jesse-qin-phd-3hnle",
      },
      {
        name: "YouTube - Chatbase: $500K MRR Proof You Don't Need VC Money",
        url: "https://www.youtube.com/watch?v=v60C5Qux6K8",
      },
      {
        name: "LinkedIn - I joined Chatbase exactly 1 week ago",
        url: "https://www.linkedin.com/posts/sandra-dajic_i-joined-chatbase-exactly-1-week-ago-here-activity-7269596267595395072-vhMM",
      },
    ],
    company_url: "https://www.chatbase.co/",
    bootstrapped: true,
  },
  {
    name: "Legora AI",
    revenue: "$23M ARR",
    story: `
  
  ### First customers
  Legora AI was founded in 2023 by Max Junestrand, who had no legal background but had the vision to transform legal work with AI.
  
  One of Legora's earliest and most impactful customers was the prestigious Swedish law firm Mannheimer Swartling, which helped build credibility and trust in the legal community.
  
  Early customer acquisition strongly depended on partnerships with credible law firms, leveraging their reputation to win over other firms rapidly.
  
  Within a short time, Legora expanded its user base to more than 250 legal firms across 20 markets by May 2025, including major clients like Bird & Bird, Cleary Gottlieb, and Goodwin.
  
  The company also opened offices in New York and expanded globally, accelerating adoption by tens of thousands of legal professionals worldwide.
  
  ### Factors
  - Strong partnerships with prestigious law firms built trust and expanded reach in a traditionally skeptical industry.
  - Coachable, transparent founder-led sales helped overcome initial credibility issues.
  - Early strategic collaborations turned clients into product co-creators, ensuring solutions were optimized and embraced organization-wide.
  - Rapid international expansion with local offices in key markets like New York, London, and Stockholm accelerated growth.
  - Y Combinator backing and high-velocity product development boosted investor and customer confidence.
  - Focus on collaborative AI that complements lawyers' work fostered strong product-market fit.
  `,
    sources: [
      {
        name: "Sifted - Inside legal AI startup Legora's race for dominance",
        url: "https://sifted.eu/articles/inside-legal-ai-startup-legoras-race-for-dominance-we-wake-up-with-the-taste-of-blood",
      },
      {
        name: "Legora blog - Series C funding announcement",
        url: "https://legora.com/blog/series-c",
      },
      {
        name: "Legora blog - Series B funding announcement",
        url: "https://legora.com/blog/series-b",
      },
      {
        name: "Jonathan Rintala blog - Growth journey of AI startup Legora",
        url: "https://jonathanrintala.com/blog/ai-startup-journey-leya-saas-legal-tech/",
      },
      {
        name: "Business Insider - Meet the 25-Year-Old Legora Founder",
        url: "https://www.businessinsider.com/max-junestrand-legora-founder-legal-tech-ai-harvey-2025-4",
      },
      {
        name: "Legal IT Insider - Legora raises $150m Series C",
        url: "https://legaltechnology.com/2025/10/30/legora-raises-150m-series-c-at-1-8bn-valuation/",
      },
    ],
    company_url: "https://legora.com/",
    bootstrapped: false,
  },
  {
    name: "Harvey",
    revenue: "100M",
    story: dedent`
      Founded in 2022 by Winston Weinberg (a junior lawyer) and Gabe Pereyra (ex-DeepMind/Meta researcher), Harvey targeted the legal
      industry. They got their first large customer when global law firm Allen & Overy decided to roll out their tool to ~3,500
      attorneys in early 2023. That early big-law engagement served as proof-point and then unlocked momentum across the AmLaw 100
      and large law firms.
    `,
    company_url: "https://www.harvey.ai/",
  },
  {
    name: "Retell",
    revenue: "$15M",
    story: dedent`
      Retell AI, a voice-agent platform, landed early customers by building compelling case studies in high-volume use-cases. For
      example, telemedicine provider Doxy.me made Retell the first contact point for free-users, and others like Sunshine Loans and
      AccioJob used Retell to handle thousands of calls with minimal human overhead. These case studies helped them land further
      customers quickly.
    `,
    company_url: "https://www.retellai.com/",
  },
  {
    name: "Cursor",
    revenue: "$100M+",
    story: dedent`
      Cursor (by Anysphere) targeted developers first: the product shipped in Jan 2023, and early adopters included engineers at
      OpenAI and other elite tech companies. These developers found value, paid out-of-pocket, and championed the product internally.
      That grassroots adoption then translated to enterprise deals.
    `,
    company_url: "https://www.cursor.com/",
  },
  {
    name: "ElevenLabs",
    revenue: "~$200M",
    story: dedent`
      ElevenLabs started with deep tech in voice synthesis, then launched publicly with a free-tier platform that attracted many
      creators and content-making customers. They leveraged their voice-actor marketplace (actors upload voices → developers pick
      them) and enabled early users via self-serve. From creators and small customers to content publishers and enterprises, this
      build-up triggered broader adoption.
    `,
    company_url: "https://www.elevenlabs.io/",
  },
  {
    name: "Happy Robot",
    revenue: "$44M Series B",
    story: dedent`
      Happy Robot’s first major customer surfaced somewhat serendipitously: while the founders demo’d at a logistics forum (Discord /
      conference demo) their first customer, an $800M freight broker called Circle Logistics, discovered the product and became an
      early design-partner. That real world production deployment in logistics operations helped them refine the product and then
      land further logistics enterprise customers (DHL, Ryder etc.).
    `,
    company_url: "https://www.happyrobot.ai/",
  },
];
