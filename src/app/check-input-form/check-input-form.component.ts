import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { questionSetting, ciFormSetting } from "../common/icommon";

@Component({
  selector: "app-check-input-form",
  templateUrl: "./check-input-form.component.html",
  styleUrls: ["./check-input-form.component.scss"],
})
export class CheckInputFormComponent implements OnInit {
  question: questionSetting[];
  formGroups: FormGroup[];
  placeholders: string[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 問いの取得
    this.question = [
      { question: "○×ですか？", placeholder: "AAA" },
      { question: "◆♪ですか？", placeholder: "BBB" },
      { question: "■■ですか？", placeholder: "CCC" },
    ];

    // 問いの数分FormGroupを作成
    this.formGroups = new Array(this.question.length);
    this.placeholders = new Array(this.question.length);
    for (let i = 0; i < this.formGroups.length; i++) {
      this.formGroups[i] = this.fb.group({
        ideas: this.fb.array([""]),
      });
      this.placeholders[i] = this.question[i].placeholder;
    }
  }

  // 疑似Submit
  onSubmit() {
    console.log("formGroups", this.formGroups);
  }
}
