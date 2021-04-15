import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateursUrl = 'http://localhost:8080/api/utilisateurs';  
  private userUrl = "http://localhost:8080/api/utilisateurs/email_paswword";
  
  constructor( private http: HttpClient) 
  {}
  getUtilisateurs (): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateursUrl);
  }

  addUtilisateurs (utilisateur: Utilisateur): Observable<Utilisateur> {
    console.log("je suis dans le service")
    return this.http.post<Utilisateur>(this.utilisateursUrl, utilisateur, httpOptions);
  }
  getUserPL(login: String, password: String): Observable<Utilisateur> {
    const cdl = new Utilisateur("","",login,password);
    return this.http.post<Utilisateur>(this.userUrl,cdl,httpOptions);
  }
}
