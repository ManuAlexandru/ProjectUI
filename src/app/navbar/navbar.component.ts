import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogLogoutComponent } from '../dialogs/dialog-logout/dialog-logout.component';
import { AuthUser } from '../shared/services/authService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean=false;
  constructor(public authUser: AuthUser,
    public router: Router,
    //private pubsub: NgxPubSubService,
    public dialog: MatDialog,
    
    ) { }

  ngOnInit(): void {
    //this.isAuthenticated = this.authUser.isUserAuthenticated();
  }

  logout() {
    let dialogRef = this.dialog.open(DialogLogoutComponent);
  }
}
