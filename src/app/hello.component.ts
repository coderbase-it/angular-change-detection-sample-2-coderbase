import {
  Component,
  Input,
  DoCheck,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div>
      Hello {{person.name}} with
      {{ person.age }} year old
    </div>
  `,
  styles: [`:host { font-family: Lato; } div {  border: 1px solid black; } `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  @Input() person: Person;
}
export interface Person {
  name: string;
  age: number;
}
