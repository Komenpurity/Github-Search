import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<any[]> {
    //let param = new HttpParams();
    //param = param.append('username', 'SamTomashi');
    return this.httpClient.get<any[]>(`https://api.github.com/users/samtomashi/repos`, {
      //params: param,
      // headers : this.headers,
      withCredentials: true
    });
   }
  


}
