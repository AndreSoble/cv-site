import type { Link } from './experience';

export interface ResearchItem {
  title: string;
  titleDE?: string;
  type: string;
  year: number;
  abstract: string;
  tech: string[];
  pdfPath: string;
  links?: Link[];
}

export const research: ResearchItem[] = [
  {
    title: 'Language Agnostic News Recommendations Using Deep Learning Based Causal Transformer Decoder',
    type: 'Master Thesis',
    year: 2022,
    abstract:
      'Language-agnostic sequence-based recommender trained on 823K articles and 313M+ pageviews from German news portals. User reading history encoded as a time-series of LaBSE embeddings (768-dim, 109 languages) fed into a GPT2-based causal transformer decoder (85.9M params) that predicts the next article embedding as a regression task. Retrieved via Annoy ANN search. Trained on 4× A100-SXM4 GPUs for ~47h using fairscale and LAMB optimizer. Validated via A/B testing on 4 live news portals (262K pageviews) with CTR as primary KPI.',
    tech: ['PyTorch', 'PyTorch Lightning', 'LaBSE', 'GPT-2', 'Annoy', 'fairscale', 'LAMB', 'Weights & Biases', 'pandas'],
    pdfPath: '/pdfs/master-thesis.pdf',
    links: [{ label: 'Publication ↗', labelDE: 'Publikation ↗', url: 'https://reposit.haw-hamburg.de/handle/20.500.12738/16167' }],
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
    title: 'An AI That Understands 100 Languages',
    titleDE: 'Eine KI die 100 Sprachen versteht',
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
    year: 2020,
    abstract:
      'Novel BFS-based algorithm that searches all possible split positions of an input text, scoring each candidate split via BERT\'s Next Sentence Prediction. The split with the lowest continuation probability — indicating a natural topic boundary — is selected, and each segment is classified independently. Designed for colloquial/informal text (chatbot messages) where regex splitters fail. Improves standalone classifier accuracy and F1 by up to 10% on a 51-class opinion dataset. Uses bert-large-cased (340M params) for splitting and a BERT+GRU+Linear classifier for intent recognition.',
    tech: ['BERT', 'HuggingFace', 'Flair', 'PyTorch', 'GRU', 'Next Sentence Prediction', 'Python', 'Text Classification'],
    pdfPath: '/pdfs/bachelor-thesis.pdf',
    links: [{ label: 'Publication ↗', url: 'https://reposit.haw-hamburg.de/handle/20.500.12738/14496' }],
  },
];
