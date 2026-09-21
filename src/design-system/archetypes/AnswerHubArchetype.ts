import type { ArchetypeContract } from './AcquisitionArchetype';

export const ANSWER_HUB_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-ANSWER-HUB',
  name: 'Answer Hub Archetype',
  job: 'Support question orientation -> grouped direct answers -> optional depth -> related paths -> legitimate next action.',
  requiredPhases: [
    {
      name: 'Question Orientation',
      required: true,
      description: 'Categorize questions logically.'
    },
    { name: 'Direct Answers', required: true, description: 'Provide concise direct answers first.' }
  ],
  allowedOptionalPhases: [
    { name: 'Related Paths', required: false, description: 'Link to detailed documentation.' }
  ],
  actionExpectations: ['Expand disclosure triggers or follow related links'],
  contentObligations: ['Direct, accurate answers without evasive copy']
} as const;
