import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {WebService} from './web.service';
import { HttpClientModule } from '@angular/common/http';
import {NewMessageComponent} from './new-message.component'
import {FormsModule} from '@angular/forms'
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {NavComponent} from './nav.component'
import{ MatToolbarModule } from '@angular/material'
import {HomeComponent} from './home.component'

var routes= [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'messages/:name',
    component: MessagesComponent
  },
  {
    path:'messages',
    component: MessagesComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
