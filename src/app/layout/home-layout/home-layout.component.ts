import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}
  flag: number = 0;
  name: string = '';
  marks:Array<any> = [];
  ngOnInit(): void {
    this.checkAcc()
  }
  checkAcc() {
    if (window.localStorage.length != 0) {
      this.flag = 1;
    }
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || "{}");
    this.name = loggedInUser.name;
    // this.marks = loggedInUser.marks;
    // console.log(this.marks);
  }
  logout(): void {
    this.authService.logout();
  }
}
