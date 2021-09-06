import { Component, ElementRef } from '@angular/core';
import { PresentationBase } from 'src/app/components/presentation-base/presentation-base';

@Component({
  selector: 'form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.scss']
})
export class FormPresentationComponent extends PresentationBase {
  path: string = '/form-documentation/form-presentation';

  constructor(elementRef: ElementRef) {
    
    super(elementRef);
  }
}
