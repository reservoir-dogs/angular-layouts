import { Directive, HostBinding } from "@angular/core";

@Directive({ selector: '[auto]' })
export class AutoDirective {
  @HostBinding('class')
  class = 'auto';
}