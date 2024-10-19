"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_CREATE_USE_CASE_TEMPLATE = void 0;
exports.COMPLETE_CREATE_USE_CASE_TEMPLATE = `import { Inject, Injectable } from '@nestjs/common';
import { Create$[Name]Dto } from '@$[name]/domain/dto/create-$[name].dto';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';

@Injectable()
export class Create$[Name]UseCase {
  constructor(
    @Inject($[Name]Repository)
    private readonly $[name]Repository: $[Name]Repository,
  ) {}

  async run(create$[Name]Dto: Create$[Name]Dto) {
    const $[name] = await this.$[name]Repository.create$[Name](create$[Name]Dto);
    return $[name];
  }
}`;
//# sourceMappingURL=complete-create-use-case.js.map