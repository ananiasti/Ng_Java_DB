import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTesteService {

  private apiUrl = 'http://localhost:8080/api/messages/send';
                
  constructor(private http: HttpClient) { }

  sendMessage(content: string) : Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<string>(this.apiUrl, {content},{headers});
  }
}
