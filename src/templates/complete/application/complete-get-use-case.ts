export const COMPLETE_GET_USE_CASE_TEMPLATE =
`import { Inject, Injectable } from '@nestjs/common';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';

@Injectable()
export class Get$[Name]UseCase {
  constructor(
    @Inject($[Name]Repository)
    private readonly $[name]Repository: $[Name]Repository,
  ) {}

  async run($[name]Id: number) {
    const $[name] = await this.$[name]Repository.findOneById($[name]Id);
    return $[name];
  }
}`