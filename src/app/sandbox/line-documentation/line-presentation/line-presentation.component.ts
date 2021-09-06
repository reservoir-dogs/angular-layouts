import { Component, ElementRef } from '@angular/core';
import { PresentationBase } from 'src/app/components/presentation-base/presentation-base';

@Component({
  selector: 'line-presentation',
  templateUrl: './line-presentation.component.html',
  styleUrls: ['./line-presentation.component.scss']
})
export class LinePresentationComponent extends PresentationBase {
  path: string = '/line-documentation/line-presentation';

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
