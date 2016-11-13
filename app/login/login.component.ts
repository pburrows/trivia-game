import {Component, OnInit} from "@angular/core";
import {DataService} from "../shared/data.service";
import {Router} from "@angular/router";

@Component({
    selector: "login-component",
    providers: [DataService],
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent implements OnInit{
    userName: string;
    constructor(private router: Router){

    }
    ngOnInit(): void {
        let userId = window.localStorage.getItem("user-id");
        if(userId){
            this.router.navigate(['/home']);
        }
    }

    login(): void{
        firebase.database().ref("/users").push({name: this.userName})
            .then(response =>{
                let key = response.key;
                window.localStorage.setItem("user-id", key);
                console.log(key);
                this.router.navigate(['/home']);
            });
    }
}