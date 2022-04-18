import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
})
export class AddquestionComponent implements OnInit {
  listQuestions: any[] = [];
  newAnswer: Array<any> = []
  questionData: any = 
    {
      "Text": "",
      "Marks": 1,
      "AnswerId": "true",
      "Answers":
        [
          {
            "id": "",
            "Text": ""
          },
          {
            "id": "",
            "Text": ""
          },
          {
            "id": "",
            "Text": ""
          },
          {
            "id": "",
            "Text": ""
          }
        ]
    }
  
  code: string = "";
  addForm: FormGroup = new FormGroup({
    Text: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient, private router: Router, private rou: ActivatedRoute) { }
  ngOnInit(): void {
    this.rou.params.subscribe(par => {
      this.code = String(par['code']);
    });
  }

  addQuestion() {
    this.http.post<any>("http://localhost:3000/" + this.code, { ...this.questionData })
      .subscribe(newQuestion => {
        this.listQuestions.push(newQuestion);
        console.log(this.questionData);
      });
    setTimeout(() => {
      this.router.navigate(['admin/cau-hoi/' + this.code]);
    }, 1000);
  }

  public addAnswer(): void {
    this.newAnswer.push({ value: "" })
  }
  public removeAnswer(i: any): void {
    this.newAnswer.splice(i, 1)
  }
}