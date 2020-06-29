import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CheckInputFormComponent } from "./check-input-form/check-input-form.component";
import { FgInFgComponent } from "./fg-in-fg/fg-in-fg.component";

const routes: Routes = [
  { path: "", redirectTo: "cif", pathMatch: "full" },
  { path: "cif", component: CheckInputFormComponent },
  { path: "fif", component: FgInFgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
