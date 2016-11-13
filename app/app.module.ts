import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {FirebaseModule} from "ng2-firebase/core";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import {HomeComponent} from "./home/home.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        FirebaseModule.forRoot({ url: 'https://myfirebaseurl.firebase.io' })
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    // providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
