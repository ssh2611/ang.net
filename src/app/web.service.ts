import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material'
@Injectable()
export class WebService{
    BASE_URL = 'http://localhost:58631/api';
    messages: any;
    constructor(private http: HttpClient){
        this.getMessages()
    }
    async getMessages(){
        try{
            var response= await this.http.get(this.BASE_URL + '/Messages').toPromise();
            this.messages=response;
        }
        catch(error){
            console.error("unable to fetch message");
        }
       
    }
    async postMessage(message){
        try{
        var response= await this.http.post(this.BASE_URL + '/Messages', message).toPromise();
        this.messages.push(response);
            }
        catch(error){
            console.log("unable to post");
        }
        }

    private handleError(error){
        console.error(error);
    }
}