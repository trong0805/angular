import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listSub: Array<any> = [];

  constructor(private subjectService: SubjectService) { }
  keyword: string = "";
  ngOnInit(): void {
    this.getSub();
  }
  getSub(){
    this.subjectService.list()
      .subscribe(data => {
        var arr = data;
        for (let i = 1; i <= 3; i++) {
          var randArr = arr[Math.floor(Math.random() * arr.length)];
          console.log(randArr);
          this.listSub.push(randArr);
        }
      })
  }

}
