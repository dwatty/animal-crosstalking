import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Resident } from "src/app/interfaces/resident";
import { MessageService } from "src/app/services/message.service";
import { ResidentService } from "src/app/services/resident.service";

@Component({
  selector: "app-resident-add",
  templateUrl: "./resident-add.component.html",
  styleUrls: ["./resident-add.component.scss"],
})
export class ResidentAddComponent implements OnInit {

  constructor(
    private residentSvc : ResidentService,
    private messageSvc : MessageService,
    private bottomSheet : MatBottomSheet
  ) {}

  ngOnInit(): void {}

  // Button Handler for Adding a Resident
  add(event: Resident): void {
    if (event) {
      this.residentSvc.createResident(event).subscribe((resident) => {
        this.messageSvc.add("Resident Added!");
        return this.bottomSheet.dismiss(resident);
      });
    }
  }
}
