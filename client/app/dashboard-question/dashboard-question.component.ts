import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RadioButtonModule } from 'primeng/primeng';
import { AuthService } from '../services/auth.service';
import { PollservicesService } from '../services/pollservices.service';


@Component({
  selector: 'app-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss']
})
export class DashboardQuestionComponent implements OnInit {

  questionForm: FormGroup;

  email = new FormControl('', [Validators.required,
                                       Validators.minLength(3),
                                       Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required,
                                          Validators.minLength(6)]);

  groupname = new FormControl('',[Validators.required]);

  constructor(private formBuilder: FormBuilder,private auth: AuthService, private pollservices:PollservicesService) { }

   setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  ngOnInit() {
     this.questionForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      groupname:this.groupname
    });
  }

   postAnswer() {
    this.pollservices.postAnswer(this.questionForm.value).subscribe(
      res => console.log("details"+ this.questionForm.value),
    
    );
  }

}
