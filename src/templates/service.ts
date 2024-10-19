export const SERVICE_TEMPLATE = 
`export interface $[Name]Service {
  method(param: string): string;
}

export const $[Name]Service = Symbol('$[Name]Service');`