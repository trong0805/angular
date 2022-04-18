import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SubjecHomeComponent } from './screens/subjec-home/subjec-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { ShowErrorComponent } from './layout/show-error/show-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    SubjectItemComponent,
    LoginComponent,
    HomeComponent,
    HomeLayoutComponent,
    AdminComponent,
    StudentComponent,
    SubjectComponent,
    FinalComponent,
    AddstudenComponent,
    EditstudentComponent,
    AddsubjectComponent,
    EditsubjectComponent,
    QuestionComponent,
    AddquestionComponent,
    EditquestionComponent,
    DashboardComponent,
    QuizComponent,
    SubjecHomeComponent,
    ShowErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // 'clientId'
              environment.GOOGLE_CLIENT_ID
            )
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
