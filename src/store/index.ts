import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";


export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(username:string,service:string, password:string) {
        try {
            const response = await AuthService.login(password, service, username);
            console.log(response)
        } catch (e:any) {
            console.log(e);
        }
    }


//    async logout() {
//        try {
//            const response = await AuthService.logout();
//            localStorage.removeItem('token');
//            this.setAuth(false);
//            this.setUser({} as IUser);
//        } catch (e) {
//            console.log(e.response?.data?.message);
//        }
//    }

   async checkAuth() {
       this.setLoading(true);
       try {
           const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
           console.log(response);
           localStorage.setItem('token', response.data.access);
           this.setAuth(true);
        //    this.setUser(response.data.user);
       } catch (e:any) {
           console.log(e.response?.data?.message);
       } finally {
           this.setLoading(false);
       }
   }
}