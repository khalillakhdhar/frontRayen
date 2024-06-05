import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthRequest } from '../interfaces/auth-request';
import { Convention } from '../interfaces/convention';
import { Demande } from '../interfaces/demande';
import { Facture } from '../interfaces/facture';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  login(authRequest: AuthRequest): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, authRequest, { headers: this.headers, responseType: 'text' })
      .pipe(
        tap(token => localStorage.setItem('token', token))
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, user, { headers: this.headers });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getUsers`, { headers: this.getAuthHeaders() });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUsers/${id}`, { headers: this.getAuthHeaders() });
  }

  getUserByName(name: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUser/${name}`, { headers: this.getAuthHeaders() });
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/currentUser`, { headers: this.getAuthHeaders() });
  }

  addDemande(demande: Demande): Observable<Demande> {
    return this.http.post<Demande>(`${this.baseUrl}/addDemande`, demande, { headers: this.getAuthHeaders() });
  }

  addConvention(convention: Convention): Observable<Convention> {
    return this.http.post<Convention>(`${this.baseUrl}/addConvention`, convention, { headers: this.getAuthHeaders() });
  }

  addFacture(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(`${this.baseUrl}/addFacture`, facture, { headers: this.getAuthHeaders() });
  }
}
