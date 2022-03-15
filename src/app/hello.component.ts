import {
  Component,
  Input,
  DoCheck,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div>
      Hello {{person.name}} with
      {{ oldPersonAge }} year old
    </div>
  `,
  styles: [`:host { font-family: Lato; } div {  border: 1px solid black; } `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements DoCheck {
  @Input() person: Person;
  oldPersonAge: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngDoCheck(): void {
    console.log(this.person);
    if (this.person.age !== this.oldPersonAge) {
      this.oldPersonAge = this.person.age;
      this.cd.markForCheck();
    }
  }
}
export interface Person {
  name: string;
  age: number;
}
