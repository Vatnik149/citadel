import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { ITaskList } from "../models/ITaskList";

export default class VMService{
    static async startVM(taskId:string|undefined){
        return $api.post(`task/${taskId}/start`)
    }
    static async stopVM(taskId:string|undefined){
        return $api.post(`task/${taskId}/stop`)
    }
}