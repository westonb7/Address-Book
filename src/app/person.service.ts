import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './person';
import { PEOPLE } from './mock-people';
import { MessageService } from './message.service';

@Injectable({  providedIn: 'root' })
export class PersonService {

  constructor(private messageService: MessageService) { }

  getPeople(): Observable<Person[]> {
    this.messageService.add('PersonService: fetched people');
    return of(PEOPLE);
  }

  getPerson(id: number): Observable<Person> {
	this.messageService.add(`PersonService: fetched person id=${id}`);
	return of(PEOPLE.find(person => person.id === id));
  }
}