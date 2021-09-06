import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDocumentationComponent } from './sandbox/form-documentation/form-documentation.component';
import { LineDocumentationComponent } from './sandbox/line-documentation/line-documentation.component';
import { PageDocumentationComponent } from './sandbox/page-documentation/page-documentation.component';
import { SandBoxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  { path: '', redirectTo: '/sandbox/line', pathMatch: 'full' },
  {
    path: 'sandbox', component: SandBoxComponent, children: [
      { path: 'page', component: PageDocumentationComponent },
      { path: 'form', component: FormDocumentationComponent },
      { path: 'line', component: LineDocumentationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
