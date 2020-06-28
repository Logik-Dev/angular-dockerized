import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './models/User';
import {environment} from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.API_URL + '/users';
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
