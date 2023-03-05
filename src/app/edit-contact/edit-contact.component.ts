import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  constructor(
    private editContactActivatedRoute: ActivatedRoute,
    private api: ApiService,
    private editContactRouter: Router
  ) {}
  // imgURL: string = '';
  // updateImage(imgLink: any) {
  //   this.imgURL = imgLink.value;
  // }

  contactId: string = '';
  contact: MyContact = {};
  allGroups: any = [];
  ngOnInit(): void {
    this.editContactActivatedRoute.params.subscribe((data: any) => {
      this.contactId = data.id;
      console.log(this.contactId);
    });

    //to get details of particular contact
    this.api.viewContact(this.contactId).subscribe((data: any) => {
      this.contact = data;
      console.log(this.contact);
    });
    //get all groups from api
    this.api.allGroups().subscribe((data: any) => {
      console.log(data);

      this.allGroups = data;
    });
  }

  //edit contact
  editContact(contact: MyContact) {
    this.api.updateContact(this.contactId, this.contact).subscribe((result) => {
      alert('Contact updated successfully...');
      //redirects to All Contacts
      this.editContactRouter.navigateByUrl('');
    });
  }
}
