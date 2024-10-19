"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPEORM_MODEL_TEMPLATE = void 0;
exports.TYPEORM_MODEL_TEMPLATE = `import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserModel {
  @PrimaryColumn()
  id: number;

  @Column()
  description: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  lastUpdate: Date;
}`;
//# sourceMappingURL=model.js.map