import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-check-input-form",
  templateUrl: "./check-input-form.component.html",
  styleUrls: ["./check-input-form.component.scss"],
})
export class CheckInputFormComponent implements OnInit {
  public ideaForm: FormGroup;
  question: string[];
  forms: FormGroup[];

  constructor(private fb: FormBuilder) {}

  get ideas(): FormArray {
    return this.ideaForm.get("ideas") as FormArray;
  }

  ngOnInit() {
    // 問いの取得
    this.question = ["○×ですか？", "◆♪ですか？", "■■ですか？"];

    // Formの設定
    // const items: string[] = new Array(this.question.length).fill("");
    // this.ideaForm = this.fb.group({
    //   ideas: this.fb.array(items),
    // });
    this.forms = new Array(this.question.length);
  }

  // 疑似Submit
  onSubmit() {
    console.log(this.ideaForm.controls);
  }

  // 項目の追加
  addItem(itemNumber: number) {}

  // 項目の削除
  deleteItem(itemNumber: number, index: number) {
    // this.ideas.
  }
}
