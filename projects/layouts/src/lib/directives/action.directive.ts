import { Directive, HostBinding, TemplateRef } from "@angular/core";

@Directive({ selector: '[action]' })
export class ActionDirective {
  @HostBinding('class')
  class = 'action';

  constructor(public template: TemplateRef<any>){

  }
}