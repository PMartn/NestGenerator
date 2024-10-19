"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_REPOSITORY_TEMPLATE = void 0;
exports.COMPLETE_REPOSITORY_TEMPLATE = `import { $[Name] } from '@$[name]/domain/entities/$[name].entity';
import { Create$[Name]Dto } from '@$[name]/domain/dto/create-$[name].dto';
import { Update$[Name]Dto } from '@$[name]/domain/dto/update-$[name].dto';

export interface $[Name]Repository {
  create$[Name](create$[Name]Dto: Create$[Name]Dto): Promise<$[Name] | undefined>;
  update$[Name](update$[Name]Dto: Update$[Name]Dto): Promise<$[Name] | undefined>;
  findOneById(id: number): Promise<$[Name] | undefined>;
  findAll(): Promise<$[Name][] | undefined>;
  delete(id: number);
}

export const $[Name]Repository = Symbol('$[Name]Repository');`;
//# sourceMappingURL=complete-repository.js.map