export const TYPEORM_MODEL_TEMPLATE = 
`import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('$[name]s')
export class $[Name]Model {
  @PrimaryColumn()
  id: number;

  @Column()
  description: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  lastUpdate: Date;
}`
