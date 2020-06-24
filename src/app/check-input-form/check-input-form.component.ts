import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-check-input-form",
  templateUrl: "./check-input-form.component.html",
  styleUrls: ["./check-input-form.component.scss"],
})
export class CheckInputFormComponent implements OnInit {
  question: string[];
  formGroups: FormGroup[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 問いの取得
    this.question = ["○×ですか？", "◆♪ですか？", "■■ですか？"];

    // 問いの数分FormGroupを作成
    this.formGroups = new Array(this.question.length);
    for (let i = 0; i < this.formGroups.length; i++) {
      this.formGroups[i] = this.fb.group({
        ideas: this.fb.array([""]),
      });
    }
  }

  // 疑似Submit
  onSubmit() {
    console.log("formGroups", this.formGroups);
  }
}
