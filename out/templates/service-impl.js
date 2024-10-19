"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_IMPL_TEMPLATE = void 0;
exports.SERVICE_IMPL_TEMPLATE = `import { Injectable } from '@nestjs/common';
import { $[Name]Service } from '@$[name]/domain/services/$[name].service';

@Injectable()
export class $[Name]ServiceImpl implements $[Name]Service {
  method(param: string): string {
    return "Implement method";
  }
}`;
//# sourceMappingURL=service-impl.js.map