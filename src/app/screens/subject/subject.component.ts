import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../services/subject.service';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  listSubject: Array<any> = [];
  constructor(private subjectService: SubjectService) {}
  totalLength:any;
  page:number = 1;
  keyword: string = '';
  ngOnInit(): void {
    this.getSubject();
  }
  getSubject(searchKeyword: string = '') {
    this.subjectService.list(searchKeyword).subscribe((data) => {
      this.listSubject = data;
      this.totalLength = data.length;
    });
  }

  search() {
    this.getSubject(this.keyword);
  }
  confirm(id: any) {
    if(confirm('Bạn có muốn xóa!')){
      this.remove(id);
    }
  }
  remove(id: any) {
    this.subjectService.delete(id).subscribe((data) => {
      this.getSubject();
    });
  }
}
