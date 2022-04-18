import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css'],
})
export class EditstudentComponent implements OnInit {
  subForm: FormGroup;
  listStudent: any = {
    fullname: '',
    password: '',
    username: '',
    email: '',
    gender: '',
    birthday: '',
    schoolfee: '',
  };
  id = '';
  constructor(
    private router: ActivatedRoute,
    private studentService: StudentService,
    private route: Router
  ) {
    this.subForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      schoolfee: new FormControl(0),
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.id = data['id'];
      this.getStudentId(this.id);
    });
  }
  getStudentId(id: any) {
    this.studentService.listStudentId(id).subscribe((data) => {
      this.listStudent = data;
      console.log(data);
    });
  }
  onSubmit(obj: any, id: any) {
    this.studentService.update(obj, id).subscribe((data) => {
      this.route.navigate(['/admin/sinh-vien']);
    });
  }
}
