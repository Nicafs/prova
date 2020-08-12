import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@services';
import { User } from '@models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onClick(id: number) {
    this.router.navigate([id]);
  }
}
