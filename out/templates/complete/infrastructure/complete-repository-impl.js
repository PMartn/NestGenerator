"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPLETE_REPOSITORY_IMPL_TEMPLATE = void 0;
exports.COMPLETE_REPOSITORY_IMPL_TEMPLATE = `import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { $[Name]Model } from '@$[name]/infrastructure/models/$[name].model';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';
import { Create$[Name]Dto } from '@$[name]/domain/dto/create-$[name].dto';
import { $[Name] } from '@$[name]/domain/entities/$[name].entity';
import { Update$[Name]Dto } from '@$[name]/domain/dto/update-$[name].dto';

@Injectable()
export class $[Name]RepositoryImpl extends Repository<$[Name]Model> implements $[Name]Repository {
  constructor(private dataSource: DataSource) {
    super($[Name]Model, dataSource.createEntityManager());
  }

  create$[Name](create$[Name]Dto: Create$[Name]Dto): Promise<$[Name] | undefined> {
    const $[name] = this.save(create$[Name]Dto);
    return $[name];
  }

  update$[Name](update$[Name]Dto: Update$[Name]Dto): Promise<$[Name] | undefined> {
    const $[name] = this.save(update$[Name]Dto);
    return $[name];
  }

  findOneById(id: number): Promise<$[Name] | undefined> {
    return this.findOne({ where: { id: id } });
  }

  findAll(): Promise<$[Name][] | undefined> {
    return this.find();
  }

  delete(id: number) {
    return this.delete(id);
  }
}`;
//# sourceMappingURL=complete-repository-impl.js.map