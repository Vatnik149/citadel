import $api, { API_URL } from "../http";
import axios, {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService{
    static async login(username:string,service:string, password:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login', {password, service, username})
    }
    static async refreshToken(): Promise<AxiosResponse<AuthResponse>> {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/v1/token/refresh',
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('retoken')}`, 
            },
        };
        
        return axios.request(config);
    }
}