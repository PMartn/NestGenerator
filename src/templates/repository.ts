export const REPOSITORY_TEMPLATE = 
`import { $[Name] } from '@$[name]/domain/entities/$[name].entity';

export interface $[Name]Repository {
  findById(id: string): Promise<$[Name] | undefined>;
}

export const $[Name]Repository = Symbol('$[Name]Repository');`