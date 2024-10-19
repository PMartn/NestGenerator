"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPOSITORY_TEMPLATE = void 0;
exports.REPOSITORY_TEMPLATE = `import { $[Name] } from '@$[name]/domain/entities/$[name].entity';

export interface $[Name]Repository {
  findById(id: string): Promise<$[Name] | undefined>;
}

export const $[Name]Repository = Symbol('$[Name]Repository');`;
//# sourceMappingURL=repository.js.map