import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  listQuestion: Array<any> = [];
  constructor(
    private questionService: QuestionService,
    private router: ActivatedRoute,
    private authService: AuthServiceService,
    private userService: UserService,
    private link: Router
  ) {}
  keyword: string = '';
  code = '';

  user_select_answers: Array<any> = [];
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
      let randomArr = this.getDistinctNumberArr(10, data.length);
      this.listQuestion = randomArr.map((ind) => data[ind]);
    })
  }
//hàm random
  private getDistinctNumberArr(amount = 10, max = 80){
    let arr: Array<number> = [];
    while(arr.length < amount){
      const rand = Math.floor(Math.random() * max);
      if(!arr.includes(rand)){
        arr.push(rand);
      }
    }
    return arr;
  }

  selectAnswer(qId:number, aId: number){
    let indx = -1;
    this.user_select_answers.forEach((el, index)=>{
      if(el.qId == qId){
        indx = index;
        return;
      }
    });
    if(indx == -1){
      this.user_select_answers.push({
        qId, aId
      });
    }else{
      this.user_select_answers[indx].aId = aId;
    }
  }

  submitExcercise(){
    let correctAns = 0;
    this.user_select_answers.forEach((el) => {
      let q = this.listQuestion.find(item => item.id == el.qId);
      if(q.AnswerId == el.aId){
        correctAns++;
      }
    })
    const score = (correctAns*10/this.listQuestion.length).toFixed(2);
    console.log(score);

    let user = this.authService.loggedInUser.value;
    
    let indx = -1;
    user.marks.forEach((m:any, i: number) => {
      if(m.subject == this.code){
        indx = i;
        return;
      }
    })
    if(indx == -1){
      user.marks.push({
        subject: this.code,
        score: Number(score)
      });
    }else{
      user.marks[indx].score = score;
    }
    this.userService.update(user)
      .subscribe(u => {
        console.log(u);
      })
    // console.log(user);
    alert('Chúc mừng bạn hoàn thành bài thi với số điểm ' + score);
    this.link.navigate(['/mon-hoc']);
  }
}
