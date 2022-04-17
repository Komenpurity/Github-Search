import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = environment.BASE_URL
  private token = environment.gitAccessToken
  

  constructor(private httpClient:HttpClient) {
   }

  getUsers(username: string): Observable<any[]> {
    //let param = new HttpParams();
    //param = param.append('access_token', this.token);
    const endpoint = 'users'
    return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/repos`, { 
      //params: param,
      // headers : this.headers,
      //withCredentials: true
    });
   }
  


}
