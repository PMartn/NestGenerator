"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_TEMPLATE = void 0;
exports.SERVICE_TEMPLATE = `export interface $[Name]Service {
  method(param: string): string;
}

export const $[Name]Service = Symbol('$[Name]Service');`;
//# sourceMappingURL=service.js.map