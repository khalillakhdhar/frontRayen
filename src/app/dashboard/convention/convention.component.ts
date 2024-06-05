import { Component, OnInit } from '@angular/core';
import { Convention } from '../../shared/interfaces/convention';
import { User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/user.service';

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.css']
})
export class ConventionComponent implements OnInit {
  currentUser: User = {} as User;
  newConvention: Convention = {} as Convention;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user: User) => {
      this.currentUser = user;
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.authService.addConvention(this.newConvention).subscribe((convention) => {
        if (this.currentUser.conventions) {
          this.currentUser.conventions.push(convention); // Add the new convention to the current user's conventions
        }
        (window as any).$('#addConventionModal').modal('hide'); // Close the modal
      });
    }
  }
}
