// Core types & utilities
export * from './core/exercise-core.types';
export * from './core/exercise-core.adaptations';
export * from './core/exercise-core.validation';
export * from './core/exercise-core.selection';

// French subject
export * from './subjects/french/french.types';
export * from './subjects/french/french.bank';
export * from './subjects/french/french.validation';
export * from './subjects/french/french.selection';
export * from './subjects/french/french.mapping';

// Maths subject
export * from './subjects/maths/maths.types';
export * from './subjects/maths/maths.bank';
export * from './subjects/maths/maths.validation';
export * from './subjects/maths/maths.selection';
export * from './subjects/maths/maths.mapping';

// Legacy exercises/types.ts, validator, fallback, generator
export * from './types';
export * from './validator';
export * from './fallback';
export * from './generator';
