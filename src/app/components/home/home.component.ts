import { Component, inject } from '@angular/core';
import { DataService } from '../../services/dataService';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _dataService = inject(DataService);
  private _router = inject(Router);
  private formBuilder = inject(FormBuilder);
  logInForm: FormGroup;
  
  constructor(){
    this.logInForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  logIn(){
    this._dataService.selectedUser(this.logInForm.value);
    console.log(this.logInForm.value);
    alert(this.logInForm.value.userName + " log in effettuato Con Successo :)");
    this._router.navigate(["/todo-list"]);
  }

  logOut(){
   this._dataService.clearUsers();
   alert("Log Out Success")
  }

  get userName(){
    return this.logInForm.get("userName")
  }

    get password(){
    return this.logInForm.get("password")
  }

}
