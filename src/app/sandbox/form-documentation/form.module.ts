import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DependenciesModule } from 'src/app/dependencies.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { FormDocumentationComponent } from './form-documentation.component';
import { FormPresentationComponent } from './form-presentation/form-presentation.component';
import { FormApiComponent } from './form-api/form-api.component';
import { FormDefaultComponent } from './form-presentation/form-default/form-default.component';

@NgModule({
  declarations: [
    FormDocumentationComponent,
    FormPresentationComponent,
    FormApiComponent,
    FormDefaultComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    DependenciesModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FormModule { }
