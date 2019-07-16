import {Component}  from '@angular/core'
import {WebService} from './web.service'
@Component ({
    selector: 'new-message',
    template: 
        ` <mat-card class=card>
            <mat-card-content>
            <div>
                <mat-form-field>
                    <input [(ngModel)]="message.owner" matInput placeholder="Name">
                </mat-form-field>
                <mat-form-field>
                    <textarea [(ngModel)]="message.text" matInput placeholder="Message"> </textarea>
                </mat-form-field><br>
                <mat-card-actions>
                <button (click)="post()" mat-button >POST!</button>
                </mat-card-actions>
            </div>
            </mat-card-content>
          </mat-card>
        `
}
)

export class NewMessageComponent{

    // messages; = [{text:'text one', owner:'Shrey1'}, {text: 'text two', owner:'Shrey2'}];
    // iterators = [{num:'1'},{num:'2'},{num:'3'},{num:'4'},{num:'5'},{num:'6'}]
    // messages: any;
    // iterators: any;

    constructor(private webService: WebService) {}
    message={
        owner: "",
        text:""
    }
    owner="test";
    post(){
        console.log(this.message)
        this.webService.postMessage(this.message);
    }
    }


    


