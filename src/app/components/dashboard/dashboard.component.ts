import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { listAnimation } from "src/app/animations";
import { Resident } from "src/app/interfaces/resident";
import { ResidentService } from "src/app/services/resident.service";



@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [listAnimation],
})
export class DashboardComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentSrc: ResidentService) {}

  ngOnInit(): void {
    this.getResidents();
  }

  getResidents() {
    this.residentSrc
      .getResidents()
      .subscribe((result) => (this.residents = result.slice(1, 4)));
  }
}
