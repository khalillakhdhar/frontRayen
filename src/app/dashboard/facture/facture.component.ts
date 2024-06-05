import { Component, OnInit } from '@angular/core';
import { Facture } from '../../shared/interfaces/facture';
import { User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/user.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  facture: Facture = {} as Facture;
  factures: any;
  currentUser={} as User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (user: User) => {
        this.currentUser = user;
        if(user)
        this.factures = user.factures;
      },
      (error: any) => console.error('Failed to fetch current user', error)
    );
  }

  onSubmit(): void {
    this.authService.addFacture(this.facture).subscribe(
      (newFacture: Facture) => {
        this.factures.push(newFacture);
        this.facture = {} as Facture; // Reset form
        this.closeModal();
      },
      (error: any) => console.error('Failed to create facture', error)
    );
  }

  openModal(): void {
    const modal = document.getElementById('factureModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('factureModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
