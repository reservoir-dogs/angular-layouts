import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DependenciesModule } from 'src/app/dependencies.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PageDocumentationComponent } from './page-documentation.component';
import { PagePresentationComponent } from './page-presentation/page-presentation.component';
import { PageApiComponent } from './page-api/page-api.component';
import { PageDefaultComponent } from './page-presentation/page-default/page-default.component';

@NgModule({
  declarations: [
    PageDocumentationComponent,
    PagePresentationComponent,
    PageApiComponent,
    PageDefaultComponent
  ],
  imports: [
    DependenciesModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PageModule { }
