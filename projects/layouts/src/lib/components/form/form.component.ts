import { Component, ContentChildren, QueryList } from '@angular/core';
import { ActionDirective } from '../../directives/action.directive';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ContentChildren(ActionDirective) actions: QueryList<ActionDirective> | undefined;
}
