import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  allContacts() {
    return this.http.get('http://localhost:3000/contacts');
  }
  viewContact(contactId: any) {
    return this.http.get('http://localhost:3000/contacts/' + contactId);
  }

  viewContactGroupName(groupId: string) {
    return this.http.get('http://localhost:3000/groups/' + groupId);
  }

  //API call to get all groups
  allGroups() {
    return this.http.get('http://localhost:3000/groups');
  }

  //API call to add contact
  addContact(contact: any) {
    return this.http.post('http://localhost:3000/contacts', contact);
  }

  //delete contact
  deleteContact(contactId: any) {
    return this.http.delete('http://localhost:3000/contacts/' + contactId);
  }

  //Update contact
  updateContact(contactId: string, contactBody: any) {
    return this.http.put(
      'http://localhost:3000/contacts/' + contactId,
      contactBody
    );
  }
}
