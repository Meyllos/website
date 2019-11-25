import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../constants/contact';
import { ApiUrlConfig } from '../constants/endpoint';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContact(contact : Contact){
    return this.http.post(`${ApiUrlConfig.baseUrl}contacts`, contact);

  }
}
