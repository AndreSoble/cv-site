export interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  language: string;
}

export const projects: Project[] = [
  {
    name: 'interview-agent',
    description:
      'PoC AI interview agent with human-in-the-loop feedback. LangGraph state machine decides per answer whether to clarify, probe, or advance. Streams responses via SSE.',
    tech: ['FastAPI', 'LangGraph', 'Ollama', 'Mistral 7B', 'PostgreSQL', 'Alembic', 'Streamlit', 'Docker', 'GitHub Actions'],
    url: 'https://github.com/AndreSoble/interview-agent',
    language: 'Python',
  },
  {
    name: 'laro',
    description:
      'Implementation of the LARO paper — language-agnostic sentence embeddings from finetuned RoBERTa. Benchmarked on Facebook LASER/Tatoeba v1 dataset.',
    tech: ['PyTorch', 'HuggingFace', 'fairscale', 'wandb', 'laserembeddings', 'Docker'],
    url: 'https://github.com/AndreSoble/laro',
    language: 'Python',
  },
  {
    name: 'PerformerDualEncoder',
    description:
      'Dual encoder using linear-attention Performer architecture to produce language-agnostic embeddings — LaBSE-level cross-lingual quality with linear computational complexity.',
    tech: ['PyTorch', 'HuggingFace', 'DeepSpeed', 'OPUS-100', 'Docker', 'NVIDIA GPU'],
    url: 'https://github.com/AndreSoble/PerformerDualEncoder',
    language: 'Python',
  },
  {
    name: 'ClusterTransformer',
    description:
      'Published pip package for topic clustering via transformer embeddings and cosine similarity. Supports K-means and agglomerative clustering. Colab & Kaggle notebooks included.',
    tech: ['PyTorch', 'HuggingFace', 'scikit-learn', 'plotly', 'pip package'],
    url: 'https://github.com/AndreSoble/ClusterTransformer',
    language: 'Python',
  },
  {
    name: 'OptimizerComparisonCIFAR10',
    description:
      'Empirical benchmark comparing Adam, LARS, LAMB, SGD, and AdaBelief optimizers on ResNet across CIFAR-10 and CIFAR-100, with plotly visualizations.',
    tech: ['PyTorch', 'torchvision', 'LARS', 'LAMB', 'AdaBelief', 'plotly'],
    url: 'https://github.com/AndreSoble/OptimizerComparisonCIFAR10',
    language: 'Python',
  },
];
