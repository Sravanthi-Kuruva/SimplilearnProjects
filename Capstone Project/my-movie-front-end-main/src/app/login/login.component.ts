import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginError: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private communicationService: CommunicationService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      if(localStorage.getItem("role")!=undefined){
        this.router.navigate(['/home']);
      }
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = true;
      this.communicationService.login(this.loginForm.value.username, 
        this.loginForm.value.password).subscribe(
          (result:any)=>{
              console.log(result);
              this.loading = false;
              this.loginError = "";
              localStorage.setItem("user_id", result.email);
              localStorage.setItem("role", result.role);
              this.router.navigate(['/home']);
              location.reload();
          }, (error)=>{
              console.log(error);
              this.loading = false;
              this.loginError = "email or password is incorrect";
          }
      );
      
  }
}
