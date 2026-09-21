import type { ArchetypeContract } from './AcquisitionArchetype';

export const ARTICLE_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-ARTICLE',
  name: 'Article Archetype',
  job: 'Support context -> answer/thesis -> explanation -> evidence/examples -> technical depth -> related reading.',
  requiredPhases: [
    { name: 'Article Header', required: true, description: 'Title, lead, author, and date.' },
    { name: 'Article Body', required: true, description: 'Readable editorial/technical text.' }
  ],
  allowedOptionalPhases: [
    { name: 'Related Reading', required: false, description: 'Curated next reading items.' }
  ],
  actionExpectations: ['Read content and navigate to related topics'],
  contentObligations: ['Focus on reading comfort and semantic markup']
} as const;
