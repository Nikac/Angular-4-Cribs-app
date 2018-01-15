import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribsListComponent } from './cribs-list/cribs-list.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './services/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribsListComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    CribsService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
