export const TYPEORM_REPOSITORY_IMPL_TEMPLATE = 
`import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { $[Name] } from '@$[name]/domain/entities/user.entity';
import { $[Name]Model } from '@$[name]/infrastructure/models/user.model';
import { $[Name]Repository } from '@$[name]/domain/repositories/$[name].repository';

@Injectable()
export class $[Name]RepositoryImpl extends Repository<$[Name]Model> implements $[Name]Repository {
  constructor(private dataSource: DataSource) {
    super($[Name]Model, dataSource.createEntityManager());
  }

  async findById(id: number): Promise<$[Name] | undefined> {
    return this.findOne({ where: { id: id } });
  }

}`
