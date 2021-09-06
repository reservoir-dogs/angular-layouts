import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({ selector: '[percent]' })
export class PercentDirective implements AfterViewInit {
  @Input() percent: number = 25;

  constructor(private hostElement: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit(): void {
    this.hostElement.nativeElement.setAttribute('style', `flex: 0 0 ${this.percent}%;`);
  }
}