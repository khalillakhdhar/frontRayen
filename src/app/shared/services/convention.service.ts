import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convention } from '../interfaces/convention';

@Injectable({
  providedIn: 'root'
})
export class ConventionService {

  private baseUrl = 'http://localhost:8080/conventions';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getAllConventions(): Observable<Convention[]> {
    return this.http.get<Convention[]>(this.baseUrl, { headers: this.getAuthHeaders() });
  }

  getConventionById(id: number): Observable<Convention> {
    return this.http.get<Convention>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  deleteConvention(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
