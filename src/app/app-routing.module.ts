import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdRegistrationFormComponent } from './My-Components/ad-registration-form/ad-registration-form.component';
import { AdUpdateComponent } from './My-Components/ad-update/ad-update.component';

const routes: Routes = [
  {path: "register", component: AdRegistrationFormComponent},
  {path: "update", component: AdUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
