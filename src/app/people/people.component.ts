import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

	selectedPerson: Person;

	people: Person[];

  constructor(private personService: PersonService, private messageService: MessageService) { }

   ngOnInit() {
    this.getPeople();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.messageService.add(`PersonComponent: Selected contact name id=$(person.name`);
  }

  getPeople(): void {
    this.personService.getPeople()
        .subscribe(people => this.people = people);
  }
}
