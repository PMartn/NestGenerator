export const COMPLETE_GET_MANY_USE_CASE_TEMPLATE =
`import { Inject, Injectable } from '@nestjs/common';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';

@Injectable()
export class Get$[Name]sUseCase {
  constructor(
    @Inject($[Name]Repository)
    private readonly $[name]Repository: $[Name]Repository,
  ) {}

  async run() {
    const $[name]s = await this.$[name]Repository.findAll();
    return $[name]s;
  }
}`