export default class User{
    private username:string;
    private avatar:string;

    constructor(username:string, avatar:string){
        this.username=username;
        this.avatar=avatar;
    }
    public getAvatar(){
        return this.avatar
    }

    public getUsername(){
        return this.username
    }
}