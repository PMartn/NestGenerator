export const COMPLETE_MODEL_TEMPLATE = 
`import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('$[name]s')
export class $[Name]Model {
  @PrimaryGeneratedColumn()
  id: number;
}`