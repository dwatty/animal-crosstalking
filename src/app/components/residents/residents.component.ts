import { Component, OnInit } from '@angular/core';
import { Resident } from 'src/app/interfaces/resident';
import { ResidentService } from 'src/app/services/resident.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ResidentAddComponent } from '../resident-add/resident-add.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {

  residents: Resident[] = [];

  constructor(
    private residentSvc : ResidentService,
    private bottomSheet : MatBottomSheet
  ) { }

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

  // Button Handler for Deleting a Resident
  delete(resident : Resident) : void {
    this.residentSvc.deleteResident(resident.id).subscribe(result =>
      this.residents = this.residents.filter(r => r.id != resident.id)
    );

  }

  openSheet() : void {
    this.bottomSheet.open(ResidentAddComponent).afterDismissed().subscribe(resident => {
      if(resident) {
        this.residents.push(resident)  
      }
    })
  }

}
