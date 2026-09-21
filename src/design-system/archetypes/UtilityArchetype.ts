import type { ArchetypeContract } from './AcquisitionArchetype';

export const UTILITY_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-UTILITY',
  name: 'Utility Archetype',
  job: 'Support state -> clear explanation -> legitimate recovery action with minimal UI.',
  requiredPhases: [
    {
      name: 'State Explanation',
      required: true,
      description: 'Clear indication of status or error.'
    },
    { name: 'Recovery Action', required: true, description: 'Actionable link or navigation back.' }
  ],
  allowedOptionalPhases: [],
  actionExpectations: ['Return to safety or home'],
  contentObligations: ['Calm, direct status explanation']
} as const;
