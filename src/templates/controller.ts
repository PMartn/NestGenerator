export const CONTROLLER_TEMPLATE = 
`import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('$[Name]')
@Controller('$[name]')
export class $[Name]Controller {
  constructor() {}

  @Get()
  @ApiOperation({
    summary: 'Get $[name]',
    description: 'Get $[name].',
  })
  get$[Name]() {}
}`