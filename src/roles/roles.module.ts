import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./roles.model";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

@Module({
  providers: [],
  controllers: [],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ]
})
export class RolesModule {}
