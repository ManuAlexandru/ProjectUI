import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserModel } from 'src/app/shared/models/authUserModel';
import { UserService } from 'src/app/shared/services/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  constructor(public _service: UserService, private fb: FormBuilder) {}
  myForm: FormGroup;
authUser=new AuthUserModel;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  get getEmail() {
    return this.myForm.get('email');
  }
  get getPassword() {
    return this.myForm.get('password');
  }
  get getlastName() {
    return this.myForm.get('lastName');
  }
  get getfirstName() {
    return this.myForm.get('firstName');
  }
  onSubmit() {
    this.authUser = this.myForm.value;
    this._service.postUserRegister(this.authUser).subscribe({
      next: (res) => {
        if (res.statusCode == 200) alert(res.message);
        else alert(res.message);
      },
      error: (err) => {
        err.message;
      },
    });
  }
}
