import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ApplicationCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: "application"})
export class Application extends Model<Application, ApplicationCreationAttrs> {
  @ApiProperty({ example: 1 })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: "address", description: 'address'})
  @Column({type: DataType.STRING, allowNull: true})
  address: string;

  @ApiProperty({example: 4, description: 'floor'})
  @Column({type: DataType.INTEGER, allowNull: true})
  floor: number;

  @ApiProperty({example: 8, description: 'floor in home all'})
  @Column({type: DataType.INTEGER, allowNull: true})
  floor_home: number;

  @ApiProperty({example: 3, description: 'rooms'})
  @Column({type: DataType.INTEGER, allowNull: true})
  rooms: string;

  @ApiProperty({example: "area", description: 'area'})
  @Column({type: DataType.INTEGER, allowNull: true})
  area: string;

  @ApiProperty({example: true, description: 'balcony'})
  @Column({type: DataType.BOOLEAN})
  balcony: boolean;

  @ApiProperty({example: true, description: 'conditioner'})
  @Column({type: DataType.BOOLEAN})
  conditioner: boolean;

  @ApiProperty({example: true, description: 'fridge'})
  @Column({type: DataType.BOOLEAN})
  fridge: boolean;

  @ApiProperty({example: false, description: 'stove'})
  @Column({type: DataType.BOOLEAN})
  stove: boolean;

  @ApiProperty({example: true, description: 'microwave'})
  @Column({type: DataType.BOOLEAN})
  microwave: boolean;

  @ApiProperty({example: false, description: 'washing'})
  @Column({type: DataType.BOOLEAN})
  washing: boolean;

  @ApiProperty({example: true, description: 'wifi'})
  @Column({type: DataType.BOOLEAN})
  wifi: boolean;

  @ApiProperty({example: 35000, description: 'price'})
  @Column({type: DataType.INTEGER})
  price: number;

  @ApiProperty({example: 30000, description: 'pledge'})
  @Column({type: DataType.INTEGER})
  pledge: number;
}
