export const COMPLETE_MODULE_TEMPLATE = 
`import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { $[Name]Model } from "@$[name]/infrastructure/models/$[name].model";
import { $[Name]RepositoryImpl } from "@$[name]/infrastructure/repositories/$[name].repository.impl";
import { $[Name]Repository } from "@$[name]/domain/repositories/$[name].repository";
import { $[Name]Controller } from "@$[name]/infrastructure/controllers/$[name].controller";
import {
  Create$[Name]UseCase,
  Update$[Name]UseCase,
  Delete$[Name]UseCase,
  Get$[Name]sUseCase,
  Get$[Name]UseCase,
} from "@$[name]/application/use-cases";

@Module({
  controllers: [$[Name]Controller],
  imports: [TypeOrmModule.forFeature([$[Name]Model])],
  providers: [
    Create$[Name]UseCase,
    Update$[Name]UseCase,
    Get$[Name]sUseCase,
    Get$[Name]UseCase,
    Delete$[Name]UseCase,
    {
      provide: $[Name]Repository,
      useClass: $[Name]RepositoryImpl,
    },
  ],
  exports: [$[Name]Repository],
})
export class $[Name]Module {}`