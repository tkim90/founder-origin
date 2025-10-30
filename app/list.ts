import dedent from 'dedent';

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
    - He already had a data savy audience from previous technical blog posts. When he posted about Surge, exactly the right readers were there.
    - Edwin was an expert on this problem. He had spent most of his career solving data problems at big tech companies.
    - Timing: Edwin launched Surge around the time GPT-3 launched.

    `,
    sources: [
      { name: "YouTube - 20VC Interview", url: "https://youtu.be/ziqsNe1sLHw?si=KFZa5q1et5gyKGck&t=1056" },
      { name: "Surge AI: A Modern Data Labeling Platform for NLP", url: "https://medium.com/@echen/surge-ai-a-modern-data-labeling-platform-for-nlp-d7045a1cb239" },
      { name: "Forbes - How this Google alum became a low-key AI billionaire", url: "https://www.forbes.com.au/news/billionaires/how-this-google-alum-became-a-low-key-ai-billionaire/" },
      { name: "Edwin Chen - 400 richest Americans list", url: "https://e.vnexpress.net/news/tech/personalities/meet-edwin-chen-mit-graduate-and-youngest-billionaire-on-forbes-400-richest-americans-list-4938703.html" },
    ],
    company_url: "https://www.surgehq.ai/",
    "bootstrapped": true,
  },
  {
    "name": "Chatbase",
    "revenue": "$5M",
    "story": dedent`
      Founder Yasser Elsaid built Chatbase (initially as a solo engineer) as a custom-chatbot platform that allowed website owners to
      embed chat agents trained on their own data. He used growth via Twitter and Reddit to attract early adopters who were solving
      their own mid-sized problems, kept the product lightweight, and focused on self-serve. The first customers came from this
      word-of-mouth / community outreach kernel.
    `,
    "company_url": "https://www.chatbase.co/",
    "bootstrapped": true,
  },
  {
    "name": "Harvey",
    "revenue": "100M",
    "story": dedent`
      Founded in 2022 by Winston Weinberg (a junior lawyer) and Gabe Pereyra (ex-DeepMind/Meta researcher), Harvey targeted the legal
      industry. They got their first large customer when global law firm Allen & Overy decided to roll out their tool to ~3,500
      attorneys in early 2023. That early big-law engagement served as proof-point and then unlocked momentum across the AmLaw 100
      and large law firms.
    `,
    "company_url": "https://www.harvey.ai/"
  },
  {
    "name": "Retell",
    "revenue": "$15M",
    "story": dedent`
      Retell AI, a voice-agent platform, landed early customers by building compelling case studies in high-volume use-cases. For
      example, telemedicine provider Doxy.me made Retell the first contact point for free-users, and others like Sunshine Loans and
      AccioJob used Retell to handle thousands of calls with minimal human overhead. These case studies helped them land further
      customers quickly.
    `,
    "company_url": "https://www.retellai.com/"
  },
  {
    "name": "Cursor",
    "revenue": "$100M+",
    "story": dedent`
      Cursor (by Anysphere) targeted developers first: the product shipped in Jan 2023, and early adopters included engineers at
      OpenAI and other elite tech companies. These developers found value, paid out-of-pocket, and championed the product internally.
      That grassroots adoption then translated to enterprise deals.
    `,
    "company_url": "https://www.cursor.com/"
  },
  {
    "name": "ElevenLabs",
    "revenue": "~$200M",
    "story": dedent`
      ElevenLabs started with deep tech in voice synthesis, then launched publicly with a free-tier platform that attracted many
      creators and content-making customers. They leveraged their voice-actor marketplace (actors upload voices → developers pick
      them) and enabled early users via self-serve. From creators and small customers to content publishers and enterprises, this
      build-up triggered broader adoption.
    `,
    "company_url": "https://www.elevenlabs.io/"
  },
  {
    "name": "Happy Robot",
    "revenue": "$44M Series B",
    "story": dedent`
      Happy Robot’s first major customer surfaced somewhat serendipitously: while the founders demo’d at a logistics forum (Discord /
      conference demo) their first customer, an $800M freight broker called Circle Logistics, discovered the product and became an
      early design-partner. That real world production deployment in logistics operations helped them refine the product and then
      land further logistics enterprise customers (DHL, Ryder etc.).
    `,
    "company_url": "https://www.happyrobot.ai/"
  }
]
