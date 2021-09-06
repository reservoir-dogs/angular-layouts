import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutsModule } from '@reservoir-prog/layouts';

import { DocumentationModeleComponent } from './components/documentation-modele/documentation-modele.component';
import { ExempleModeleComponent } from './components/exemple-modele/exemple-modele.component';
import { PresentationBase } from './components/presentation-base/presentation-base';
import { HighlightCodeDirective } from './directives/highlight-code.directive';

@NgModule({
  declarations: [
    DocumentationModeleComponent,
    PresentationBase,
    ExempleModeleComponent,
    HighlightCodeDirective
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    LayoutsModule,
  ],
  exports: [
    CommonModule,
    LayoutsModule,
    DocumentationModeleComponent,
    ExempleModeleComponent,
    HighlightCodeDirective
  ],
})
export class DependenciesModule { }
