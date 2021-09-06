import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-default',
  templateUrl: './form-default.component.html',
  styleUrls: ['./form-default.component.scss']
})
export class FormDefaultComponent {
  @Input() message: string = '';

  firstName: string = 'Denis';
  lastName: string = 'RUNGET';
  zipCode: string = '49124';
  town: string = 'Le Plessis-Grammoire';

  verify(valid: boolean | null): void {
    this.message = '';
    if (valid)
      this.message = "Form sended";
  }
}
