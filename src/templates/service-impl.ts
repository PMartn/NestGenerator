export const SERVICE_IMPL_TEMPLATE = 
`import { Injectable } from '@nestjs/common';
import { $[Name]Service } from '@$[name]/domain/services/$[name].service';

@Injectable()
export class $[Name]ServiceImpl implements $[Name]Service {
  method(param: string): string {
    return "Implement method";
  }
}`