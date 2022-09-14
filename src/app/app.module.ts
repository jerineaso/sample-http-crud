import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { FormsModule } from '@angular/forms';
import { AdDirective } from '../app/app.directive'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiServicesService } from './services/api.services.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    ParentInfoComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent],
  entryComponents : [StudentInfoComponent, ParentInfoComponent]
})
export class AppModule { }
