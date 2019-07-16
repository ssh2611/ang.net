import {Component, OnInit}  from '@angular/core'
@Component ({
    selector: 'nav',
    template: 
        `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/"> Message Board </button>
            <button mat-button routerLink="/messages"> Messages </button>

        </mat-toolbar>
        `
}
)

export class NavComponent {

    // messages = [{text:'text one', owner:'Shrey1'}, {text: 'text two', owner:'Shrey2'}];
    // iterators = [{num:'1'},{num:'2'},{num:'3'},{num:'4'},{num:'5'},{num:'6'}]
    messages: any;
    iterators: any;

    constructor() {}

   
    }


    


