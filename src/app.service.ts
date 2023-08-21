import { Injectable } from '@nestjs/common';
import User from './entities/user.entity';
import Tweet from './entities/tweet.entity';
import { CreateSignUpDto } from './dtos/user-dto';
import { CreateTweetDto } from './dtos/tweet-dto';

@Injectable()
export class AppService {
  getHello(): string {
    return "I'm okay!";
  }

  private users: User[]
  private tweets: Tweet[]

  constructor() {
    this.users = []
    this.tweets = []
  }

  getTweetByName(username: string) {
    let arr = []
    for (let i = 0; i < this.tweets.length; i++) {
      if (this.tweets[i].getUsername() === username) {
        arr.push({
          username: this.tweets[i].getUsername(),
          avatar: this.tweets[i].getAvatar(),
          tweet: this.tweets[i].getTweet()
        })
      }
    }
    return arr
  }

  postSign(body: CreateSignUpDto) {
    const { username, avatar } = body
    return this.users.push(new User(username, avatar));
  }

  postTweets(body: CreateTweetDto) {
    const { username, tweet } = body
    let avatar = "false"
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].getUsername() === username) {
        avatar = this.users[i].getAvatar()
      }
    }

    if (avatar === "false")
      throw new Error("unauthorized")

    return this.tweets.push(new Tweet(new User(username, avatar), tweet));
  }
  getTweets(page: number) {
    if (page <= 0) {
      throw new Error("O número da página deve ser maior que zero");
    }
    let arr = []
    if (page) {
      const tweetsPerPage = 15;
      const startIndex = (page - 1) * tweetsPerPage;
      const endIndex = startIndex + tweetsPerPage;

      for (let i = startIndex; i < endIndex && i < this.tweets.length; i++) {
        arr.push({
          username: this.tweets[i].getUsername(),
          avatar: this.tweets[i].getAvatar(),
          tweet: this.tweets[i].getTweet()
        });
      }
    } else {
      for (let i = 0; i < 15; i++) {
        arr.push({
          username: this.tweets[i].getUsername(),
          avatar: this.tweets[i].getAvatar(),
          tweet: this.tweets[i].getTweet()
        });
      }
    }
    return arr;
  }
}
