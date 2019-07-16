import {Component, OnInit}  from '@angular/core'
import {WebService} from './web.service'
@Component ({
    selector: 'messages',
    template: 
        `<div *ngFor="let message of webService.messages">
        <mat-card class=card>
            <mat-card-title>{{message.owner}}</mat-card-title>   
            <mat-card-content>
            {{message.text}}
            </mat-card-content>
        </mat-card>
        </div>
        `
}
)

export class MessagesComponent {

    // messages = [{text:'text one', owner:'Shrey1'}, {text: 'text two', owner:'Shrey2'}];
    // iterators = [{num:'1'},{num:'2'},{num:'3'},{num:'4'},{num:'5'},{num:'6'}]
    messages: any;
    iterators: any;

    constructor(private webService: WebService) {}

   
    }


    


