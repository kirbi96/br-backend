import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: "users"})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: 1})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: "test@mail.ru", description: 'Почта'})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  email: string;

  @ApiProperty({example: '123456', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: true})
  password: string;

  @ApiProperty({example: false})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}
