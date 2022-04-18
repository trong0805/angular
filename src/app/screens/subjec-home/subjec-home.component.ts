import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjec-home',
  templateUrl: './subjec-home.component.html',
  styleUrls: ['./subjec-home.component.css'],
})
export class SubjecHomeComponent implements OnInit {
  listSubject: Array<any> = [];
  marks:Array<any> = [];
  constructor(private subjectService: SubjectService) {}
  keyword: string = ''; 
  totalLength:any; // phân trang
  page:number = 1;// phân trang
  ngOnInit(): void {
    this.getSubject();
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || "[]");
    this.marks = loggedInUser.marks;
    console.log(this.marks);
  }
  getSubject(searchKeyword: string = '') {
    this.subjectService.list(searchKeyword).subscribe((data) => {
      this.listSubject = data;
      this.totalLength = data.length; // phân trang
    });
  }

  search() {
    this.getSubject(this.keyword);
  }
}
