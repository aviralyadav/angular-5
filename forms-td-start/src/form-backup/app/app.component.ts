import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  genders = ['male', 'female'];
  isSubmitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.form.patchValue({
    //   userData:{username: suggestedName}
    // })
  }

  // onSubmit (form: NgForm) {
  //   console.log(form);
  // }
  onSubmit () {
    console.log(this.signupForm);
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
