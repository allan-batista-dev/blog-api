import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) { }

  @Post()
  create(
    @Body() createThreadDto: CreateThreadDto,
    @CurrentUser() user: UserEntity
  ) {
    const currentUser = user.id
    return this.threadsService.create(createThreadDto, currentUser);
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.threadsService.findAll();
  }
  
  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.threadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string,
    @Body() updateThreadDto: UpdateThreadDto,
    @CurrentUser() user: UserEntity
  ) {
    const currentUser = user.id
    return this.threadsService.update(+id, updateThreadDto, currentUser);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @CurrentUser() user: UserEntity
  ) {
    const currentUser = user.id
    return this.threadsService.remove(+id, currentUser);
  }
}
