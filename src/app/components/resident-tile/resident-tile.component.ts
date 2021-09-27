import { Component, OnInit, Input } from '@angular/core';
import { Resident } from 'src/app/interfaces/resident';

@Component({
  selector: 'app-resident-tile',
  templateUrl: './resident-tile.component.html',
  styleUrls: ['./resident-tile.component.scss']
})
export class ResidentTileComponent implements OnInit {

  @Input() resident? : Resident;

  constructor() { }

  ngOnInit(): void {
  }

}
