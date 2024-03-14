import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import $api, {API_URL} from "../http";


export default class Store {
    kindSearch ="";
    themeSearch ="";
    groupsSearch ="";
    username = "";
    userId = "";
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.setKindSearch = this.setKindSearch.bind(this);
        this.setThemeSearch = this.setThemeSearch.bind(this);
        this.setGroupsSearch = this.setGroupsSearch.bind(this);
    }

    setKindSearch(kindSearch: string) {
        this.kindSearch = kindSearch;
    }
    setThemeSearch(themeSearch: string) {
        this.themeSearch = themeSearch;
    }
    setGroupsSearch(group: string) {
        this.groupsSearch = group;
    }
    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setUsername(username: string) {
        this.username = username;
    }
    setUserId(userId: string) {
        this.userId = userId;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    async login(username:string,service:string, password:string) {
        try {
            const response = await AuthService.login(password, service, username);
            localStorage.setItem('retoken', response.data.refresh);
            localStorage.setItem('token', response.data.access);
            this.setAuth(true);
            this.setUsername(response.data.username);
            console.log(response)
        } catch (e:any) {
            console.log(e);
        }
    }
    async refreshToken(){
        try{
            const response = await AuthService.refreshToken();
            localStorage.setItem('token', response.data.access);
            this.setAuth(true);
            
        }
        catch{}
        finally{}
    }

    
    async logout() {
        try {
            localStorage.removeItem('retoken'); // Corrected method name
            localStorage.removeItem('token');   // Corrected method name
            this.setAuth(false); // Call the setAuth method to update authentication status
        } catch (error) {
            console.error('Error during logout:', error);
            // Handle errors, such as displaying an error message or redirecting the user
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
    //    this.setLoading(true);
       try {
           const response = await $api.post<AuthResponse>(`${API_URL}token/refresh`)
           console.log(response);
           localStorage.setItem('token', response.data.access);
           this.setAuth(true);
        //    this.setUser(response.data.user);
       } catch (e:any) {
           console.log(e.response?.data?.message);
       } finally {
           this.setLoading(false);
       }
    if (localStorage.getItem('token')) {
        this.setAuth(true);
    } else {
        this.setAuth(false);
    }
   }
}