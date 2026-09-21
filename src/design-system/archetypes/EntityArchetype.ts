import type { ArchetypeContract } from './AcquisitionArchetype';

export const ENTITY_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-ENTITY',
  name: 'Entity Archetype',
  job: 'Support entity -> purpose -> role -> boundaries -> credibility -> identity.',
  requiredPhases: [
    {
      name: 'Entity Purpose',
      required: true,
      description: 'State institutional purpose and scope.'
    },
    { name: 'Brand Signature', required: true, description: 'Reinforce identity and authority.' }
  ],
  allowedOptionalPhases: [
    {
      name: 'Integration Reassurance',
      required: false,
      description: 'Explain institutional boundaries.'
    }
  ],
  actionExpectations: ['Learn more or contact entity'],
  contentObligations: ['Institutional reality and clear organizational facts']
} as const;
