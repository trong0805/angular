import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../services/subject.service';
import { StudentService } from './../../services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  countStu = 0;
  countSub = 0;
  countQues = 0;
  arrCode: Array<any> = [];
  constructor(
    private studentService: StudentService,
    private subjectService: SubjectService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.studentService.list().subscribe((data) => {
      // console.log(data.length);
      this.countStu = data.length;
    });
    this.subjectService.list().subscribe((data) => {
      // console.log(data.length);
      this.countSub = data.length;
      for (let index = 0; index < data.length; index++) {
        this.http
          .get<any>(`http://localhost:3000/` + data[index].Code)
          .subscribe((data) => {
            // console.log(data);
            // for (let index = 0; index < data.length; index++) {
              // console.log(this.arrCode.push(data[index].id));
              // this.arrCode.push(data[index].id)
              // // this.countQues += data[index].length;
              // this.countQues = this.arrCode.push(data[index].Id);
            // }
          });
        // console.log(data[index].Code);
      }
    });
  }
}
