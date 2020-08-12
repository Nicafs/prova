import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { User } from '@models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Busca todos os usuários
  getUsers(): Observable<User[]> {
    return this.http.get<any>(`${environment.api}/users`);
  }

  // Busca usuário pelo ID
  getUsersById(id: number): Observable<User> {
    return this.http.get<any>(`${environment.api}/users/${id}`);
  }
}
