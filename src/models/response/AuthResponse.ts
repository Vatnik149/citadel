import {IUser} from "../IUser";

export interface AuthResponse{
    access:string;
    refresh:string;
    user_id:string;
    username:string;
    msg:string
}