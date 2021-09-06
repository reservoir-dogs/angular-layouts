import { NgModule } from '@angular/core';
import { AutoDirective } from './directives/auto.directive';
import { LineComponent } from './components/line/line.component';
import { PercentDirective } from './directives/percent.directive';
import { PartDirective } from './directives/part.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AutoDirective,
    PartDirective,
    PercentDirective,
    LineComponent,
    FormComponent,
  ],
  exports: [
    AutoDirective,
    PartDirective,
    PercentDirective,
    LineComponent,
    FormComponent,
  ],
})
export class LayoutsModule { }
