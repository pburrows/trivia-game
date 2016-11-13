import {Component, OnInit} from "@angular/core";
import {DataService} from "../shared/data.service";

@Component({
    selector: "trivia-home",
    providers: [DataService],
    template: '<h1>Hello {{currentUser}}</h1>'
})
export class HomeComponent implements OnInit{
    currentUser: string;
    constructor(private dataService: DataService){
        this.dataService.getUserName()
            .then(snapshot=>{
                this.currentUser = snapshot.val().name
            });
    }
    ngOnInit(): void {

    }

}