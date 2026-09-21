import type { ArchetypeContract } from './AcquisitionArchetype';

export const LEGAL_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-LEGAL',
  name: 'Legal Archetype',
  job: 'Support document identity -> date -> readable structured sections -> stable legal navigation where useful.',
  requiredPhases: [
    { name: 'Document Identity', required: true, description: 'Title and effective date.' },
    { name: 'Structured Sections', required: true, description: 'Clear legal clauses and terms.' }
  ],
  allowedOptionalPhases: [],
  actionExpectations: ['Review legal terms'],
  contentObligations: ['Precise legal language']
} as const;
