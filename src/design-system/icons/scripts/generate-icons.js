/* global process, console */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = path.resolve(process.cwd(), 'src/design-system/icons');

const inventory = [
  // Collection A — Brand Motifs
  {
    code: 'A01',
    name: 'Canonical Mark',
    shortName: 'mark',
    id: 'uf-motif-mark',
    family: 'motifs',
    collection: 'A',
    channels: 1,
    brandLocked: true,
    defaultTone: 'locked',
    allowedTones: ['locked'],
    blueAccentAllowed: false,
    semanticColorAllowed: false,
    accessibilityMode: 'brand',
    placeholder: false
  },
  {
    code: 'A02',
    name: 'Motif A',
    shortName: 'motif-a',
    id: 'uf-motif-a',
    family: 'motifs',
    collection: 'A',
    channels: 1,
    brandLocked: false,
    defaultTone: 'inherit',
    allowedTones: ['inherit', 'mono', 'brand', 'muted', 'disabled'],
    blueAccentAllowed: true,
    semanticColorAllowed: false,
    accessibilityMode: 'contextual',
    placeholder: true
  },
  {
    code: 'A03',
    name: 'Motif B',
    shortName: 'motif-b',
    id: 'uf-motif-b',
    family: 'motifs',
    collection: 'A',
    channels: 1,
    brandLocked: false,
    defaultTone: 'inherit',
    allowedTones: ['inherit', 'mono', 'brand', 'muted', 'disabled'],
    blueAccentAllowed: true,
    semanticColorAllowed: false,
    accessibilityMode: 'contextual',
    placeholder: true
  },
  {
    code: 'A04',
    name: 'Paired Direction',
    shortName: 'paired-direction',
    id: 'uf-motif-paired-direction',
    family: 'motifs',
    collection: 'A',
    channels: 1,
    brandLocked: false,
    defaultTone: 'inherit',
    allowedTones: ['inherit', 'mono', 'brand', 'muted', 'disabled'],
    blueAccentAllowed: true,
    semanticColorAllowed: false,
    accessibilityMode: 'contextual',
    placeholder: true
  },
  {
    code: 'A05',
    name: 'Route Accent',
    shortName: 'route-accent',
    id: 'uf-motif-route-accent',
    family: 'motifs',
    collection: 'A',
    channels: 1,
    brandLocked: false,
    defaultTone: 'inherit',
    allowedTones: ['inherit', 'mono', 'brand', 'muted', 'disabled'],
    blueAccentAllowed: true,
    semanticColorAllowed: false,
    accessibilityMode: 'contextual',
    placeholder: true
  },
  {
    code: 'A06',
    name: 'Quiet Corner',
    shortName: 'quiet-corner',
    id: 'uf-motif-quiet-corner',
    family: 'motifs',
    collection: 'A',
    channels: 1,
    brandLocked: false,
    defaultTone: 'inherit',
    allowedTones: ['inherit', 'mono', 'brand', 'muted', 'disabled'],
    blueAccentAllowed: true,
    semanticColorAllowed: false,
    accessibilityMode: 'contextual',
    placeholder: true
  },

  // Collection B — Functional UI
  {
    code: 'B01',
    name: 'Menu',
    shortName: 'menu',
    id: 'uf-icon-menu',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B02',
    name: 'Close',
    shortName: 'close',
    id: 'uf-icon-close',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B03',
    name: 'Search',
    shortName: 'search',
    id: 'uf-icon-search',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B04',
    name: 'Chevron Right',
    shortName: 'chevron-right',
    id: 'uf-icon-chevron-right',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B05',
    name: 'Chevron Down',
    shortName: 'chevron-down',
    id: 'uf-icon-chevron-down',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B06',
    name: 'Arrow Right',
    shortName: 'arrow-right',
    id: 'uf-icon-arrow-right',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B07',
    name: 'Arrow Left',
    shortName: 'arrow-left',
    id: 'uf-icon-arrow-left',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B08',
    name: 'Arrow Up',
    shortName: 'arrow-up',
    id: 'uf-icon-arrow-up',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B09',
    name: 'Arrow Down',
    shortName: 'arrow-down',
    id: 'uf-icon-arrow-down',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B10',
    name: 'Plus',
    shortName: 'plus',
    id: 'uf-icon-plus',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B11',
    name: 'Minus',
    shortName: 'minus',
    id: 'uf-icon-minus',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B12',
    name: 'Edit',
    shortName: 'edit',
    id: 'uf-icon-edit',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B13',
    name: 'Delete',
    shortName: 'delete',
    id: 'uf-icon-delete',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B14',
    name: 'Copy',
    shortName: 'copy',
    id: 'uf-icon-copy',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B15',
    name: 'External Link',
    shortName: 'external-link',
    id: 'uf-icon-external-link',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B16',
    name: 'Settings',
    shortName: 'settings',
    id: 'uf-icon-settings',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B17',
    name: 'User',
    shortName: 'user',
    id: 'uf-icon-user',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B18',
    name: 'Notifications',
    shortName: 'notifications',
    id: 'uf-icon-notifications',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B19',
    name: 'Download',
    shortName: 'download',
    id: 'uf-icon-download',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B20',
    name: 'Upload',
    shortName: 'upload',
    id: 'uf-icon-upload',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B21',
    name: 'Refresh',
    shortName: 'refresh',
    id: 'uf-icon-refresh',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B22',
    name: 'Filter',
    shortName: 'filter',
    id: 'uf-icon-filter',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B23',
    name: 'Info',
    shortName: 'info',
    id: 'uf-icon-info',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B24',
    name: 'Warning',
    shortName: 'warning',
    id: 'uf-icon-warning',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B25',
    name: 'Success',
    shortName: 'success',
    id: 'uf-icon-success',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B26',
    name: 'Error',
    shortName: 'error',
    id: 'uf-icon-error',
    family: 'functional',
    collection: 'B',
    channels: 1
  },
  {
    code: 'B27',
    name: 'More',
    shortName: 'more',
    id: 'uf-icon-more',
    family: 'functional',
    collection: 'B',
    channels: 1
  },

  // Collection C — Domain & Concept
  {
    code: 'C01',
    name: 'Product',
    shortName: 'product',
    id: 'uf-icon-product',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C02',
    name: 'Identifier',
    shortName: 'identifier',
    id: 'uf-icon-identifier',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C03',
    name: 'Digital Link',
    shortName: 'digital-link',
    id: 'uf-icon-digital-link',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C04',
    name: 'Resolver',
    shortName: 'resolver',
    id: 'uf-icon-resolver',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C05',
    name: 'Resource',
    shortName: 'resource',
    id: 'uf-icon-resource',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C06',
    name: 'Route',
    shortName: 'route',
    id: 'uf-icon-route',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C07',
    name: 'Persistent',
    shortName: 'persistent',
    id: 'uf-icon-persistent',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C08',
    name: 'Validation',
    shortName: 'validation',
    id: 'uf-icon-validation',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C09',
    name: 'Qualifier',
    shortName: 'qualifier',
    id: 'uf-icon-qualifier',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C10',
    name: 'Context',
    shortName: 'context',
    id: 'uf-icon-context',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C11',
    name: 'Standard',
    shortName: 'standard',
    id: 'uf-icon-standard',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C12',
    name: 'Interface',
    shortName: 'interface',
    id: 'uf-icon-interface',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C13',
    name: 'Host',
    shortName: 'host',
    id: 'uf-icon-host',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C14',
    name: 'Subject',
    shortName: 'subject',
    id: 'uf-icon-subject',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C15',
    name: 'Organization',
    shortName: 'organization',
    id: 'uf-icon-organization',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C16',
    name: 'Relationship',
    shortName: 'relationship',
    id: 'uf-icon-relationship',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C17',
    name: 'Authority',
    shortName: 'authority',
    id: 'uf-icon-authority',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C18',
    name: 'Delegation',
    shortName: 'delegation',
    id: 'uf-icon-delegation',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C19',
    name: 'Capability',
    shortName: 'capability',
    id: 'uf-icon-capability',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C20',
    name: 'Evidence',
    shortName: 'evidence',
    id: 'uf-icon-evidence',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C21',
    name: 'Standing',
    shortName: 'standing',
    id: 'uf-icon-standing',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C22',
    name: 'Policy',
    shortName: 'policy',
    id: 'uf-icon-policy',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C23',
    name: 'Outcome',
    shortName: 'outcome',
    id: 'uf-icon-outcome',
    family: 'domain',
    collection: 'C',
    channels: 2
  },
  {
    code: 'C24',
    name: 'Receipt',
    shortName: 'receipt',
    id: 'uf-icon-receipt',
    family: 'domain',
    collection: 'C',
    channels: 2
  },

  // Collection D — Navigation & Workspace
  {
    code: 'D01',
    name: 'Home',
    shortName: 'home',
    id: 'uf-icon-home',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D02',
    name: 'Dashboard',
    shortName: 'dashboard',
    id: 'uf-icon-dashboard',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D03',
    name: 'Sidebar',
    shortName: 'sidebar',
    id: 'uf-icon-sidebar',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D04',
    name: 'Panel',
    shortName: 'panel',
    id: 'uf-icon-panel',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D05',
    name: 'Grid View',
    shortName: 'grid-view',
    id: 'uf-icon-grid-view',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D06',
    name: 'List View',
    shortName: 'list-view',
    id: 'uf-icon-list-view',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D07',
    name: 'Table View',
    shortName: 'table-view',
    id: 'uf-icon-table-view',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D08',
    name: 'Sort',
    shortName: 'sort',
    id: 'uf-icon-sort',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D09',
    name: 'Expand',
    shortName: 'expand',
    id: 'uf-icon-expand',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },
  {
    code: 'D10',
    name: 'Collapse',
    shortName: 'collapse',
    id: 'uf-icon-collapse',
    family: 'navigation',
    collection: 'D',
    channels: 1
  },

  // Collection E — Content, Files & Communication
  {
    code: 'E01',
    name: 'File',
    shortName: 'file',
    id: 'uf-icon-file',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E02',
    name: 'Folder',
    shortName: 'folder',
    id: 'uf-icon-folder',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E03',
    name: 'Documentation',
    shortName: 'documentation',
    id: 'uf-icon-documentation',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E04',
    name: 'Attachment',
    shortName: 'attachment',
    id: 'uf-icon-attachment',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E05',
    name: 'Media',
    shortName: 'media',
    id: 'uf-icon-media',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E06',
    name: 'Bookmark',
    shortName: 'bookmark',
    id: 'uf-icon-bookmark',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E07',
    name: 'Share',
    shortName: 'share',
    id: 'uf-icon-share',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E08',
    name: 'Print',
    shortName: 'print',
    id: 'uf-icon-print',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E09',
    name: 'Notification',
    shortName: 'notification',
    id: 'uf-icon-notification',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E10',
    name: 'Message',
    shortName: 'message',
    id: 'uf-icon-message',
    family: 'content',
    collection: 'E',
    channels: 1
  },
  {
    code: 'E11',
    name: 'Help',
    shortName: 'help',
    id: 'uf-icon-help',
    family: 'content',
    collection: 'E',
    channels: 1
  },

  // Collection F — Developer, API & Data
  {
    code: 'F01',
    name: 'Code',
    shortName: 'code',
    id: 'uf-icon-code',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F02',
    name: 'Terminal',
    shortName: 'terminal',
    id: 'uf-icon-terminal',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F03',
    name: 'API',
    shortName: 'api',
    id: 'uf-icon-api',
    family: 'developer',
    collection: 'F',
    channels: 2
  },
  {
    code: 'F04',
    name: 'Webhook',
    shortName: 'webhook',
    id: 'uf-icon-webhook',
    family: 'developer',
    collection: 'F',
    channels: 2
  },
  {
    code: 'F05',
    name: 'Database',
    shortName: 'database',
    id: 'uf-icon-database',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F06',
    name: 'Schema',
    shortName: 'schema',
    id: 'uf-icon-schema',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F07',
    name: 'JSON',
    shortName: 'json',
    id: 'uf-icon-json',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F08',
    name: 'Log',
    shortName: 'log',
    id: 'uf-icon-log',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F09',
    name: 'History',
    shortName: 'history',
    id: 'uf-icon-history',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F10',
    name: 'Debug',
    shortName: 'debug',
    id: 'uf-icon-debug',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F11',
    name: 'Run',
    shortName: 'run',
    id: 'uf-icon-run',
    family: 'developer',
    collection: 'F',
    channels: 1
  },
  {
    code: 'F12',
    name: 'Stop',
    shortName: 'stop',
    id: 'uf-icon-stop',
    family: 'developer',
    collection: 'F',
    channels: 1
  },

  // Collection G — GS1, Product Identity & Connected Product
  {
    code: 'G01',
    name: 'Trade Item',
    shortName: 'trade-item',
    id: 'uf-icon-trade-item',
    family: 'gs1',
    collection: 'G',
    channels: 2
  },
  {
    code: 'G02',
    name: 'GTIN',
    shortName: 'gtin',
    id: 'uf-icon-gtin',
    family: 'gs1',
    collection: 'G',
    channels: 2
  },
  {
    code: 'G03',
    name: 'Barcode',
    shortName: 'barcode',
    id: 'uf-icon-barcode',
    family: 'gs1',
    collection: 'G',
    channels: 1
  },
  {
    code: 'G04',
    name: 'QR Code',
    shortName: 'qr-code',
    id: 'uf-icon-qr-code',
    family: 'gs1',
    collection: 'G',
    channels: 1
  },
  {
    code: 'G05',
    name: 'Serial',
    shortName: 'serial',
    id: 'uf-icon-serial',
    family: 'gs1',
    collection: 'G',
    channels: 1
  },
  {
    code: 'G06',
    name: 'Batch / Lot',
    shortName: 'batch-lot',
    id: 'uf-icon-batch-lot',
    family: 'gs1',
    collection: 'G',
    channels: 1
  },
  {
    code: 'G07',
    name: 'Location',
    shortName: 'location',
    id: 'uf-icon-location',
    family: 'gs1',
    collection: 'G',
    channels: 1
  },
  {
    code: 'G08',
    name: 'Party',
    shortName: 'party',
    id: 'uf-icon-party',
    family: 'gs1',
    collection: 'G',
    channels: 1
  },
  {
    code: 'G09',
    name: 'Digital Product Passport',
    shortName: 'dpp',
    id: 'uf-icon-dpp',
    family: 'gs1',
    collection: 'G',
    channels: 2
  },

  // Collection H — Identity, Access & Governance Extensions
  {
    code: 'H01',
    name: 'Authentication',
    shortName: 'authentication',
    id: 'uf-icon-authentication',
    family: 'governance',
    collection: 'H',
    channels: 2
  },
  {
    code: 'H02',
    name: 'Credential',
    shortName: 'credential',
    id: 'uf-icon-credential',
    family: 'governance',
    collection: 'H',
    channels: 2
  },
  {
    code: 'H03',
    name: 'Role',
    shortName: 'role',
    id: 'uf-icon-role',
    family: 'governance',
    collection: 'H',
    channels: 1
  },
  {
    code: 'H04',
    name: 'Permission',
    shortName: 'permission',
    id: 'uf-icon-permission',
    family: 'governance',
    collection: 'H',
    channels: 1
  },
  {
    code: 'H05',
    name: 'Scope',
    shortName: 'scope',
    id: 'uf-icon-scope',
    family: 'governance',
    collection: 'H',
    channels: 1
  },
  {
    code: 'H06',
    name: 'Claim',
    shortName: 'claim',
    id: 'uf-icon-claim',
    family: 'governance',
    collection: 'H',
    channels: 2
  },
  {
    code: 'H07',
    name: 'Provenance',
    shortName: 'provenance',
    id: 'uf-icon-provenance',
    family: 'governance',
    collection: 'H',
    channels: 2
  },
  {
    code: 'H08',
    name: 'Issuer',
    shortName: 'issuer',
    id: 'uf-icon-issuer',
    family: 'governance',
    collection: 'H',
    channels: 1
  },
  {
    code: 'H09',
    name: 'Revocation',
    shortName: 'revocation',
    id: 'uf-icon-revocation',
    family: 'governance',
    collection: 'H',
    channels: 1
  },
  {
    code: 'H10',
    name: 'Expiry',
    shortName: 'expiry',
    id: 'uf-icon-expiry',
    family: 'governance',
    collection: 'H',
    channels: 1
  },

  // Collection I — System, State & Temporal
  {
    code: 'I01',
    name: 'Pending',
    shortName: 'pending',
    id: 'uf-icon-pending',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I02',
    name: 'Processing',
    shortName: 'processing',
    id: 'uf-icon-processing',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I03',
    name: 'Unavailable',
    shortName: 'unavailable',
    id: 'uf-icon-unavailable',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I04',
    name: 'Connected',
    shortName: 'connected',
    id: 'uf-icon-connected',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I05',
    name: 'Disconnected',
    shortName: 'disconnected',
    id: 'uf-icon-disconnected',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I06',
    name: 'Calendar',
    shortName: 'calendar',
    id: 'uf-icon-calendar',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I07',
    name: 'Time',
    shortName: 'time',
    id: 'uf-icon-time',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I08',
    name: 'Recent',
    shortName: 'recent',
    id: 'uf-icon-recent',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I09',
    name: 'Locked',
    shortName: 'locked',
    id: 'uf-icon-locked',
    family: 'state',
    collection: 'I',
    channels: 1
  },
  {
    code: 'I10',
    name: 'Unlocked',
    shortName: 'unlocked',
    id: 'uf-icon-unlocked',
    family: 'state',
    collection: 'I',
    channels: 1
  },

  // Collection J — Inspection, Visibility & Interaction
  {
    code: 'J01',
    name: 'View',
    shortName: 'view',
    id: 'uf-icon-view',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J02',
    name: 'Hide',
    shortName: 'hide',
    id: 'uf-icon-hide',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J03',
    name: 'Inspect',
    shortName: 'inspect',
    id: 'uf-icon-inspect',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J04',
    name: 'Focus',
    shortName: 'focus',
    id: 'uf-icon-focus',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J05',
    name: 'Pin',
    shortName: 'pin',
    id: 'uf-icon-pin',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J06',
    name: 'Unpin',
    shortName: 'unpin',
    id: 'uf-icon-unpin',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J07',
    name: 'Drag',
    shortName: 'drag',
    id: 'uf-icon-drag',
    family: 'interaction',
    collection: 'J',
    channels: 1
  },
  {
    code: 'J08',
    name: 'Resize',
    shortName: 'resize',
    id: 'uf-icon-resize',
    family: 'interaction',
    collection: 'J',
    channels: 1
  }
];

function generate() {
  const manifestIcons = [];
  const placeholderIds = [];

  for (const item of inventory) {
    const isPlaceholder = item.placeholder !== false;
    const is2Channel = item.channels === 2;
    const relSourcePath = `svg/${item.family}/${item.id}.svg`;
    const fullSvgPath = path.join(ROOT_DIR, relSourcePath);

    // Create dir if missing
    fs.mkdirSync(path.dirname(fullSvgPath), { recursive: true });

    // Build SVG content
    let svgContent = '';
    if (item.id === 'uf-motif-mark') {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <g transform="scale(0.0625)">
    <path d="M 321.87 191.5 C 321.95 259.04, 320.92 273.02, 314.39 292.59 C 307.96 311.88, 299.9 324.41, 283.54 340.5 C 264.87 358.88, 247.24 368.52, 221.25 374.56 C 201.25 379.21, 172.62 378.96, 151.16 373.94 C 111.51 364.68, 76.38 332.09, 63 292.16 C 56.85 273.81, 56.59 270.39, 56.55 206 C 56.52 173.82, 56.84 146.3, 57.25 144.84 C 57.76 143.02, 59.42 141.49, 62.5 140 C 66.64 138, 68.22 137.85, 81.75 138.18 C 95.68 138.52, 96.82 138.7, 102.28 141.44 C 109.09 144.87, 116.27 152.18, 119.31 158.78 C 121.42 163.35, 121.51 165.03, 122.1 211 C 122.78 263.84, 123.06 266.38, 129.65 279.72 C 136.55 293.71, 150.61 307.45, 162.68 311.99 C 173.17 315.95, 181.6 317.24, 193 316.66 C 204.14 316.08, 209.86 314.68, 218.21 310.49 C 233.32 302.9, 244.79 289.86, 251.72 272.37 C 254.45 265.5, 254.45 265.5, 254.97 214.5 C 255.5 163.5, 255.5 163.5, 258.18 157.78 C 261.35 151.01, 268.14 144.09, 274.75 140.86 C 279.04 138.78, 281.16 138.52, 296.5 138.22 C 312.16 137.91, 313.75 138.04, 316.71 139.9 C 318.65 141.12, 320.3 143.23, 320.87 145.21 C 321.4 147.04, 321.84 167.55, 321.87 191.5 Z " />
    <path d="M 361.77 26.96 C 361.27 43.68, 359.81 48.83, 352.32 60.21 C 343.52 73.57, 329.78 82.11, 314 84.02 C 294.75 86.35, 290.88 87.06, 283.38 89.57 C 274.51 92.55, 265.62 96.83, 259 101.31 C 252.35 105.81, 239.02 119.04, 228.8 131.27 C 219.28 142.66, 216.68 144.87, 215.31 142.75 C 214.86 142.06, 214.36 129, 214.19 113.72 C 213.91 88.09, 214.05 85.29, 216.02 77.42 C 220.66 58.89, 226.71 48.16, 239.94 34.96 C 246.99 27.93, 250.31 25.49, 258.8 21.14 C 264.69 18.12, 273.26 14.74, 278.8 13.26 C 288.2 10.73, 289.59 10.64, 323.79 10.24 C 351.71 9.91, 359.41 10.1, 360.65 11.12 C 361.97 12.22, 362.14 14.64, 361.77 26.96 Z " />
  </g>
</svg>
`;
    } else {
      if (is2Channel) {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <!-- UNFICT_PLACEHOLDER: ${item.id} -->
  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2" />
  <circle cx="12" cy="12" r="3" fill="var(--uf-icon-accent, #1965EC)" />
</svg>
`;
      } else {
        svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <!-- UNFICT_PLACEHOLDER: ${item.id} -->
  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="2" />
  <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
</svg>
`;
      }
    }

    // Do not overwrite existing non-placeholder file
    let shouldWrite = true;
    if (fs.existsSync(fullSvgPath)) {
      const existing = fs.readFileSync(fullSvgPath, 'utf8');
      if (!existing.includes('UNFICT_PLACEHOLDER') && item.id !== 'uf-motif-mark') {
        shouldWrite = false;
      }
    }

    if (shouldWrite) {
      fs.writeFileSync(fullSvgPath, svgContent, 'utf8');
    }

    if (isPlaceholder) {
      placeholderIds.push(item.id);
    }

    // Build Manifest record
    const defaultTone = item.defaultTone || (is2Channel ? 'brand' : 'inherit');
    const allowedTones =
      item.allowedTones ||
      (is2Channel
        ? ['inherit', 'mono', 'brand', 'muted', 'disabled']
        : ['inherit', 'mono', 'muted', 'semantic', 'disabled']);
    const blueAccentAllowed =
      item.blueAccentAllowed !== undefined ? item.blueAccentAllowed : is2Channel;
    const semanticColorAllowed =
      item.semanticColorAllowed !== undefined ? item.semanticColorAllowed : !is2Channel;

    manifestIcons.push({
      id: item.id,
      name: item.name,
      shortName: item.shortName,
      family: item.family,
      collection: item.collection,
      source: relSourcePath,
      viewBox: '0 0 24 24',
      colorChannels: is2Channel ? 2 : 1,
      defaultTone,
      allowedTones,
      blueAccentAllowed,
      semanticColorAllowed,
      monochromeSafe: true,
      smallOptimized: false,
      sizes: [16, 20, 24, 32, 40, 48],
      accessibilityMode: item.accessibilityMode || 'contextual',
      brandLocked: item.brandLocked || false,
      semanticStatus: 'governed'
    });
  }

  // MANIFEST.json
  const manifest = {
    schemaVersion: '1.0',
    library: 'unfict-icons',
    iconographyVersion: '1.0',
    generatedAt: new Date().toISOString().split('T')[0],
    icons: manifestIcons
  };

  const manifestPath = path.join(ROOT_DIR, 'metadata/MANIFEST.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  // PLACEHOLDERS.json
  const placeholders = {
    schemaVersion: '1.0',
    placeholders: placeholderIds
  };

  const placeholdersPath = path.join(ROOT_DIR, 'metadata/PLACEHOLDERS.json');
  fs.writeFileSync(placeholdersPath, JSON.stringify(placeholders, null, 2) + '\n', 'utf8');

  // Automatically format emitted JSON with Prettier (fail loudly if formatter fails)
  execSync(`pnpm exec prettier --write "${manifestPath}" "${placeholdersPath}"`, {
    stdio: 'inherit'
  });

  console.log(
    `Generated ${inventory.length} canonical SVGs (${placeholderIds.length} placeholders, ${inventory.length - placeholderIds.length} approved).`
  );
}

generate();
