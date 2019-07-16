import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material'
import { Subject, Observable, observable, of} from 'rxjs'
@Injectable()
export class WebService{
    BASE_URL = 'http://localhost:58631/api';
    private messageStore: any;
    private messageSubject = new Subject();
    messages: Observable<any>= this.messageSubject.asObservable();
    constructor(private http: HttpClient){
        // this.getMessages()
    }
     getMessages(user){
        
            user = (user)? '/' + user : '';
            this.http.get(this.BASE_URL + '/Messages'+ user).subscribe(response => {
                this.messages=of(response);
                this.messageSubject.next(this.messages);
            }, error=> {
                console.error("unable to fetch message");
            });
        
        
       
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