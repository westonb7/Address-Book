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
    this.deletePerson();
    this.sortPeople();
  }

  getPeople(): void {
    this.retrievePeople();
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
    for (var i = 0; i < this.people.length; i++) {
      this.people[i].id = i+1;
    };
  }

  deletePerson() {
    var id = this.personService.deleteId;
    this.personService.clearDeleteId();
    if (id != 0) {
      for (var i = this.people.length - 1; i >= 0; --i) {
        if (this.people[i].id == id) {
          this.people.splice(i,1);
        }
      }
    }
  }
}
