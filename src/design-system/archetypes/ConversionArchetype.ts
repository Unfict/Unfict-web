import type { ArchetypeContract } from './AcquisitionArchetype';

export const CONVERSION_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-CONVERSION',
  name: 'Conversion Archetype',
  job: 'Support expectation -> qualification/context -> minimum necessary form -> privacy context -> success/error -> continuation.',
  requiredPhases: [
    { name: 'Expectation Setting', required: true, description: 'Explain what submission grants.' },
    { name: 'Form Collection', required: true, description: 'Minimum required fields.' }
  ],
  allowedOptionalPhases: [
    { name: 'Privacy Context', required: false, description: 'Data protection assurance.' }
  ],
  actionExpectations: ['Form submission'],
  contentObligations: ['Collect only necessary data']
} as const;
