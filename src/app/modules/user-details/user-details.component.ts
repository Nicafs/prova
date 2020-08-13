import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '@services';
import { User } from '@models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  lat: number;

  lng: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));

      if (id && id > 0) {
        this.userService.getUsersById(id)
          .subscribe(user => {
            this.user = user;
            this.lat = Number(user.address.geo.lat);
            this.lng = Number(user.address.geo.lng);
          });
      }
    });
  }

}
