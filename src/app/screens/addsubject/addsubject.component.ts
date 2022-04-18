import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css'],
})
export class AddsubjectComponent implements OnInit {
  subForm: FormGroup;
  constructor(private subjectService: SubjectService, private router: Router) {
    this.subForm = new FormGroup({
      Code: new FormControl('', Validators.required),
      Name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Logo: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onSubmit(obj: any) {
      this.subjectService.addNew(obj).subscribe((data) => {
        this.router.navigate(['/admin/mon-hoc']);
      });
  }
}
