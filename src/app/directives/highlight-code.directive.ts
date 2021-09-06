import { ElementRef, Directive, AfterViewInit, Input } from '@angular/core';
import { OnChange } from '../decorators/on-change';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'code[highlight]'
})
export class HighlightCodeDirective implements AfterViewInit {

  @OnChange<HighlightCodeDirective>((that, change) => {
    that.elementRef.nativeElement.innerText = change?.currentValue;
    hljs.highlightBlock(that.elementRef.nativeElement);
  })
  @Input() code: string = '';

  constructor(private elementRef: ElementRef<HTMLElement>) {
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('css', css);
  }

  ngAfterViewInit(): void {
    hljs.highlightBlock(this.elementRef.nativeElement);
  }
}
