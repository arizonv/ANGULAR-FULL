import { ApiService } from '../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: ApiService,
    private router: Router, ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.check();
  }

  check(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard'])
    }
  }




  async onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      try {
        const response = await this.authService.login(username, password);
        const token = response['token'];
        localStorage.setItem('token', token);
        console.log(token)
        this.limpiarFormulario()
        this.router.navigate(['dashboard'], { replaceUrl: true });

      } catch (error) {
        console.log(error.status)
        this.router.navigate(['login'], { replaceUrl: true });
      }
    }
  }


  limpiarFormulario() {
    this.loginForm.controls['username'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }











}
function showError(arg0: string) {
  throw new Error('Function not implemented.');
}

