import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}
  contactId: string = '';
  contact: any = {};
  groupName: string = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.contactId = data.id;
      console.log(this.contactId);
    });

    this.api.viewContact(this.contactId).subscribe((data: any) => {
      console.log(data);
      this.contact = data;
      let groupId = this.contact.groupId;
      console.log(groupId);
      this.api.viewContactGroupName(groupId).subscribe((data: any) => {
        console.log(data);
        this.groupName = data.name;
      });
    });
  }
}
