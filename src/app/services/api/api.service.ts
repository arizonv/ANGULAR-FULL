import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://127.0.0.1:8000/api/log/';
  private urlOut = 'http://127.0.0.1:8000/api/out/';


  constructor(private http: HttpClient) { }

  async login(username: string, password: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    try {
      const options = {
        headers: headers,
        withCredentials: true  // agregamos esta propiedad para permitir el envío de cookies
      };
      const response = await this.http.post<any>(this.url, { username, password }, options).toPromise();
      return response
    } catch (error) {
      console.error(error);
    }
  }

  logout(): Promise<any> {
    return this.http.get(this.urlOut).toPromise();
  }



}
