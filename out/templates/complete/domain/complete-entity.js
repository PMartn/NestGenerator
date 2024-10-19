"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_ENTITY_TEMPLATE = void 0;
exports.COMPLETE_ENTITY_TEMPLATE = `export interface $[Name]Props {
  id: number;
}

export class $[Name] {
  id: number;

  private constructor(props: $[Name]Props) {
    Object.assign(this, props);
  }

  static create(props: $[Name]Props): $[Name] {
    return new $[Name](props);
  }
}`;
//# sourceMappingURL=complete-entity.js.map