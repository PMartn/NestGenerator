"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENTITY_TEMPLATE = void 0;
exports.ENTITY_TEMPLATE = `export interface $[Name]Props {
  id: string;
  description: string;
}

export class $[Name] {
  id: string;
  description: string;

  private constructor(props: $[Name]Props) {
    Object.assign(this, props);
  }

  static create(props: $[Name]Props): $[Name] {
    return new $[Name](props);
  }
}`;
//# sourceMappingURL=entity.js.map