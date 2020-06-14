import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Contact } from '../constants/contact';

console.log('Process env', environment)
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContact(contact : Contact){

    return this.http.post(`${environment.baseUrl}contacts`, contact);

  }
}
