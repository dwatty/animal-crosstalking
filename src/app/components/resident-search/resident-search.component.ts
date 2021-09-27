import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Resident } from '../../interfaces/resident';
import { ResidentService } from 'src/app/services/resident.service';

@Component({
  selector: 'app-resident-search',
  templateUrl: './resident-search.component.html',
  styleUrls: ['./resident-search.component.scss']
})
export class ResidentSearchComponent implements OnInit {

  residents$!: Observable<Resident[]>;
  private searchTerms = new Subject<string>();

  constructor(private residentSvc: ResidentService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.residents$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.residentSvc.searchResidents(term)),
    );

  }

}
