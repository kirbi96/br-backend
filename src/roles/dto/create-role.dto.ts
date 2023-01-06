import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({example: 'admin', description: 'vaue'})
  readonly value: string;
  @ApiProperty({example: 'administrator', description: 'description'})
  readonly description: string;
}
