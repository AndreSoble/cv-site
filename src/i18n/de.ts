// German translations for dynamic content.
// Domain terms (Data Scientist, RAG, LLM, tech tags) intentionally kept in English.

export const deExperience: { description: { text: string; detail?: string[] }[] }[] = [
  {
    // K+N Senior Data Scientist
    description: [
      {
        text: 'K.AI — unternehmensweite Konversationsplattform, die ~8.000 Mitarbeitenden ermöglicht, mit Unternehmensdaten zu chatten und Wissen im Unternehmen zu finden; de facto Platform-, ML- und Backend-Engineer über den gesamten Stack.',
        detail: [
          '3.000–4.000 Anfragen/Tag in Produktion.',
          'Gestartet auf Basis eines AWS-Blueprints, dann umfassend neu gebaut und erweitert.',
        ],
      },
      {
        text: 'Technischer Anker von K.AI beim Wachstum des Teams von 5 auf ~20: Roadmap mitgestaltet, Epics aufgebrochen und neue Engineers in zwei Squads eingearbeitet.',
      },
      {
        text: 'Weiterentwicklung von reinem RAG (Phase 1) zu einem agentischen System (Phase 2): LangGraph-Orchestrierung, LiteLLM-Abstraktion, MCP mit OAuth.',
        detail: [
          'Phase 1: RAG über interne Wissensdatenbanken; AppSync/GraphQL-API, Cognito + SSO, CDK-Deployment.',
          'Phase 2: Stateful LangGraph-Orchestrierung — RAG ist ein Werkzeug, das der Agent aufrufen kann, nicht der Standardpfad.',
          'MCP mit OAuth: eigene MCP-Server gebaut und externe konsumiert; interne K+N-Entwicklerteams befähigt, ihre eigenen Services für K.AI bereitzustellen — die Plattform wird so zum erweiterbaren unternehmensweiten Agenten.',
        ],
      },
      {
        text: 'AWS-nativer Retrieval-Stack: OpenSearch Hybrid Search, Cohere-Embeddings und Reranking; CDK-Deployment.',
        detail: [
          'Eigene Multi-Format-Ingestion-Pipeline: Extraktion von Text und Bildern aus PDFs, DOCX, PPTX, PNG/JPG — OCR auf jeden Bildtyp angewendet, nicht nur auf eingescannte Dokumente.',
          'Bilder mit OCR-Text und Gemini-generierten Beschreibungen angereichert; Referenzen erhalten, damit das LLM Bilder direkt in seine Antworten einbinden kann.',
          'Aktuell ~8 Mio. Chunks aus ~5 Mio. Dokumenten in Produktion; Crawler für Confluence und interne Webseiten.',
          'AWS Titan + Cohere-Embeddings via Bedrock; S3, DynamoDB, Step Functions, Lambda.',
        ],
      },
      {
        text: 'Selbstentwickeltes Evaluierungsframework und Workspace-Analytics-Dashboard.',
        detail: [
          'Von RAGAS inspiriert, aber eigenentwickelt: LLM-as-a-judge, kuratierte Datensätze, Regressionsgates — nicht auf der RAGAS-Bibliothek aufgebaut.',
          'Monitoring für Adoption, Wissenslücken und Content-Qualität; genutzt zur Definition von Launch-Kriterien.',
          'Workspace-Dashboard: Team Leads verfolgen Nutzungsmuster, Wissenslücken und Content-Qualität pro Workspace.',
        ],
      },
      {
        text: 'Echtzeit-Streaming, fortsetzbares State-Management und Datenschutz-Compliance implementiert.',
        detail: [
          'WebSocket-basiertes Streaming-Protokoll für Echtzeit-UX.',
          'ElastiCache/Valkey für fortsetzbares LangGraph- und WebSocket-State; RDS (PostgreSQL) für dauerhafte Gesprächspersistenz.',
          'PII-Pipeline im ELT-Offload: Gesprächs- und sensible Daten älter als 90 Tage werden automatisch gelöscht.',
        ],
      },
    ],
  },
  {
    // K+N Data Scientist
    description: [
      {
        text: 'Mehrstufige Business-Partner-Matching-Pipeline zum Anreichern interner K+N-Daten mit Dun & Bradstreet.',
        detail: [
          'Dreistufige Hierarchie: CDQ/D&B Score-Gating → LaBSE Kosinus-Ähnlichkeit → Azure OpenAI GPT-4 Turbo Structured Outputs als finaler Fallback.',
          'Im Laufe der Zeit ersetzte die GPT-4-Stufe mehrere Zwischenschritte, da sie robuster und wartbarer war.',
        ],
      },
      {
        text: '92% Kostenreduktion und 98% Precision gegenüber dem manuellen Prozess. Projekt mit dem CDQ Good Practice Award 2025 ausgezeichnet.',
        detail: [
          'Azure OpenAI PTUs für höheren Durchsatz; iteratives Prompt Engineering für zuverlässige Structured Outputs.',
          'Ground-Truth-Labels erstellt; Requirements-Engineering mit bereichsübergreifenden Stakeholdern.',
          'Als internes Datenprodukt geliefert, das K+N-weit genutzt wird; Auszeichnung nach Andres Wechsel zum nächsten Projekt.',
        ],
      },
      {
        text: 'Tägliche ELT-Pipelines mit Kubeflow Pipelines — Datenintegration aus Oracle und heterogenen Unternehmenssystemen nach Snowflake.',
        detail: [
          'Laden aus Oracle und weiteren internen Quellsystemen nach Snowflake; Transformationen und Datenanreicherung direkt auf Snowflake.',
          'Zusammenführung von Daten aus K+Ns heterogener IT-Landschaft — über Systemgrenzen, Formate und Verantwortungsbereiche hinweg — zu konsolidierten Business-Partner-Datensätzen.',
          'Darüber hinaus: Unterstützung weiterer Datenprodukt-Aufgaben rund um Partner-Gruppierungen und verwandte Entitäten.',
        ],
      },
    ],
  },
  {
    // moinAI Full-time
    description: [
      {
        text: 'Gesamte Infrastruktur von Heroku auf Kubernetes bei OVH migriert; ~50% Kostenreduktion.',
        detail: [
          'Vollständige Migration von Heroku (keine Infrastruktur) zu OVH Infrastructure-as-a-Service verantwortet.',
          'GitHub Actions CI/CD-Pipelines mit Deployment auf Kubernetes bei OVH eingerichtet.',
        ],
      },
      {
        text: 'Multi-Channel-Integrationen mit CRM- und Support-Plattformen (Zendesk, zChat, Zapier) sowie Kunden- und Partnersystemen implementiert.',
      },
      {
        text: 'Unüberwachte Intent-Discovery aufgebaut — ein Daten-Flywheel für kontinuierliche Modellverbesserung.',
        detail: [
          'Neue und historische Nutzernachrichten eingebettet und geclustert; Cluster mit bekannten Intents verglichen.',
          'Erkennt wirklich neue Intent-Kategorien, die das Modell noch nicht abdeckt.',
        ],
      },
      {
        text: 'KI/NLP-Komponenten verantwortet und weiterentwickelt; wiederholbare Active-Learning-Retraining-Workflows gebaut, um kundenseitige Iterationszyklen zu verkürzen.',
      },
      {
        text: 'Öffentliche GPT-3-Chatbot-Demo für das OMR Festival entwickelt — flexible Gespräche außerhalb des regelbasierten Ablaufs, noch vor ChatGPT.',
      },
    ],
  },
  {
    // moinAI Working Student
    description: [
      {
        text: 'In-House-NLP-Pipeline als Ersatz für Google Dialogflow entwickelt — übertraf Dialogflow auf moinAIs Anwendungsfall.',
        detail: [
          'Vollständiger Loop: Training, Evaluation, Hosting und Inferenz.',
          'Textklassifikation + Intent-Erkennung; GPT-2 zur synthetischen Trainingsdaten-Augmentierung.',
          'Ermöglichte moinAI, den NLP-Stack selbst zu besitzen statt von einem Drittanbieter abhängig zu sein.',
        ],
      },
      {
        text: 'Implementierung und Architektur der KI-Anwendung von knowhere verantwortet.',
      },
    ],
  },
  {
    // ISEC7
    description: [
      {
        text: 'QA für die ISEC7 EMM Suite (Enterprise Mobility Management & Monitoring) im Rahmen des Android- und iOS-Geräte-Rollouts.',
      },
      {
        text: 'Support-Analyst für BlackBerry UEM; First-Level-Support und Ticketsystem.',
      },
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
  'Team & Delivery': 'Team & Delivery',
  'Languages': 'Sprachen',
};

// Only the "Languages" group has translatable items
export const deLanguageItems: string[] = [
  'Deutsch (Muttersprache)',
  'Englisch (fließend)',
  'Spanisch (Grundkenntnisse)',
];
