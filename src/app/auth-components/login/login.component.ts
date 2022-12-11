import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { AuthUserModel } from 'src/app/shared/models/authUserModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { UserService } from 'src/app/shared/services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  userLogin=new AuthUserModel();
  hide: boolean = true;

  constructor(  public _service: UserService,
    public router: Router,
    private fb: FormBuilder,
    private pubsub: NgxPubSubService
  ) { }
 

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  
  get getEmail() {
    return this.myForm.get('email');
  }
  get getPassword() {
    return this.myForm.get('password');
  }
  onSubmit() {
    this.userLogin = this.myForm.value;
    this._service.postUserLogin(this.userLogin).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('');
       // this._service.invalidLogin = false;
        this.pubsub.publishEvent('login', true);
      },
      error: (err) => {
       // this._service.invalidLogin = true;
        //this.errorMessage = err.error.message;
      },
    });
  }
}
