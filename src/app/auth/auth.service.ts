import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type signupData = { name: string, email: string, password: string, confirmPassword: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signUp(signupData: signupData) {
    this.http.post<{status: Number, message: String}>(
      'http://localhost:3000/instructor/signup',
      signupData).subscribe(
        data => {
          console.log(data)
          if(data.status === 200) {
            console.log('sucess')
            this.router.navigate(['/instructor/login']);
          } else {
            console.log('problem found')
          }
        }
      )
  }
}
