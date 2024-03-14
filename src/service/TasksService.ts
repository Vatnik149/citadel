import $api from "../http";
import {AxiosResponse} from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { ITaskList } from "../models/ITaskList";

export default class TasksService{
    static async getAllTask(kind:string, theme:string, groups:string){
        return $api.get(`task/list?kind=${kind}&theme=${theme}&group=${groups}`)
    }
}