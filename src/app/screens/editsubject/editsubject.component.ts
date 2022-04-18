import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editsubject',
  templateUrl: './editsubject.component.html',
  styleUrls: ['./editsubject.component.css'],
})
export class EditsubjectComponent implements OnInit {
  subForm: FormGroup;
  listSubject:any = {
    Code: '',
    Name: '',
    Logo: ''
  };
  id = '';
  constructor(private router: ActivatedRoute, private subjectService: SubjectService, private route: Router) {
    this.subForm = new FormGroup({
      Code: new FormControl('', Validators.required),
      Name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Logo: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.id = data['id'];
      this.getSubjectId(this.id);
    });
  }
  getSubjectId(id: any) {
    this.subjectService.listId(id).subscribe((data) => {
      this.listSubject = data;
      console.log(data);
    });
  }
  onSubmit(listSubject: any, id: any) {
    this.subjectService.update(listSubject, id).subscribe((data) => {
      this.route.navigate(['/admin/mon-hoc']);
    });
}
}
