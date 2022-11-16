import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private readonly http: HttpClient) { }

  getTask(): Observable<any>{

    return this.http.get<any>(environment.backEndApiUrl, {
      headers: new HttpHeaders(),
      responseType: 'json'
    })
  }
}
