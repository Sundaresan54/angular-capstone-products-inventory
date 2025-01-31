import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CoreService } from '../../services/core.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private router: Router, private coreService: CoreService, private dialog: MatDialog) { }

  ngOnInit() {
  	this.isLoggedIn = this.coreService.isLoggedIn();
  }

  goToProfile() {
  	this.router.navigate(['/profile']);
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }

  logout() {
    sessionStorage.removeItem('userId');
    if(window.location.pathname == '/') {
      window.location.reload();
    } else {
      this.router.navigate(['/']);
      setTimeout(()=> {
        window.location.reload();
      }, 500)
    }
  }
}
