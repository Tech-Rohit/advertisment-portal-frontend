import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './My-Components/sidebar/sidebar.component';
import { TopbarComponent } from './My-Components/topbar/topbar.component';
import { FooterComponent } from './My-Components/footer/footer.component';

import { CoreModule } from './core/core.module';
import { AdRegistrationFormComponent } from './My-Components/ad-registration-form/ad-registration-form.component';
import { AdListComponent } from './My-Components/ad-list/ad-list.component';
import { AdDeleteComponent } from './My-Components/ad-delete/ad-delete.component';
import { AdUpdateComponent } from './My-Components/ad-update/ad-update.component';
import { HttpErrorInterceptorService } from './core/services/httperror-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    AdRegistrationFormComponent,
    AdListComponent,
    AdDeleteComponent,
    AdUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    NgxSpinnerModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
