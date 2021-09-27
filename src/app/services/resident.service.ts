import { Injectable } from '@angular/core';
import { Resident } from '../interfaces/resident';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  private residentsUrl = "  http://localhost:3000/residents";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageSvc : MessageService,
    private http : HttpClient
  ) { }

  // Fetch all residents from the DB
  getResidents() : Observable<Resident[]> {
    return this.http
      .get<Resident[]>(this.residentsUrl)
      .pipe(
        tap(_ => this.log('Fetched Residents')),
        catchError(this.handleError<Resident[]>('getResidents', []))
      );
  }

  //
  // Fetch a single resident for the provided ID
  getResident(residentId : number) : Observable<Resident> {
    return this.http
      .get<Resident>(`${ this.residentsUrl }/${ residentId }`)
      .pipe(
        tap(_ => this.log('Fetched Resident')),
        catchError(this.handleError<Resident>('getResident'))
      );
  }

  //
  // Update the provided resident
  updateResident(resident : Resident) : Observable<Resident> {
    return this.http
      .put<Resident>(`${ this.residentsUrl }/${ resident.id }`, resident, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Updating ${ resident }`)),
        catchError(this.handleError<any>('updateResident'))
      );
  }

  //
  // Create a new resident
  createResident(resident : Resident) : Observable<Resident> {
    return this.http
      .post<Resident>(this.residentsUrl, resident, this.httpOptions)
      .pipe(
        tap((newResident: Resident) => this.log(`Added Resident with ID ${ newResident.id }`)),
        catchError(this.handleError<any>('createResident'))
      );
  }

  //
  // Delete a resident
  deleteResident(residentId : number) : Observable<Resident> {
    return this.http
      .delete<Resident>(`${ this.residentsUrl }/${ residentId }`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Deleted Resident ${residentId}`)),
        catchError(this.handleError<any>('deleteResident'))
      );
  }

  //
  // Search Residents
  searchResidents(term : string) : Observable<Resident[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http
      .get<Resident[]>(`${ this.residentsUrl }?name_like=${ term }`)
      .pipe(
        tap(x => x.length 
          ? this.log(`Found Residents Matching ${ term }`)
          : this.log(`No Residents Found Matching ${ term }`)
        ),
        catchError(this.handleError<Resident[]>('searchResidents', []))
      );
  }

  //
  // Log infomation to the message service
  private log(message: string) {
    this.messageSvc.add(`Resident Service :: ${message}`);
  }

  //
  // Log and handle errors
  private handleError<T>(operation = 'operation', result? : T) {
    return (error : any) : Observable<T> => {

      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);

    }
  }
}
