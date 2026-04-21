import { Controller, Get, Param, Query, Post,Body, Put,} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile-dto';

@Controller('profiles')
export class ProfilesController { 
  // GET /profiles
  //   @Get()
  //   findAll() {
  //     return [];
  //   }

  // GET /profiles?Query=location
  @Get()
  findAll(@Query('location') location: string) {

    return [{ location }];
  }
  // GET /profile/:id
  @Get(':id')
  findOne(@Param('id') id: string){
    return { id };
  }

  // POST /profiles
  @Post()
  create(@Body()  createProfileDto: CreateProfileDto){
    return {
      name: createProfileDto.name,
      description: createProfileDto.description
    };
  }

 
  @Put(':id')
  update(
    @Param('id') id:string,
    @Body() updateProfileDto: UpdateProfileDto
  )
  {
    return {
      id, 
      ...updateProfileDto
    }
  }   
    
  


//   @Post()
// create(
//   @Body('name') name: string,
//   @Body('description') description: string,
// ) {
//   return {
//     name,
//     description,
//   };
// }
}
