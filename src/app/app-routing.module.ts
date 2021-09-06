import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDocumentationComponent } from './sandbox/form-documentation/form-documentation.component';
import { LineDocumentationComponent } from './sandbox/line-documentation/line-documentation.component';
import { SandBoxComponent } from './sandbox/sandbox.component';

const routes: Routes = [
  { path: '', redirectTo: '/sandbox/line', pathMatch: 'full' },
  {
    path: 'sandbox', component: SandBoxComponent, children: [
      { path: 'line', component: LineDocumentationComponent },
      { path: 'form', component: FormDocumentationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
