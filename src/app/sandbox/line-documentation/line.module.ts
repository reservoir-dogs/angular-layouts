import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DependenciesModule } from '../../dependencies.module';

import { LineDocumentationComponent } from './line-documentation.component';
import { LinePresentationComponent } from './line-presentation/line-presentation.component';
import { LineApiComponent } from './line-api/line-api.component';
import { LineDefaultComponent } from './line-presentation/line-default/line-default.component';

@NgModule({
  declarations: [
    LineDocumentationComponent,
    LinePresentationComponent,
    LineApiComponent,
    LineDefaultComponent
  ],
  imports: [
    DependenciesModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LineModule { }
