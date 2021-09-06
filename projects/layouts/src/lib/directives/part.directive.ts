import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({ selector: '[part]' })
export class PartDirective implements AfterViewInit {
  @Input() part: number = 1;

  constructor(private hostElement: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit(): void {
    this.hostElement.nativeElement.setAttribute('style', `flex-grow: ${this.part};`);
  }
}