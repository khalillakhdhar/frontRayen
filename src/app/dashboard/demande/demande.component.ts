import { Component, OnInit } from '@angular/core';
import { Demande } from '../../shared/interfaces/demande';
import { User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/user.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demande: Demande = {} as Demande;
  currentUser={} as User;
  demandes: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (user: User) => {
        this.currentUser = user;
        this.demandes = user.demandes;
      },
      (error: any) => console.error('Failed to fetch current user', error)
    );
  }

  onSubmit(): void {
    this.authService.addDemande(this.demande).subscribe(
      (newDemande: Demande) => {
        this.demandes.push(newDemande);
        this.demande = {} as Demande; // Reset form
      },
      (error: any) => console.error('Failed to create demande', error)
    );
  }
}
