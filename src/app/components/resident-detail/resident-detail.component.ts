import { Component, OnInit, Input } from '@angular/core';
import { Resident } from 'src/app/interfaces/resident';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResidentService } from 'src/app/services/resident.service';

@Component({
  selector: 'app-resident-detail',
  templateUrl: './resident-detail.component.html',
  styleUrls: ['./resident-detail.component.scss']
})
export class ResidentDetailComponent implements OnInit {

  resident? : Resident;
  residentName? : string;
  residentAvatar? : string;

  constructor(
    private residentSvc : ResidentService,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getResident();
  }

  getResident() {
      const rID = Number(this.route.snapshot.paramMap.get('id'));
      this.residentSvc.getResident(rID).subscribe(resident => {
        this.resident = resident;
        this.residentName = resident.name;
        this.residentAvatar = resident.avatar;
      });
  }

  save(event : Resident) {
    if(event) {
      this.residentSvc.updateResident(event).subscribe(resident => 
        this.goBack()
      );
    }
  }

  goBack() {
    this.location.back();
  }

}
