import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 name: string = "";
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.checkAcc();
  }
  checkAcc() {
    // if (window.localStorage.length != 0) {
    //   this.flag = 1;
    // }
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || "{}");
    this.name = loggedInUser.name;

  }
  logout(): void{
    this.authService.logout();
  }
}
