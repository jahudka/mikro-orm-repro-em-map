import { MikroORM } from '@mikro-orm/core';
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const rootDir = `${__dirname}/..`;

export const createConnection = async (): Promise<MikroORM<PostgreSqlDriver>> =>
  MikroORM.init({
    entities: [`${rootDir}/build/entities/*`],
    entitiesTs: [`${rootDir}/src/entities/*`],
    metadataProvider: TsMorphMetadataProvider,
    cache: {
      enabled: false,
    },
    type: 'postgresql',
    clientUrl: 'postgresql://maptest:maptest@localhost:5432/maptest',
    subscribers: [],
    debug: ['query', 'query-params'],
  });
