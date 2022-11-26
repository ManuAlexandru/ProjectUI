import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-model',
  template: ` <p>role-model works!</p> `,
  styles: [],
})
export class RoleModelComponent implements OnInit {
  static AdminPage: string[] = ['Admin'];
  static UserPage: string[] = ['User',"Admin"];
  constructor() { }

  ngOnInit(): void {
  }

}
