export const ENTITY_TEMPLATE = 
`export interface $[Name]Props {
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
}`

  