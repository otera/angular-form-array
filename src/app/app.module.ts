import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CheckInputFormComponent } from "./check-input-form/check-input-form.component";
import { IdeaFormsComponent } from './common/idea-forms/idea-forms.component';
import { FgInFgComponent } from './fg-in-fg/fg-in-fg.component';
import { SelectiveEntryFormulaComponent } from './selective-entry-formula/selective-entry-formula.component';

@NgModule({
  declarations: [AppComponent, CheckInputFormComponent, IdeaFormsComponent, FgInFgComponent, SelectiveEntryFormulaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
