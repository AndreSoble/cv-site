export interface Link {
  label: string;
  labelDE?: string;
  url: string;
}

export interface Bullet {
  text: string;
  detail?: string[];
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: Bullet[];
  tags: string[];
  links?: Link[];
}

export const experience: Experience[] = [
  {
    period: '2024 — Present',
    company: 'Kühne + Nagel',
    role: 'Senior Data Scientist',
    description: [
      {
        text: 'Develop K.AI — company-wide conversational AI platform enabling ~8,000 employees to chat with and discover data across the company; de facto platform, ML, and backend engineer across the full stack.',
        detail: [
          '3,000–4,000 queries/day in production.',
          'Started from an AWS blueprint/accelerator, then extensively rebuilt and extended.',
        ],
      },
      {
        text: 'Served as the technical anchor for K.AI as the team scaled 5→20: shaped the roadmap, broke down epics, and onboarded new engineers across two squads.',
      },
      {
        text: 'Led evolution from retrieval-only RAG (Phase 1) to a full agentic system (Phase 2): LangGraph orchestration, LiteLLM abstraction, MCP with OAuth.',
        detail: [
          'Phase 1: RAG over internal knowledge bases; AppSync/GraphQL API, Cognito + SSO auth, CDK-deployed.',
          'Phase 2: stateful LangGraph orchestration — RAG is one tool the agent can invoke, not the default path.',
          'MCP with OAuth: built and consumed MCP servers; enabled internal K+N developer teams to expose their own services to K.AI — turning the platform into a company-wide extensible agent.',
        ],
      },
      {
        text: 'Built AWS-native retrieval infrastructure: OpenSearch hybrid search, Cohere embeddings and reranking; CDK-deployed.',
        detail: [
          'Custom multi-format ingestion pipeline: extracts text and images from PDFs, DOCX, PPTX, PNG/JPG — OCR applied to every image type, not just scanned documents.',
          'Images enriched with OCR text and Gemini-generated descriptions; references preserved so the LLM can include images directly in its responses.',
          'Currently ~8M chunks across ~5M documents in production; crawlers for Confluence and internal sites.',
          'AWS Titan + Cohere embeddings via Bedrock; S3, DynamoDB, Step Functions, Lambda.',
        ],
      },
      {
        text: 'Built production evaluation framework and workspace analytics dashboard.',
        detail: [
          'Self-built RAGAS-inspired framework: LLM-as-a-judge, curated domain datasets, regression gates — not built on top of the RAGAS library.',
          'Monitoring for adoption, search gaps, and content health; used to define launch criteria and guide iteration.',
          'Workspace dashboard: team leads track usage patterns, knowledge gaps, and content quality per workspace.',
        ],
      },
      {
        text: 'Implemented real-time streaming, resumable state, and data privacy compliance.',
        detail: [
          'WebSocket-based streaming protocol for real-time response UX.',
          'ElastiCache/Valkey for resumable LangGraph and WebSocket state; RDS (PostgreSQL) for durable conversation persistence.',
          'PII pipeline in ELT warehouse offload: conversations and sensitive data older than 90 days automatically deleted.',
        ],
      },
    ],
    tags: ['Agentic AI', 'RAG', 'LangGraph', 'LiteLLM', 'MCP', 'Hybrid Search', 'Reranking', 'AWS Bedrock', 'Google Vertex AI', 'OpenSearch', 'Cohere', 'AWS CDK', 'EKS', 'AppSync', 'Cognito', 'ElastiCache', 'PostgreSQL', 'RAGAS', 'LLM-as-judge', 'WebSocket', 'Python'],
  },
  {
    period: '2022 — 2024',
    company: 'Kühne + Nagel',
    role: 'Data Scientist',
    description: [
      {
        text: 'Built multi-step business partner matching pipeline to enrich K+N\'s internal data against Dun & Bradstreet.',
        detail: [
          'Three-stage hierarchy: CDQ/D&B score gating → LaBSE cosine similarity → Azure OpenAI GPT-4 Turbo structured outputs as final fallback.',
          'Over time, the GPT-4 stage replaced several intermediate steps as it proved more robust and maintainable.',
        ],
      },
      {
        text: 'Achieved 92% cost reduction and 98% precision vs. prior manual workflow. Recognised with the CDQ Good Practice Award 2025.',
        detail: [
          'Azure OpenAI PTUs for throughput; iterative prompt engineering for reliable structured outputs.',
          'Created ground-truth labels; requirements engineering with cross-functional stakeholders.',
          'Delivered as an internal data product consumed across K+N; award came after Andre moved to the next project.',
        ],
      },
      {
        text: 'Ran daily ELT pipelines with Kubeflow Pipelines — integrating data from Oracle and heterogeneous enterprise systems into Snowflake.',
        detail: [
          'Loaded from Oracle and other internal source systems into Snowflake; applied transformations and enrichment directly on Snowflake.',
          'Combined data across K+N\'s heterogeneous IT landscape — multiple systems, formats, and ownership boundaries — into consolidated business partner records.',
          'Work extended beyond matching: supported broader data product work including partner groupings and related entity consolidation.',
        ],
      },
    ],
    tags: ['Azure OpenAI', 'GPT-4 Turbo', 'LaBSE', 'Semantic Similarity', 'Structured Outputs', 'Prompt Engineering', 'Kubeflow', 'ELT', 'Snowflake', 'Python', 'CDQ', 'Dun & Bradstreet'],
    links: [{ label: 'CDQ Good Practice Award 2025 ↗', url: 'https://newsroom.kuehne-nagel.com/kuehnenagel-wins-cdq-good-practice-award-2025/' }],
  },
  {
    period: '2021 — 2022',
    company: 'moinAI (knowhere GmbH)',
    role: 'Software Developer / ML Specialist',
    description: [
      {
        text: 'Full-stack scope across NLP, backend, infrastructure, and ML on the moinAI SaaS product (5M+ conversations, 150+ companies).',
      },
      {
        text: 'Migrated entire infrastructure from Heroku to Kubernetes on OVH — ~50% cost reduction.',
        detail: [
          'Owned full migration from Heroku (no infrastructure) to OVH infrastructure-as-a-service.',
          'Set up GitHub Actions CI/CD pipelines with deployment to Kubernetes on OVH.',
        ],
      },
      {
        text: 'Implemented multi-channel integrations with third-party CRM and support platforms (Zendesk, zChat, Zapier) and customer/partner systems.',
      },
      {
        text: 'Built unsupervised intent discovery — a data flywheel for continuous model improvement.',
        detail: [
          'Embedded and clustered new + historical user messages; compared clusters against known intents.',
          'Detects genuinely new intent categories not yet covered by the model.',
        ],
      },
      {
        text: 'Owned and extended AI/NLP components; built repeatable active learning retraining workflows to reduce per-customer iteration cycles.',
      },
      {
        text: 'Built a public GPT-3 chatbot demo for OMR Festival enabling flexible off-script conversations — before ChatGPT existed.',
      },
    ],
    tags: ['Python', 'Node.js', 'Express', 'MongoDB', 'NLP', 'Sentence Embeddings', 'Clustering', 'Intent Discovery', 'Active Learning', 'GPT-3', 'Kubernetes', 'OVH', 'GitHub Actions'],
  },
  {
    period: '2019 — 2021',
    company: 'moinAI (knowhere GmbH)',
    role: 'Working Student — NLP Researcher',
    description: [
      {
        text: 'Researched and built an in-house NLP pipeline to replace Google Dialogflow — surpassed Dialogflow\'s performance on moinAI\'s use case.',
        detail: [
          'Covered the full loop: training, evaluation, hosting, and inference.',
          'Text classification + intent recognition; GPT-2 for synthetic training data augmentation.',
          'Enabled moinAI to own its NLP stack rather than depend on a third-party service.',
        ],
      },
      {
        text: 'Owned implementation and architecture of the knowhere AI application.',
      },
    ],
    tags: ['NLP', 'Text Classification', 'Intent Discovery', 'Clustering', 'BERT', 'Transformers', 'HuggingFace', 'PyTorch', 'GPT-2', 'Active Learning', 'Python'],
  },
  {
    period: '2015 — 2019',
    company: 'ISEC7 GmbH',
    role: 'Working Student — QA & Support',
    description: [
      {
        text: 'QA for the ISEC7 EMM Suite (enterprise mobility management & monitoring) across Android and iOS device rollout; close collaboration with developers in a Kanban workflow.',
      },
      {
        text: 'Support analyst for BlackBerry UEM; first-level end-user support and ticketing system.',
      },
    ],
    tags: ['QA', 'Enterprise Mobility', 'BlackBerry UEM', 'Android', 'iOS'],
  },
];
