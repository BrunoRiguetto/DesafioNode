import { UserEntity } from './entities/user.entity';
import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Users')
@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @IsPublic()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/userAuthenticated')
  @ApiBearerAuth()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findOne(@CurrentUser() user: UserEntity) {
    return this.usersService.findOne(user.id);
  }

  @Patch()
  @ApiBearerAuth()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  update(@CurrentUser() user: UserEntity, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }

  @Delete()
  @ApiBearerAuth()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  remove(@CurrentUser() user: UserEntity) {
    return this.usersService.remove(user.id);
  }
}
