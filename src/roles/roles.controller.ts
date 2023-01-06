import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";


@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({summary: 'Создать role'})
  @ApiResponse({status: 200, type: Role})
  @Post()
  create(@Body() roleDto: CreateRoleDto){
    return this.roleService.createRole(roleDto)
  }


  @ApiOperation({summary: 'Получить role by id'})
  @ApiResponse({status: 200, type: Role})
  @Get('/:value')
  getRoleByValue(@Param('value') value: string){
    return this.roleService.getRoleByValue(value)
  }
}
