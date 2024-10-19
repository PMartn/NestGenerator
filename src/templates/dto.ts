export const DTO_TEMPLATE = 
`import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';
  
export class $[Name]Dto {
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description: string;
}`

  