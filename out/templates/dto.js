"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTO_TEMPLATE = void 0;
exports.DTO_TEMPLATE = `import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';
  
export class $[Name]Dto {
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;
}`;
//# sourceMappingURL=dto.js.map