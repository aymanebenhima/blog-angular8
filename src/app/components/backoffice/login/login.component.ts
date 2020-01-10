import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  singIn() 
  {

    this.authService.register(this.registerForm.value)
        .then(() => {
            this.toastr.success('Logged', 'Account Logged Successfuly', {
              timeOut: 5000,
              positionClass: 'toast-bottom-right',
              tapToDismiss: true
          });
      this.router.navigateByUrl('/blog')
    })
    .catch(() => {
      this.toastr.error('Error', 'Account not registered', {
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        tapToDismiss: true
    });
    });
  }

}
