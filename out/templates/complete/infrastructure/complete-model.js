"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_MODEL_TEMPLATE = void 0;
exports.COMPLETE_MODEL_TEMPLATE = `import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('$[name]s')
export class $[Name]Model {
  @PrimaryGeneratedColumn()
  id: number;
}`;
//# sourceMappingURL=complete-model.js.map