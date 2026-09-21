export interface ArchetypePhase {
  readonly name: string;
  readonly required: boolean;
  readonly description: string;
}

export interface ArchetypeContract {
  readonly id: string;
  readonly name: string;
  readonly job: string;
  readonly requiredPhases: readonly ArchetypePhase[];
  readonly allowedOptionalPhases: readonly ArchetypePhase[];
  readonly actionExpectations: readonly string[];
  readonly contentObligations: readonly string[];
}

export const ACQUISITION_ARCHETYPE: ArchetypeContract = {
  id: 'PAGE-ARCHETYPE-ACQUISITION',
  name: 'Acquisition Archetype',
  job: 'Support Job -> relevance -> value -> conceptual understanding -> reassurance -> legitimate next action.',
  requiredPhases: [
    {
      name: 'Job Orientation',
      required: true,
      description: 'Establish clear context and value proposition.'
    },
    {
      name: 'Conceptual Flow',
      required: true,
      description: 'Explain how the system works without jargon.'
    },
    {
      name: 'Integration Reassurance',
      required: true,
      description: 'Address integration mechanics.'
    },
    { name: 'Legitimate Action', required: true, description: 'Provide one clear primary action.' }
  ],
  allowedOptionalPhases: [
    {
      name: 'Progressive Depth Paths',
      required: false,
      description: 'Offer deeper technical exploration.'
    }
  ],
  actionExpectations: ['Primary CTA leading to developer preview or key path'],
  contentObligations: ['No false marketing claims or unproven capabilities']
} as const;
