import { Component, OnInit } from '@angular/core';
import { Adresse, User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;

  constructor(private authService: AuthService) {
    this.user.adresse={} as Adresse;
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      user => {
        this.user = user;
        console.log("current",this.user)
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

  onSubmit(): void {
    this.authService.addUser(this.user).subscribe(
      user => {
        this.user = user;
        alert('Profile updated successfully');
      },
      error => {
        console.error('Error updating profile', error);
      }
    );
  }
}
