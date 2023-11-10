import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] | undefined;

  showDetails: Boolean = false;

  //more details fields
	moreDetailsPhone: String | undefined;
	moreDetailsDirection : String | undefined;
  moreDetailsZipCode : String | undefined;
  moreDetailsCity : String | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() : void {
    this.showUser();
  }

  showUser() {
    this.userService.getUsers().subscribe((data) => {
			this.users = data;
  });
  }

  updateShowDetails(index: number) {
		if (!this.showDetails) {
			this.showDetails = ! this.showDetails;	
		}
	
		if (this.users && this.users.length > index) {
			this.moreDetailsPhone = this.users[index].phone;
      this.moreDetailsDirection = this.users[index].direction;
      this.moreDetailsZipCode = this.users[index].zip_code;
      this.moreDetailsCity = this.users[index].city;
		  }
	}

	closeDetails() {
		this.showDetails = ! this.showDetails;
	}
}

