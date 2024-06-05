import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse, Role, User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user= {} as User;

  constructor(private authService: AuthService, private router: Router) {
    this.user.adresse={} as Adresse;
  }

  onSubmit() {
    this.authService.addUser(this.user).subscribe(
      () => {
        this.user.role = Role.Agent;
        this.router.navigate(['/auth/login']);
      },
      (      error: any) => {
        console.error('Error during signup', error);
      }
    );
  }
}
