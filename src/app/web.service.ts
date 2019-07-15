import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable()
export class WebService{
    constructor(private http: HttpClient){}
    getMessages(){
       return this.http.get('http://localhost:58631/api/Messages').toPromise();
    }
}