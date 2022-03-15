import { Component } from '@angular/core';
import { Person } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public count: number = 1;
  public person: Person = {
    name: 'John Doe',
    age: 20,
  };
}
