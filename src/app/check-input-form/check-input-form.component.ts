import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { questionSetting, ciFormSetting } from "../common/icommon";

@Component({
  selector: "app-check-input-form",
  templateUrl: "./check-input-form.component.html",
  styleUrls: ["./check-input-form.component.scss"],
})
export class CheckInputFormComponent implements OnInit {
  question: questionSetting[];
  forms: ciFormSetting[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 問いの取得
    this.question = [
      { question: "○×ですか？", placeholder: "AAA" },
      { question: "◆♪ですか？", placeholder: "BBB" },
      { question: "■■ですか？", placeholder: "CCC" },
    ];

    // 問いの数分FormGroupを作成
    this.forms = new Array(this.question.length);
    for (let i = 0; i < this.forms.length; i++) {
      this.forms[i] = {
        formGroup: this.fb.group({
          ideas: this.fb.array([""]),
        }),
        placeholder: this.question[i].placeholder,
      };
    }
  }

  // 疑似Submit
  onSubmit() {
    console.log("forms", this.forms);
  }
}
