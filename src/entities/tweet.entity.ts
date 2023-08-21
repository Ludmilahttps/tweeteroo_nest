import User from "./user.entity";

export default class Tweet{
    private user:User;
    private tweet:string;

    constructor(user:User, tweet:string){
        this.user=user;
        this.tweet=tweet;
    }

    public getUsername(){
        return this.user.getUsername()
    }

    public getAvatar(){
        return this.user.getAvatar()
    }

    public getTweet(){
        return this.tweet
    }
}