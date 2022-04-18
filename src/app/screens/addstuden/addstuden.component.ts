import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstuden',
  templateUrl: './addstuden.component.html',
  styleUrls: ['./addstuden.component.css'],
})
export class AddstudenComponent implements OnInit {
  subForm: FormGroup;
  constructor(private studentService: StudentService, private router: Router) {
    this.subForm = new FormGroup({
      username:  new FormControl('', [Validators.required,Validators.minLength(6)]),
      password:  new FormControl('', Validators.required),
      fullname:  new FormControl('', Validators.required),
      email:  new FormControl('', [Validators.required,Validators.email]),
      gender:  new FormControl('', Validators.required),
      birthday:  new FormControl('', Validators.required),
      schoolfee:  new FormControl(0),
    });
  }

  ngOnInit(): void {}
  onSubmit(obj: any) {
    this.studentService.addNew(obj).subscribe((data) => {
      this.router.navigate(['/admin/sinh-vien']);
    });
}
}
