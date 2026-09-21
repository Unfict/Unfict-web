import type { ArchetypeContract } from './AcquisitionArchetype';

export const PILLAR_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-PILLAR',
  name: 'Pillar Archetype',
  job: 'Support subject -> conceptual model -> relevance/problem -> useful system behavior -> optional depth -> next step.',
  requiredPhases: [
    {
      name: 'Subject Orientation',
      required: true,
      description: 'Define the core standard or subject area.'
    },
    {
      name: 'Conceptual Model',
      required: true,
      description: 'Illustrate system flow and interaction.'
    },
    {
      name: 'System Capability',
      required: true,
      description: 'Detail technical and practical behavior.'
    }
  ],
  allowedOptionalPhases: [
    { name: 'FAQ Section', required: false, description: 'Answer common technical questions.' },
    { name: 'Final CTA', required: false, description: 'Direct to integration or documentation.' }
  ],
  actionExpectations: ['Access documentation or integration guides'],
  contentObligations: ['Maintain standard-compliant technical accuracy']
} as const;
