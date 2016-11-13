import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
    constructor() {
    }

    getUserName(): Promise<firebase.database.DataSnapshot> {

        let userId = window.localStorage.getItem("user-id");
        if (!userId) {
            return null;
        }
        return firebase.database().ref("users").child(userId).once("value")
    }
}