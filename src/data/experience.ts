export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    period: '2024 — Present',
    company: 'Kühne + Nagel',
    role: 'Senior Data Scientist',
    description: [
      'Co-own a company-wide agentic AI platform (RAG + tool-using workflows) used by ~8,000 internal users; integrate enterprise knowledge sources (Confluence, internal systems).',
      'Built retrieval + ranking: indexing/chunking, hybrid search, reranking, multi-step orchestration on AWS (OpenSearch, Lambda, S3, DynamoDB, Step Functions, Bedrock, CDK, EKS).',
      'Designed production evaluation and regression checks (groundedness/faithfulness) using RAGAS and a custom LLM-as-a-judge framework with curated datasets.',
      'Implemented monitoring + analytics (adoption, search gaps, content health); designed WebSocket-based real-time communication protocol.',
      'Improved reliability and latency via caching (AWS ElastiCache Valkey), root-cause debugging, and stabilising workflows under load.',
    ],
    tags: ['RAG', 'Hybrid Search', 'Reranking', 'LangGraph', 'AWS Bedrock', 'OpenSearch', 'EKS', 'CDK', 'ElastiCache', 'RAGAS', 'LLM-as-judge', 'WebSocket'],
  },
  {
    period: '2022 — 2024',
    company: 'Kühne + Nagel',
    role: 'Data Scientist',
    description: [
      'Replaced a manual matching workflow with a multi-step ML pipeline (candidate generation, constraint filtering, scoring) using Azure OpenAI GPT-4 + embeddings — 92% cost reduction, 98% precision.',
      'Built customer grouping/clustering pipelines to harmonise heterogeneous enterprise data sources.',
      'Operated daily ELT pipelines on Kubeflow Pipelines.',
    ],
    tags: ['Azure OpenAI', 'GPT-4', 'Embeddings', 'Kubeflow', 'Snowflake', 'Python'],
  },
  {
    period: '2019 — 2022',
    company: 'moinAI (knowhere GmbH)',
    role: 'Backend Engineer & ML Specialist',
    description: [
      'Full product backend and AI/NLP components of moinAI SaaS — 5,000,000+ conversations across 150+ companies.',
      'Built NLP/DL/ML pipelines for automated customer communication with repeatable retraining workflows; automated retraining with active learning.',
      'Managed and provisioned infrastructure (Kubernetes, OVH, PostgreSQL, Redis); integrated customer, partner, and third-party systems.',
      'Delivered GPT-3 chatbot demo at OMR trade show enabling flexible off-script conversations.',
    ],
    tags: ['Python', 'NLP', 'PyTorch', 'HuggingFace', 'Active Learning', 'GPT-3', 'Kubernetes', 'OVH', 'PostgreSQL', 'Redis', 'REST APIs'],
  },
  {
    period: '2019 — 2021',
    company: 'moinAI (knowhere GmbH)',
    role: 'Working Student — NLP Researcher',
    description: [
      'Developed multilingual NLP pipeline that replaced a Dialogflow-based solution and brought new approaches into production.',
      'Researched and evaluated NLP technologies (LASER, BERT, Transformers) for commercial application; co-responsible for the architecture of the knowhere AI application.',
    ],
    tags: ['NLP', 'BERT', 'Transformers', 'LASER', 'Python', 'Text Classification'],
  },
  {
    period: '2015 — 2019',
    company: 'ISEC7 GmbH',
    role: 'Working Student — QA & Support',
    description: [
      'QA for the ISEC7 EMM Suite (enterprise mobility management & monitoring) across Android and iOS device rollout.',
      'Support analyst for BlackBerry UEM; first-level end-user support and ticket system.',
    ],
    tags: ['QA', 'Enterprise Mobility', 'BlackBerry UEM', 'Android', 'iOS'],
  },
];
