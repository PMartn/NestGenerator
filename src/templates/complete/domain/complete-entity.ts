export const COMPLETE_ENTITY_TEMPLATE =
`export interface $[Name]Props {
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
}`