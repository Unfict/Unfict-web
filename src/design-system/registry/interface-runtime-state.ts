import placeholdersOverlay from '../metadata/INTERFACE-PLACEHOLDERS.json';
import {
  getRegistryRecordById,
  INTERFACE_REGISTRY,
  type ImplementationStatus,
  type InterfaceRegistryRecord
} from './interface-registry';

const placeholderSet = new Set<string>(placeholdersOverlay.placeholders);

/**
 * Returns the effective implementation status for a given registry ID,
 * taking into account the source governance registry status and the
 * runtime implementation placeholder overlay.
 */
export function getEffectiveImplementationStatus(id: string): ImplementationStatus {
  const record = getRegistryRecordById(id);
  if (!record) {
    throw new Error(`Unknown registry ID: ${id}`);
  }

  // If source status is already IMPLEMENTED, VERIFIED, or DEPRECATED, preserve it
  if (
    record.implementationStatus === 'IMPLEMENTED' ||
    record.implementationStatus === 'VERIFIED' ||
    record.implementationStatus === 'DEPRECATED'
  ) {
    return record.implementationStatus;
  }

  // If in placeholder overlay, effective status is PLACEHOLDER
  if (placeholderSet.has(id)) {
    return 'PLACEHOLDER';
  }

  return record.implementationStatus;
}

export function isPlaceholderOwner(id: string): boolean {
  return placeholderSet.has(id);
}

export function getAllPlaceholderOwnerIds(): readonly string[] {
  return placeholdersOverlay.placeholders;
}

export function getAllRuntimeRecords(): readonly (InterfaceRegistryRecord & {
  readonly effectiveImplementationStatus: ImplementationStatus;
})[] {
  return INTERFACE_REGISTRY.map((record) => ({
    ...record,
    effectiveImplementationStatus: getEffectiveImplementationStatus(record.id)
  }));
}
