import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  listStudents: Array<any> = [];
  constructor(private studentService: StudentService) {}
  keyword: string = '';
  totalLength:any;
  page:number = 1;
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(searchKeyword: string = '') {
    this.studentService.list(searchKeyword).subscribe((data) => {
      this.listStudents = data;
      this.totalLength = data.length;

    });
  }

  search() {
    this.getStudent(this.keyword);
  }
  confirm(id: any) {
    if(confirm('Bạn có muốn xóa!')){
      this.remove(id);
    }
  }
  remove(id: any) {
    this.studentService.delete(id).subscribe((data) => {
      this.getStudent();
    });
  }
}
