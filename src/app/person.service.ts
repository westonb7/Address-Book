import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './person';
import { PEOPLE } from './mock-people';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  constructor(private messageService: MessageService) { }

  getPeople(): Observable<Person[]> {
    // TODO: send the message _after_ fetching the people
    this.messageService.add('PersonService: fetched contacts');
    return of(PEOPLE);
  }
}