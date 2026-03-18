# CV Site — Claude Instructions

## Bilingual content (EN + DE)

Every content change must be applied to **both languages**:
- English: `src/data/` — `experience.ts`, `research.ts`, `projects.ts`, `skills.ts`
- German: `src/i18n/de.ts`
- Inline content (Hero, Contact, Nav, Awards, etc.): `data-lang="en"` and `data-lang="de"` spans in the `.astro` components

**Translations must read naturally in the target language** — not literal word-for-word translations. German professional writing uses nominalized style (Nominalstil); English CV language uses action verbs. Adapt accordingly.

Domain terms that stay in English even in the German version: Data Scientist, RAG, LLM, LangGraph, MCP, embeddings, tech tags, product/tool names.
