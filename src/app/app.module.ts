import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineModule } from './sandbox/line-documentation/line.module';
import { FormModule } from './sandbox/form-documentation/form.module';
import { SandBoxComponent } from './sandbox/sandbox.component';
import { PageModule } from './sandbox/page-documentation/page.module';

@NgModule({
  declarations: [
    AppComponent,
    SandBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    LineModule,
    FormModule,
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
