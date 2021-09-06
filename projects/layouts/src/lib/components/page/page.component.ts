import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { ActionDirective } from '../../directives/action.directive';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() title: string = '';
  @ContentChildren(ActionDirective) actions: QueryList<ActionDirective> | undefined;
}
