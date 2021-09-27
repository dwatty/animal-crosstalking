import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private messageSvc : MessageService) { }

  ngOnInit(): void {
  }

  testMessage() : void {
    this.messageSvc.add('Test Message from Settings Page');
  }

  clearMessages() : void {
    this.messageSvc.clear();
  }
}
