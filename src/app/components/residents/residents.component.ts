import { Component, OnInit } from '@angular/core';
import { Resident } from 'src/app/interfaces/resident';
import { ResidentService } from 'src/app/services/resident.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {

  residents: Resident[] = [];

  constructor(private residentSvc : ResidentService) { }

  ngOnInit(): void {
    this.getResidents();
  }

  getResidents() : void {
    this.residentSvc
        .getResidents()
        .subscribe(residents => 
          this.residents = residents
        );
  }

  // Button Handler for Adding a Resident
  add(name : string) : void {
    name = name.trim();
    if(!name) {
      return;
    }

    const tmp = { name: name } as Resident;

    this.residentSvc.createResident(tmp).subscribe(resident =>
      this.residents.push(resident)
    );

  }

  // Button Handler for Deleting a Resident
  delete(resident : Resident) : void {
    this.residentSvc.deleteResident(resident.id).subscribe(result =>
      this.residents = this.residents.filter(r => r.id != resident.id)
    );

  }

}
