export const COMPLETE_DELETE_USE_CASE_TEMPLATE =
`import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';

@Injectable()
export class Delete$[Name]UseCase {
  constructor(
    @Inject($[Name]Repository)
    private readonly $[name]Repository: $[Name]Repository,
  ) {}

  async run($[name]Id: number) {
    const $[name] = await this.$[name]Repository.findOneById($[name]Id);
    if (!$[name]) throw new NotFoundException('$[Name] not found');
    return this.$[name]Repository.delete($[name]Id);
  }
}`