"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_UPDATE_USE_CASE_TEMPLATE = void 0;
exports.COMPLETE_UPDATE_USE_CASE_TEMPLATE = `import { Inject, Injectable } from '@nestjs/common';
import { Update$[Name]Dto } from '@$[name]/domain/dto/update-$[name].dto';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';

@Injectable()
export class Update$[Name]UseCase {
  constructor(
    @Inject($[Name]Repository)
    private readonly $[name]Repository: $[Name]Repository,
  ) {}

  async run(update$[Name]Dto: Update$[Name]Dto) {
    const $[name] = await this.$[name]Repository.update$[Name](update$[Name]Dto);
    return $[name];
  }
}`;
//# sourceMappingURL=complete-update-use-case.js.map