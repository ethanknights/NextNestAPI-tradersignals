import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { SignalController } from './signal/signal.controller';
import { SignalService } from './signal/signal.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, GroupController, SignalController],
  providers: [AppService, UserService, GroupService, SignalService],
})
export class AppModule {}
