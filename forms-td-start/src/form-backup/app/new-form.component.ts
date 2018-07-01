import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./app.component.css']
})
export class NewFormComponent {
@ViewChild('f') submitForm: NgForm;
subscription = 'advanced';
isSubmitted = false;
user = {
    email : '',
    subscription : '',
    password : ''
}

  onSubmit () {
      this.isSubmitted = true;
      this.user.email = this.submitForm.value.email;
      this.user.subscription = this.submitForm.value.subscription;
      this.user.password = this.submitForm.value.password;
  }
}
