import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "../model/todo";
import { User } from "../model/user";

@Injectable({
    providedIn: "root"
})

export class DataService {
    private _selectedToDoBehavior = new BehaviorSubject<User| null>(null);
    selectedToDoObservable = this._selectedToDoBehavior.asObservable();

    selectedUser(name: User) {
        this._selectedToDoBehavior.next(name);
    }

    clearUsers() {
        this._selectedToDoBehavior.next(null);
    }
}
