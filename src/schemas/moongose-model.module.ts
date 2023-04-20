import { Global, Module } from "@nestjs/common";
import { USER_MODEL, UserSchema } from "./Users";
import { JOB_MODEL, JobSchema } from "./Jobs";
import { MongooseModule } from "@nestjs/mongoose";
const Models=[{name:USER_MODEL,schema:UserSchema},
{name:JOB_MODEL,schema:JobSchema}]
@Global()
@Module({
    imports: [MongooseModule.forFeature(Models)],
    controllers: [],
    providers: [],
    exports:[MongooseModule]
  })
  export class MongooseModelsModule {}