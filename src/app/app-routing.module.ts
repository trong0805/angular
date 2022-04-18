import { SubjecHomeComponent } from './screens/subjec-home/subjec-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SubjectItemComponent } from './components/subject-item/subject-item.component';
import { LoginComponent } from './screens/login/login.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AdminComponent } from './layout/admin/admin.component';
import { StudentComponent } from './screens/student/student.component';
import { SubjectComponent } from './screens/subject/subject.component';
import { FinalComponent } from './screens/final/final.component';
import { AddstudenComponent } from './screens/addstuden/addstuden.component';
import { EditstudentComponent } from './screens/editstudent/editstudent.component';
import { AddsubjectComponent } from './screens/addsubject/addsubject.component';
import { EditsubjectComponent } from './screens/editsubject/editsubject.component';
import { QuestionComponent } from './screens/question/question.component';
import { AddquestionComponent } from './screens/addquestion/addquestion.component';
import { EditquestionComponent } from './screens/editquestion/editquestion.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { AuthGuard } from './helpers/auth-guard.guard';

const routes: Routes = [
  //login
  {
    path: 'login',
    component: LoginComponent,
    children: [],
  },
  //layout usser
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [],
      },
      {
        path: 'mon-hoc',
        component: SubjecHomeComponent,
        children: [],
      },
      {
        path: 'quiz/:code',
        component: QuizComponent,
        children: [],
        canActivate: [AuthGuard]
      },
      {
        path: 'quiz/:id/ket-qua',
        component: FinalComponent,
        children: [],
      },
    ],
  },
  //layout admin
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [],
      },
      {
        path: 'sinh-vien',
        component: StudentComponent,
        children: [],
      },
      {
        path: 'sinh-vien/add',
        component: AddstudenComponent,
        children: [],
      },
      {
        path: 'sinh-vien/edit/:id',
        component: EditstudentComponent,
        children: [],
      },
      {
        path: 'mon-hoc',
        component: SubjectComponent,
        children: [],
      },
      {
        path: 'mon-hoc/add',
        component: AddsubjectComponent,
        children: [],
      },
      {
        path: 'mon-hoc/edit/:id',
        component: EditsubjectComponent,
        children: [],
      },
      {
        path: 'cau-hoi/:code',
        component: QuestionComponent,
        children: [],
      },
      {
        path: 'cau-hoi/:code/add',
        component: AddquestionComponent,
        children: [],
      },
      {
        path: 'cau-hoi/:code/edit/:id',
        component: EditquestionComponent,
        children: [],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
