import { NgModule } from '@angular/core';

import { AutoDirective } from './directives/auto.directive';
import { LineComponent } from './components/line/line.component';
import { PercentDirective } from './directives/percent.directive';
import { PartDirective } from './directives/part.directive';
import { FormComponent } from './components/form/form.component';
import { ActionDirective } from './directives/action.directive';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [
    ActionDirective,
    AutoDirective,
    PartDirective,
    PercentDirective,

    LineComponent,
    FormComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ActionDirective,
    AutoDirective,
    PartDirective,
    PercentDirective,

    LineComponent,
    FormComponent,
    PageComponent,
  ],
})
export class LayoutsModule { }
