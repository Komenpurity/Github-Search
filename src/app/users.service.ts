import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.BASE_URL

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<any[]> {
    //let param = new HttpParams();
    //param = param.append('username', 'SamTomashi');
    return this.httpClient.get<any[]>(`${this.baseUrl}/users/samtomashi/repos`, {
      //params: param,
      // headers : this.headers,
      //withCredentials: true
    });
   }
  


}
