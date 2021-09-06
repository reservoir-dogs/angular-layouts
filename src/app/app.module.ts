import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineDocumentationComponent } from './src/sandbox/line-documentation/line-documentation.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LineDocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
