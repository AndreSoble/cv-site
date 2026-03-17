export interface ResearchItem {
  title: string;
  type: string;
  year: number;
  abstract: string;
  tech: string[];
  pdfPath: string;
  externalUrl?: string;
}

export const research: ResearchItem[] = [
  {
    title: 'Language Agnostic News Recommendations Using Deep Learning Based Causal Transformer Decoder',
    type: 'Master Thesis',
    year: 2022,
    abstract:
      'Language-agnostic, sequence-based recommender generalising to cold-start articles, trained on 313M+ pageviews. User history represented as time-series of embeddings fed into a causal transformer decoder. Validated via A/B-tested CTR as primary KPI.',
    tech: ['PyTorch', 'PyTorch Lightning', 'LaBSE', 'Annoy', 'Weights & Biases', 'pandas'],
    pdfPath: '/pdfs/master-thesis.pdf',
    externalUrl: 'https://reposit.haw-hamburg.de/handle/20.500.12738/16167',
  },
  {
    title: 'Building LARO: Language Agnostic Sentence Embeddings from Finetuned RoBERTa',
    type: 'Paper',
    year: 2021,
    abstract:
      'Autoencoder Transformer architecture generating language-agnostic sentence embeddings across 100+ languages using machine translation as a training signal. Benchmarked on LASER/Tatoeba v1.',
    tech: ['PyTorch', 'HuggingFace', 'RoBERTa', 'XLM-RoBERTa', 'OPUS-100', 'NVIDIA APEX', 'fairscale', 'Docker'],
    pdfPath: '/pdfs/laro-paper.pdf',
  },
  {
    title: 'Eine KI die 100 Sprachen versteht',
    type: 'Poster',
    year: 2021,
    abstract:
      'Visual overview of language-agnostic sentence embedding: training a model to map semantically equivalent sentences across 100 languages to similar vectors in a shared embedding space.',
    tech: ['LaBSE', 'LASER', 'multilingual NLP'],
    pdfPath: '/pdfs/poster.pdf',
  },
  {
    title: 'Natural Language Processing in the Context of Recommender Systems',
    type: 'Paper',
    year: 2020,
    abstract:
      'Survey combining fundamental recommender system techniques — content-based and collaborative filtering — with NLP methods from LASER to Transformers, with the goal of combining both domains.',
    tech: ['LASER', 'Transformers', 'Collaborative Filtering', 'Content-Based Filtering', 'Cosine Similarity', 'ANN'],
    pdfPath: '/pdfs/nlp-recommender-paper.pdf',
  },
  {
    title: 'Text Classification via BERT-based Text Splitting Controlled by a Search Algorithm',
    type: 'Bachelor Thesis',
    year: 2019,
    abstract:
      'BERT-based text-splitting strategy guided by a search algorithm to improve classification performance on long documents beyond the standard 512-token limit.',
    tech: ['BERT', 'HuggingFace', 'Python', 'Text Classification'],
    pdfPath: '/pdfs/bachelor-thesis.pdf',
    externalUrl: 'https://reposit.haw-hamburg.de/handle/20.500.12738/14496',
  },
];
