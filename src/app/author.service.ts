import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  baseUrl = environment.apiUrl + 'authors';
  baseUrl_ = this.baseUrl.replace(/[?&]$/, '');
  constructor(private http: HttpClient) {}
  getAuthorsList(limit:number,skip:number): Observable<any> {
    return this.http.get(this.baseUrl_+"?limit="+limit+"&skip="+skip);
  }
}
