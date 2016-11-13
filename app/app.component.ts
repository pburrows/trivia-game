import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    // providers: [HeroService],
    styleUrls: ['app/app.component.ts'],
    template: `
<h1>{{title}}</h1>
<nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
</nav>
<router-outlet></router-outlet>
`
})
export class AppComponent{
    title = "Online Trivia";
}