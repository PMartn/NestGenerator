"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_UPDATE_DTO_TEMPLATE = void 0;
exports.COMPLETE_UPDATE_DTO_TEMPLATE = `import { Create$[Name]Dto } from './create-$[name].dto';
import { PartialType } from '@nestjs/mapped-types';

export class Update$[Name]Dto extends PartialType(Create$[Name]Dto) {}`;
//# sourceMappingURL=complete-update-dto.js.map