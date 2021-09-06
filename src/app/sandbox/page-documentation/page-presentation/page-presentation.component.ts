import { Component, ElementRef } from '@angular/core';
import { PresentationBase } from 'src/app/components/presentation-base/presentation-base';

@Component({
  selector: 'page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.scss']
})
export class PagePresentationComponent extends PresentationBase {
  path: string = '/page-documentation/page-presentation';

  constructor(elementRef: ElementRef) {
    
    super(elementRef);
  }
}
