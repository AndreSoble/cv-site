// German translations for dynamic content.
// Domain terms (Data Scientist, RAG, LLM, tech tags) intentionally kept in English.

export const deExperience: { description: string[] }[] = [
  {
    // K+N Senior Data Scientist
    description: [
      'K.AI — unternehmensweite agentische KI-Plattform mit ~8.000 internen Nutzern. Team wuchs von einer Handvoll auf ~20 Entwickler in 2 Teams.',
      'Weiterentwicklung von reinem RAG (Phase 1) zu einem werkzeugnutzenden agentischen System (Phase 2): LangGraph-Orchestrierung, LiteLLM-Abstraktion, MCP mit OAuth.',
      'AWS-nativer Retrieval-Stack: OpenSearch Hybrid Search, AWS Titan- und Cohere-Embeddings, Cohere Reranking; Deployment via CDK (S3, DynamoDB, Step Functions, Lambda).',
      'Eigene Dokumentenverarbeitungs-Pipeline mit OCR-Unterstützung; Crawler für Confluence und interne Webseiten — aktuell ~8 Mio. Chunks aus ~5 Mio. Dokumenten.',
      'Von RAGAS inspiriertes, selbst entwickeltes Evaluierungsframework — LLM-as-a-judge, kuratierte domänenspezifische Datensätze und Regressionsgates. Monitoring für Adoption, Wissenslücken und Content-Qualität.',
      'Workspace-Insights-Dashboard: Workspace-Eigentümer (z.B. Team-Leads) können Nutzungsmuster ihres Teams verfolgen, Wissenslücken erkennen und verstehen, wie ihr Workspace genutzt wird.',
      'PII-Entfernungspipeline: Gesprächsdaten älter als 90 Tage werden automatisch anonymisiert, um Datenschutzanforderungen zu erfüllen.',
      'WebSocket-basiertes Streaming implementiert; ElastiCache/Valkey für robustes, resumable LangGraph- und WebSocket-State-Management; RDS (PostgreSQL) für dauerhafte Gesprächspersistenz.',
    ],
  },
  {
    // K+N Data Scientist
    description: [
      'Mehrstufige Business-Partner-Matching-Pipeline gegen Dun & Bradstreet-Daten (via CDQ APIs): Score-Gating → LaBSE Semantic Similarity → Azure OpenAI GPT-4 Turbo Structured Outputs als finaler Fallback.',
      'Azure OpenAI Provisioned Deployments (PTUs) für höheren Durchsatz konfiguriert; iteratives Prompt Engineering für zuverlässige Structured Outputs; Ground-Truth-Labels erstellt und Requirements-Engineering mit Stakeholdern aus Finance, Procurement und Data Governance betrieben.',
      '92% Kostenreduktion und 98% Precision gegenüber dem manuellen Prozess erzielt. Projekt wurde mit dem CDQ Good Practice Award 2025 ausgezeichnet.',
      'Tägliche ELT-Pipelines auf Kubeflow Pipelines betrieben.',
    ],
  },
  {
    // moinAI Full-time
    description: [
      'Vollständige Full-Stack-Entwicklung nach Übernahme in Festanstellung: Python (NLP/Modell-Serving) + Node.js / Express / MongoDB.',
      'Integration von Drittplattformen in moinAI (z.B. Zendesk, zChat, Zapier) sowie Kunden- und Partnersystemen.',
      'Gesamte Infrastruktur von Heroku auf einen Kubernetes-Cluster bei OVH migriert — von Grund auf aufgebaut, DNS-Umstellung durchgeführt; ~50% Kostenreduktion. GitHub Actions CI/CD eingerichtet.',
      'KI/NLP-Komponenten weiterentwickelt; wiederholbare Active-Learning-Retraining-Workflows gebaut, um kundenseitige Iterationszyklen zu verkürzen.',
      'Unüberwachte Intent-Discovery aufgebaut: neue und historische Nutzernachrichten eingebettet und geclustert, Cluster mit bekannten Intents verglichen, um wirklich neue Kategorien zu erkennen — ein Daten-Flywheel für kontinuierliche Modellverbesserung.',
      'Öffentliche GPT-3-Chatbot-Demo für das OMR Festival entwickelt — flexible Gespräche außerhalb des regelbasierten Ablaufs, noch vor ChatGPT.',
    ],
  },
  {
    // moinAI Working Student
    description: [
      'In-House-NLP-Pipeline (Textklassifikation + Intent-Erkennung) als Ersatz für Google Dialogflow entwickelt — die Eigenentwicklung übertraf Dialogflow damals auf moinAIs Anwendungsfall.',
      'Experimente mit GPT-2 zur synthetischen Trainingsdaten-Augmentierung. Kontinuierliche Evaluierung aktueller NLP-Forschung auf Anwendbarkeit im Produkt.',
      'Mitverantwortlich für Implementierung und Architektur der KI-Anwendung von knowhere.',
    ],
  },
  {
    // ISEC7
    description: [
      'QA für die ISEC7 EMM Suite (Enterprise Mobility Management & Monitoring) im Rahmen des Android- und iOS-Geräte-Rollouts.',
      'Support-Analyst für BlackBerry UEM; First-Level-Support und Ticketsystem.',
    ],
  },
];

export const deResearch: { type: string; abstract: string }[] = [
  {
    type: 'Masterarbeit',
    abstract:
      'Sprachunabhängiges Empfehlungssystem, trainiert auf 823K Artikeln und 313M+ Seitenaufrufen deutscher Nachrichtenportale. Lesehistorie als Zeitreihe von LaBSE-Embeddings (768-dim, 109 Sprachen) in einen GPT2-basierten kausalen Transformer-Decoder (85,9M Parameter) — Vorhersage des nächsten Artikel-Embeddings als Regressionsaufgabe. Retrieval via Annoy-ANN-Suche. Training auf 4× A100-SXM4 GPUs für ~47h. Validiert per A/B-Test auf 4 Live-Newsportalen (262K Seitenaufrufe) mit CTR als primärem KPI.',
  },
  {
    type: 'Paper',
    abstract:
      'Autoencoder-Transformer für sprachunabhängige Satzeinbettungen über 100+ Sprachen mit maschineller Übersetzung als Trainingssignal. Benchmark auf LASER/Tatoeba v1.',
  },
  {
    type: 'Poster',
    abstract:
      'Visuelle Übersicht sprachunabhängiger Satzeinbettungen: ein Modell lernt, semantisch äquivalente Sätze aus 100 Sprachen auf ähnliche Vektoren in einem gemeinsamen Einbettungsraum abzubilden.',
  },
  {
    type: 'Paper',
    abstract:
      'Survey, der inhaltsbasiertes und kollaboratives Filtern mit NLP-Methoden von LASER bis Transformers verbindet — mit dem Ziel, beide Domänen zu vereinen.',
  },
  {
    type: 'Bachelorarbeit',
    abstract:
      "BFS-basierter Algorithmus, der alle möglichen Trennpositionen eines Textes durchsucht und jeden Split via BERT's Next-Sentence-Prediction bewertet. Der Split mit der niedrigsten Fortsetzungswahrscheinlichkeit wird gewählt — entwickelt für Chatbot-Nachrichten in Umgangssprache, bei denen Regex-Splitter versagen. Verbessert Accuracy und F1 um bis zu 10% auf einem 51-Klassen-Datensatz.",
  },
];

export const deProjects: string[] = [
  'PoC KI-Interview-Agent mit Human-in-the-Loop-Feedback. LangGraph-Zustandsmaschine entscheidet per Antwort: nachfragen, vertiefen oder weitergehen. Streaming via SSE.',
  'Implementierung des LARO-Papers — sprachunabhängige Satzeinbettungen aus feinabgestimmtem RoBERTa. Benchmark auf Facebook LASER/Tatoeba v1.',
  'Dual Encoder mit linearer Attention (Performer-Architektur) für sprachunabhängige Einbettungen — LaBSE-Qualität mit linearer Rechenkomplexität.',
  'Veröffentlichtes pip-Paket für Topic Clustering via Transformer-Einbettungen und Kosinusähnlichkeit. Unterstützt K-Means und agglomeratives Clustering. Colab & Kaggle Notebooks inklusive.',
  'Empirischer Benchmark: Adam, LARS, LAMB, SGD und AdaBelief auf ResNet mit CIFAR-10 und CIFAR-100, mit plotly-Visualisierungen.',
];

export const deSkillGroupNames: Record<string, string> = {
  'LLM & Agentic Systems': 'LLM & Agentische Systeme',
  'LLM Providers': 'LLM-Anbieter',
  'Cloud / Infrastructure': 'Cloud / Infrastruktur',
  'Evaluation / Responsible AI': 'Evaluation / Verantwortungsvolle KI',
  'Team & Delivery': 'Team & Lieferung',
  'Languages': 'Sprachen',
};

// Only the "Languages" group has translatable items
export const deLanguageItems: string[] = [
  'Deutsch (Muttersprache)',
  'Englisch (fließend)',
  'Spanisch (Grundkenntnisse)',
];
