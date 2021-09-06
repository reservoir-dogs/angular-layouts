import { Directive, ElementRef, HostBinding, Renderer2 } from "@angular/core";

@Directive({
  selector: '[auto]'
})
export class AutoDirective {
  @HostBinding('class')
  class = 'auto';

  constructor(renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'custom-theme');
  }
}