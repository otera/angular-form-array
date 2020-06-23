import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CheckInputFormComponent } from "./check-input-form/check-input-form.component";

const routes: Routes = [{ path: "", component: CheckInputFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
