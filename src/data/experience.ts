export interface Link {
  label: string;
  labelDE?: string;
  url: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string[];
  tags: string[];
  links?: Link[];
}

export const experience: Experience[] = [
  {
    period: '2024 — Present',
    company: 'Kühne + Nagel',
    role: 'Senior Data Scientist',
    description: [
      'Develop K.AI — a company-wide agentic AI platform used by ~8,000 internal users. Team scaled from a handful to ~20 developers across 2 teams.',
      'Evolved platform from pure RAG (Phase 1) to a tool-using agentic system (Phase 2): LangGraph orchestration, LiteLLM abstraction, MCP with OAuth.',
      'Built AWS-native retrieval stack: OpenSearch hybrid search, AWS Titan and Cohere embeddings, Cohere reranking; deployed via CDK (S3, DynamoDB, Step Functions, Lambda).',
      'Custom document processing pipeline with OCR support; crawlers for Confluence and internal websites — currently ~8M chunks across ~5M documents.',
      'Designed production evaluation framework inspired by RAGAS — custom LLM-as-a-judge, curated domain datasets, and regression gates. Built monitoring for adoption, search gaps, and content health.',
      'Built workspace insights dashboard: workspace owners (e.g. team leads) can track team usage patterns, identify knowledge gaps in their knowledge base, and understand how their workspace is being used.',
      'Implemented PII pipeline in the ELT data warehouse offload: conversation and sensitive data older than 90 days is automatically deleted to meet privacy requirements.',
      'Implemented WebSocket-based streaming protocol; ElastiCache/Valkey for robust, resumable LangGraph and WebSocket state; RDS (PostgreSQL) for durable conversation persistence.',
    ],
    tags: ['RAG', 'LangGraph', 'LiteLLM', 'MCP', 'AWS Bedrock', 'Google Vertex AI', 'OpenSearch', 'Cohere', 'AWS CDK', 'EKS', 'AppSync', 'Cognito', 'ElastiCache', 'RAGAS', 'LLM-as-judge', 'WebSocket'],
  },
  {
    period: '2022 — 2024',
    company: 'Kühne + Nagel',
    role: 'Data Scientist',
    description: [
      'Built a multi-step business partner matching pipeline against Dun & Bradstreet data (via CDQ APIs): score gating → LaBSE semantic similarity → Azure OpenAI GPT-4 Turbo structured outputs as final fallback.',
      'Provisioned Azure OpenAI deployments (PTUs) for higher throughput; iterative prompt engineering for reliable structured outputs; created ground-truth labels and drove requirements engineering with cross-functional stakeholders.',
      'Achieved 92% cost reduction and 98% precision vs. the prior manual workflow. Project recognised with the CDQ Good Practice Award 2025.',
      'Operated daily ELT pipelines on Kubeflow Pipelines.',
    ],
    tags: ['Azure OpenAI', 'GPT-4 Turbo', 'LaBSE', 'Semantic Similarity', 'Structured Outputs', 'Kubeflow', 'Python', 'CDQ', 'Dun & Bradstreet'],
    links: [{ label: 'CDQ Good Practice Award 2025 ↗', url: 'https://newsroom.kuehne-nagel.com/kuehnenagel-wins-cdq-good-practice-award-2025/' }],
  },
  {
    period: '2021 — 2022',
    company: 'moinAI (knowhere GmbH)',
    role: 'Software Developer / ML Specialist',
    description: [
      'Promoted from working student to full-time; took on full-stack engineering: Python (NLP/model serving) + Node.js / Express / MongoDB.',
      'Integrated third-party platforms into moinAI (e.g. Zendesk, zChat, Zapier) as well as customer and partner systems.',
      'Migrated entire infrastructure from Heroku to a Kubernetes cluster on OVH — provisioned from scratch (kubeconfig, all K8s manifests), cut over DNS; ~50% infrastructure cost reduction. Set up GitHub Actions CI/CD.',
      'Maintained and extended AI/NLP components; built repeatable active learning retraining workflows to reduce per-customer iteration cycles.',
      'Built unsupervised intent discovery: embedded and clustered new + historical user messages, compared clusters against known intents to detect genuinely new categories — a data flywheel for continuous model improvement.',
      'Built a public GPT-3 chatbot demo for OMR Festival enabling flexible "off-script" conversations — before ChatGPT existed.',
    ],
    tags: ['Python', 'Node.js', 'Express', 'MongoDB', 'NLP', 'Active Learning', 'GPT-3', 'Kubernetes', 'OVH', 'GitHub Actions'],
  },
  {
    period: '2019 — 2021',
    company: 'moinAI (knowhere GmbH)',
    role: 'Working Student — NLP Researcher',
    description: [
      'Researched and built an in-house NLP pipeline (text classification + intent recognition) to replace Google Dialogflow — surpassed Dialogflow\'s performance on moinAI\'s use case at the time.',
      'Experimented with GPT-2 for synthetic training data augmentation. Continuously evaluated state-of-the-art NLP research for applicability to the product.',
      'Owned implementation and architecture of the knowhere AI application.',
    ],
    tags: ['NLP', 'Text Classification', 'Intent Discovery', 'Clustering', 'BERT', 'Transformers', 'GPT-2', 'Active Learning', 'Python'],
  },
  {
    period: '2015 — 2019',
    company: 'ISEC7 GmbH',
    role: 'Working Student — QA & Support',
    description: [
      'QA for the ISEC7 EMM Suite (enterprise mobility management & monitoring) across Android and iOS device rollout.',
      'Support analyst for BlackBerry UEM; first-level end-user support and ticketing system.',
    ],
    tags: ['QA', 'Enterprise Mobility', 'BlackBerry UEM', 'Android', 'iOS'],
  },
];
