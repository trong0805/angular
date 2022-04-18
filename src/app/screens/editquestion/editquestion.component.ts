import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class EditquestionComponent implements OnInit {
  code = "";
  id = '';
  list:any = {
    text: '',
    Marks: '',
    Answers: [

    ]
  }
  constructor(private questionService: QuestionService, private router: Router,private link: ActivatedRoute) { }

  ngOnInit(): void {
    this.link.params.subscribe((data) => {
      this.code = data['code'];
      this.id = data['id'];
      console.log(this.code + '/' + this.id);
    });
    this.getQues(this.code, this.id);
  }
  getQues(code:any, id:any){
    this.questionService.listId(code, id).subscribe((data) => {
      this.list = data;
      console.log(this.list);
    })
  }
}
