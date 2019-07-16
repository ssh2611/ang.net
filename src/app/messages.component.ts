import {Component, OnInit}  from '@angular/core'
import {WebService} from './web.service'
import {ActivatedRoute} from '@angular/router'

@Component ({
    selector: 'messages',
    template: 
        `<div *ngFor="let message of webService.messages">
        <mat-card class=card>
            <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer">{{message.owner}}</mat-card-title>   
            <mat-card-content>
            {{message.text}}
            </mat-card-content>
        </mat-card>
        </div>
        `
}
)

export class MessagesComponent implements OnInit {

    // messages = [{text:'text one', owner:'Shrey1'}, {text: 'text two', owner:'Shrey2'}];
    // iterators = [{num:'1'},{num:'2'},{num:'3'},{num:'4'},{num:'5'},{num:'6'}]
    messages: any;
    iterators: any;

    constructor(private webService: WebService, private route: ActivatedRoute) {}
    
    ngOnInit(){
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        
        
    }

   
    }



    


