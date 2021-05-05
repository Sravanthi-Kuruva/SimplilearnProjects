import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  signupError;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private communicationService: CommunicationService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.loading = true;
      this.communicationService.signup(this.registerForm.value.firstName,
        this.registerForm.value.lastName,
        this.registerForm.value.email,
        this.registerForm.value.password, "user").subscribe(
          (result)=>{
              console.log(result);
              this.loading = false;
              this.signupError = "";
          }, (error)=>{
              console.log(error);
              this.loading = false;
              this.signupError = "please provide correct details";
              this.router.navigate(['/loginc']);
          }
      );
  }
}
