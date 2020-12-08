import { Component, OnInit } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

	person: Person = {
	name: 'Jack Fenderson',
	address: '123 N 456 W',
	email: 'jfson@fake.temp',
	phone: '1234567890'
	}

  constructor() { }

  ngOnInit(): void {
  }

}
