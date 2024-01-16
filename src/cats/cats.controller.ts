
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TomDto } from './Dto/Create-cat.dto';
import { JerryDto } from './Dto/Create-jerry.dto';

@Controller('cats')
export class CatsController {
  @Post('tom')
  createTom(@Body() tomDto: TomDto): string {
    return `Tom: ${tomDto.action}`;
  }

  @Post('jerry')
  createJerry(@Body() jerryDto: JerryDto): string {
    return `Jerry: ${jerryDto.action}`;
  }

  @Get('tom')
  findTom(): string {
    return 'Tom: is sleeping';
  }

  @Get('jerry')
  findJerry(): string {
    return 'Jerry: is searching for cheese';
  }

  @Put('tom/:id')
  updateTom(@Param('id') id: string, @Body() tomDto: TomDto): string {
    return `Tom with ID ${id}: ${tomDto.action}`;
  }

  @Put('jerry/:id')
  updateJerry(@Param('id') id: string, @Body() jerryDto: JerryDto): string {
    return `Jerry with ID ${id}: ${jerryDto.action}`;
  }

  @Delete('tom/:id')
  deleteTom(@Param('id') id: string): string {
    return `Tom with ID ${id} has left`;
  }

  @Delete('jerry/:id')
  deleteJerry(@Param('id') id: string): string {
    return `Jerry with ID ${id} has escaped`;
  }
}
