import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  signUp() {
    this.authService.register(this.registerForm.value)
        .then(() => {
            this.toastr.success('Registred', 'Account registered Successfuly', {
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
