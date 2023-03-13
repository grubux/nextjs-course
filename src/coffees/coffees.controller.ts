import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import {CoffeesService} from './coffees.service';
import {CreateCoffeeDto} from './dto/create-coffee.dto';
import {UpdateCoffeeDto} from './dto/update-coffee.dto';
import { SetMetadata } from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { Protocol } from '../common/decorators/protocol.decorator'; 
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    @Public()
    @Get()
    async findAll(@Protocol('https') protocol: string, @Query() paginationQuery) {
      // const {limit, offset} = paginationQuery;
      console.log(protocol);
      await new Promise(resolve => setTimeout(resolve, 5000));
      return this.coffeesService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.coffeesService.findOne('' + id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
      return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
