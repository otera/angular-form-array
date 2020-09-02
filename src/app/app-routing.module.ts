import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CheckInputFormComponent } from "./check-input-form/check-input-form.component";
import { FgInFgComponent } from "./fg-in-fg/fg-in-fg.component";
import { SelectiveEntryFormulaComponent } from "./selective-entry-formula/selective-entry-formula.component";

const routes: Routes = [
  { path: "", redirectTo: "cif", pathMatch: "full" },
  { path: "cif", component: CheckInputFormComponent },
  { path: "fif", component: FgInFgComponent },
  { path: "sefc", component: SelectiveEntryFormulaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
