import { Component , Input} from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactlist: any;
  
  constructor(private cs: CommonService) {
    this.cs.getContacts().subscribe({
      next: (data: any) => this.contactlist = data,
      error: () => this.contactlist = []
    });
  }
}
