import { Injectable} from '@angular/core';
import { HttpService } from 'src/services/common/http.service';

@Injectable({
    providedIn: 'root'
})
export class SystemService {
    public tempData:object;

    constructor(private httpService: HttpService){
    }

    login(params){
        this.tempData = {
            'conditionJson' : JSON.stringify(params)
        };
        return this.httpService.post(`/api/users/login`,this.tempData);
    }

    register(params){
        this.tempData = {
            'conditionJson' : JSON.stringify(params)
        };
        return this.httpService.post(`/api/users/register`,this.tempData);
    }
}