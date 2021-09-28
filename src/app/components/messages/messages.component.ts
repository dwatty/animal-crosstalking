import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "8rem",
        })
      ),
      state(
        "closed",
        style({
          height: "4rem",
        })
      ),
      transition("closed => open", [animate("0.2s cubic-bezier(0.4, 0.0, 0.2, 1)")]),
      transition("open => closed", [animate("0.15s cubic-bezier(0.4, 0.0, 0.2, 1)")]),
    ]),
  ],
})
export class MessagesComponent implements OnInit {
  isExpanded: boolean = false;

  constructor(public messageSvc: MessageService) {}

  ngOnInit(): void {}

  toggleVisibility(): void {
    if (this.messageSvc.messages.length === 0) {
      this.isExpanded = false;
      return;
    }

    this.isExpanded = !this.isExpanded;
  }
}
