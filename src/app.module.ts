import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/mongoose/database.module';
import { UsersModule } from './schemas/Users/users.module';
import { JobsModule } from './schemas/Jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModelsModule } from './schemas/moongose-model.module';


@Module({
  imports: [DatabaseModule,UsersModule,JobsModule,ConfigModule.forRoot({isGlobal:true}),
    MongooseModelsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
