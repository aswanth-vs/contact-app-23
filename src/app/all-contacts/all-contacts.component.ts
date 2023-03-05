import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css'],
})
export class AllContactsComponent implements OnInit {
  allContacts: any = [];
  searchKey: string = '';
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getAllContact();
  }
  getAllContact() {
    this.api.allContacts().subscribe((result) => {
      console.log(result);
      this.allContacts = result;
    });
  }

  //delete contact
  deleteContact(contactId: any) {
    this.api.deleteContact(contactId).subscribe((data: any) => {
      this.getAllContact();
    });
  }
}
