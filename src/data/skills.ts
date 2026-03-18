export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'ML / Deep Learning',
    items: [
      'PyTorch', 'PyTorch Lightning', 'HuggingFace Transformers', 'spaCy', 'scikit-learn',
      'BERT / RoBERTa fine-tuning', 'LaBSE', 'LASER', 'XLM-RoBERTa',
      'Causal Transformer Decoder', 'Performer (linear attention)', 'Dual Encoder',
      'Sentence Embeddings', 'ANN Search (Annoy, FAISS)',
      'Recommender Systems', 'Active Learning', 'Topic Clustering',
      'Weights & Biases', 'NVIDIA APEX', 'fairscale', 'DeepSpeed',
      'Ollama / Mistral 7B', 'pandas', 'numpy', 'plotly',
    ],
  },
  {
    name: 'LLM & Agentic Systems',
    items: [
      'RAG', 'Hybrid Search', 'Reranking', 'Vector Search',
      'LangChain', 'LangGraph', 'LiteLLM',
      'MCP (Model Context Protocol)', 'OAuth for MCP',
      'Tool / Function Calling', 'Prompt Engineering',
      'Context Management', 'Multi-Agent Patterns',
      'WebSocket', 'SSE (Server-Sent Events)',
    ],
  },
  {
    name: 'LLM Providers',
    items: [
      'Claude (Anthropic)',
      'OpenAI GPT-3 / GPT-4',
      'Azure OpenAI (incl. Provisioned Deployments / PTUs)',
      'Google Gemini',
      'Cohere',
    ],
  },
  {
    name: 'Cloud / Infrastructure',
    items: [
      'AWS OpenSearch', 'AWS Lambda', 'AWS S3', 'AWS DynamoDB',
      'AWS Step Functions', 'AWS Bedrock', 'AWS CDK', 'AWS EKS',
      'AWS AppSync (GraphQL)', 'Amazon Cognito', 'AWS SageMaker',
      'AWS SQS', 'AWS RDS', 'AWS ElastiCache / Valkey',
      'Kubernetes', 'Docker', 'OVH', 'PostgreSQL', 'MongoDB', 'Redis', 'Snowflake',
      'GitHub Actions',
    ],
  },
  {
    name: 'Backend & Data Engineering',
    items: [
      'Python', 'TypeScript', 'JavaScript / Node.js', 'Express.js', 'SQL', 'Java',
      'REST API Design', 'GraphQL', 'Microservices', 'Distributed Systems',
      'FastAPI', 'Observability', 'Caching', 'Fault Tolerance', 'Security & Auth',
      'ETL / ELT Pipelines', 'Apache Airflow', 'Kubeflow Pipelines',
      'Alembic', 'Data Quality Pipelines', 'Claude Code',
    ],
  },
  {
    name: 'Evaluation / Responsible AI',
    items: [
      'RAGAS', 'LLM-as-judge', 'A/B Testing (CTR-based)',
      'Regression Testing', 'Curated Evaluation Datasets',
      'Precision / Recall / F1', 'KPI Design', 'Error Analysis',
      'Monitoring Instrumentation',
    ],
  },
  {
    name: 'Team & Delivery',
    items: [
      'Agile Delivery', 'Scoping & Prioritisation', 'Stakeholder Communication',
      'Technical Mentoring', 'Cross-team Coordination', 'Documentation',
    ],
  },
  {
    name: 'Languages',
    items: ['German (native)', 'English (fluent)', 'Spanish (basic)'],
  },
];
