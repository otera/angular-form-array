import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-fg-in-fg",
  templateUrl: "./fg-in-fg.component.html",
  styleUrls: ["./fg-in-fg.component.scss"],
})
export class FgInFgComponent implements OnInit {
  private onDestroyA$ = new Subject();
  private onDestroyB$ = new Subject();

  testFormGroup = this.fb.group({
    agree: this.fb.group({
      ideas: this.fb.array(["initA"]),
    }),
    opposition: this.fb.group({
      ideas: this.fb.array(["initB"]),
    }),
  });

  constructor(private fb: FormBuilder) {}

  get agreeIdeasForm(): FormArray {
    return this.testFormGroup.get("agree").get("ideas") as FormArray;
  }
  get oppositionIdeasForm(): FormArray {
    return this.testFormGroup.get("opposition").get("ideas") as FormArray;
  }

  ngOnInit() {
    this.agreeIdeasForm.push(this.fb.control(Date.now()));
    this.agreeIdeasForm.push(this.fb.control(Date.now()));
    this.agreeIdeasForm.push(this.fb.control(Date.now()));
    this.oppositionIdeasForm.push(this.fb.control(Date.now()));
    this.oppositionIdeasForm.push(this.fb.control(Date.now()));

    this.agreeIdeasForm.valueChanges
      .pipe(takeUntil(this.onDestroyA$))
      .subscribe((data) => {
        console.log("agreeIdeasForm", data);
      });
    this.oppositionIdeasForm.valueChanges
      .pipe(takeUntil(this.onDestroyB$))
      .subscribe((data) => {
        console.log("oppositionIdeasForm", data);
      });
  }

  ngOnDestroy() {
    this.onDestroyA$.next();
    this.onDestroyB$.next();
  }
}
