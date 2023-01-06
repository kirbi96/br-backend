import { Module } from "@nestjs/common";
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';


@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService],
  imports: []
})

export class ApplicationModule {}
