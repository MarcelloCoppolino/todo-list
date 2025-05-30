import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/dataService';
import { User } from '../../model/user';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private _dataService = inject(DataService);
  user: User|null = null;
  
  ngOnInit(): void {
    this._dataService.selectedToDoObservable.subscribe(
      user => this.user = user
    );
  }

}
