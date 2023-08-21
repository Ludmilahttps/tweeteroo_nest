import { Body, Controller, Get, HttpCode, HttpException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTweetDto } from './dtos/tweet-dto';
import { CreateSignUpDto } from './dtos/user-dto';
import httpStatus from 'http-status';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/tweets")
  getTweets(@Query() query:{page:string}) {
    try{
      return this.appService.getTweets(Number(query.page));
    }catch(err){
      throw new HttpException(err.message,400)
    }
  }

  @Get("/tweets/:username")
  getTweetByName(@Param("username") username:string) {
    return this.appService.getTweetByName(username);
  }

  @Post("/tweets")
  postTweets(@Body() body:CreateTweetDto) {
    try{
      return this.appService.postTweets(body);
    }catch(err){
      throw new HttpException(err.message,401)
    }
  }

  @Post("/sign-up")
  @HttpCode(200)
  postSign(@Body() body:CreateSignUpDto) {
    try{
      return this.appService.postSign(body);
    }catch(err){
    }
    return this.appService.postSign(body);
  }
}
