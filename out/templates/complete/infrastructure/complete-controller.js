"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_CONTROLLER_TEMPLATE = void 0;
exports.COMPLETE_CONTROLLER_TEMPLATE = `import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { Create$[Name]Dto } from '@$[name]/domain/dto/create-$[name].dto';
import { Request } from 'express';
import {
  Delete$[Name]UseCase,
  Create$[Name]UseCase,
  Get$[Name]UseCase,
  Get$[Name]sUseCase,
  Update$[Name]UseCase,
} from '@$[name]/application/use-cases';
import { Update$[Name]Dto } from '@$[name]/domain/dto/update-$[name].dto';

@Controller('$[name]s')
export class $[Name]Controller {
  constructor(
    private create$[Name]UseCase: Create$[Name]UseCase,
    private udate$[Name]UseCase: Update$[Name]UseCase,
    private get$[Name]sUseCase: Get$[Name]sUseCase,
    private get$[Name]UseCase: Get$[Name]UseCase,
    private delete$[Name]UseCase: Delete$[Name]UseCase,
  ) {}

  @Post()
  async create(@Body() create$[Name]Dto: Create$[Name]Dto) {
    return this.create$[Name]UseCase.run(create$[Name]Dto);
  }

  @Patch('$[name]s/:$[name]Id')
  async update(
    @Param('reportId', ParseIntPipe) $[name]Id: number,
    @Req() req: Request,
    @Body() update$[Name]Dto: Update$[Name]Dto,
  ) {
    return this.udate$[Name]UseCase.run(update$[Name]Dto);
  }

  @Get()
  async get$[Name]s() {
    return this.get$[Name]sUseCase.run();
  }

  @Get('$[name]s/:$[name]Id')
  async get$[Name](@Param('$[name]Id', ParseIntPipe) $[name]Id: number) {
    return this.get$[Name]UseCase.run($[name]Id);
  }

  @Delete('$[name]s/:$[name]Id')
  async delete$[Name](@Param('$[name]Id', ParseIntPipe) $[name]Id: number) {
    return this.delete$[Name]UseCase.run($[name]Id);
  }
}`;
//# sourceMappingURL=complete-controller.js.map