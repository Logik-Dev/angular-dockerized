import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular & Jenkins';
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.findAll();
  }
}
