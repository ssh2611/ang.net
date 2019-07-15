import { Component } from '@angular/core';
import { MessagesComponent} from './messages.component'

@Component({
  selector: 'app-root',
  template: '<h3>{{title}}</h3> <messages> </messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY FRONTEND APP';
}
