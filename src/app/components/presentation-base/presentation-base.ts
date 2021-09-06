import { OnDestroy, ElementRef, Component, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

@Component({ template: '' })
export class PresentationBase implements OnDestroy, AfterViewInit {
  titles: Array<HTMLElement> = [];
  domMutationObserver: MutationObserver | undefined;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.domMutationObserver = new MutationObserver((mutations: Array<MutationRecord>): void => {
      mutations.forEach(() => {
        if (!this.titles) {
          this.titles = _.filter(document.querySelectorAll<HTMLElement>('section h4'), (item: HTMLElement) => item.id !== '')
            .map<HTMLElement>((x: HTMLElement) => x);
        }
      });
    });

    this.domMutationObserver.observe(this.elementRef.nativeElement, { childList: true, subtree: true });
  }

  ngOnDestroy(): void {
    this.domMutationObserver?.disconnect();
  }
}
