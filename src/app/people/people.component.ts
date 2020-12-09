import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
	people: Person[];

  constructor(private personService: PersonService) { }

   ngOnInit() {
    this.getPeople();
    this.sortPeople();
  }

  getPeople(): void {
    this.retrievePeople();
    this.sortPeople();
  }

  retrievePeople(): void {
    this.personService.getPeople().subscribe(people => this.people = people);
  }

  sortPeople() {
    this.people.sort(function(a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) //sort string ascending
        return -1;
      if (nameA > nameB)
        return 1;
      return 0; 
    });
  }
}
