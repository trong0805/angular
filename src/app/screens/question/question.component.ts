import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  listQuestion: Array<any> = [];
  constructor(private questionService: QuestionService, private http: HttpClient,private  router: ActivatedRoute) {}
  keyword: string = '';
  code = "";
  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.code = data['code'];
      this.getQuestions();
    });

  }
  //lấy câu hỏi random
  getQuestions(){
    this.questionService.list(this.code)
    .subscribe(data => {
      this.listQuestion = data;
    })
  }
  confirm(code:any,id: any) {
    if(confirm('Bạn có muốn xóa!')){
      this.remove(code,id);
    }
  }
  remove(code:any,id: any) {
    this.questionService.delete(code,id).subscribe((data) => {
      this.getQuestions();
    });
  }
}
