import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  isExpanded : boolean = false;

  constructor(public messageSvc : MessageService) { }

  ngOnInit(): void {
  }

  toggleVisibility() : void {
    if(this.messageSvc.messages.length === 0) {
      this.isExpanded = false;
      return;
    }
    
    this.isExpanded = !this.isExpanded;
  }

}
