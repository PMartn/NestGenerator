export const COMPLETE_UPDATE_DTO_TEMPLATE =
`import { Create$[Name]Dto } from './create-$[name].dto';
import { PartialType } from '@nestjs/mapped-types';

export class Update$[Name]Dto extends PartialType(Create$[Name]Dto) {}`