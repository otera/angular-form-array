import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { selEntryQuestionSetting, seFormSetting } from "../common/icommon";

@Component({
  selector: "app-selective-entry-formula",
  templateUrl: "./selective-entry-formula.component.html",
  styleUrls: ["./selective-entry-formula.component.scss"],
})
export class SelectiveEntryFormulaComponent implements OnInit {
  /** 質問 */
  question: selEntryQuestionSetting[];
  /** form情報 */
  forms: seFormSetting[];
  /** いずれかのチェックが選択されているかどうか */
  checkStatus = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 問いの取得
    this.question = [
      { question: "○×ですか？", placeholder: "AAA", rows: 4 },
      { question: "◆♪ですか？", placeholder: "BBB", rows: 5 },
      { question: "■■ですか？", placeholder: "CCC", rows: 6 },
    ];

    // 問いの数分FormGroupを作成
    this.forms = new Array(this.question.length);
    for (let i = 0; i < this.forms.length; i++) {
      this.forms[i] = {
        formGroup: this.fb.group({
          select: [null],
          opinion: [{ value: "", disabled: true }],
        }),
        placeholder: this.question[i].placeholder,
        rows: this.question[i].rows,
      };
    }
  }

  /**
   * チェックボックスにチェックが入った場合、テキストエリアを有効化する
   * @param  {boolean} value チェックボックス値
   * @param  {number} index ターゲットFormGroup
   */
  onSelectChange(value: boolean, index: number) {
    if (value) {
      this.forms[index].formGroup.controls["opinion"].enable();
    } else {
      this.forms[index].formGroup.controls["opinion"].disable();
    }
    // チェック状態をチェック
    this.checkStatus = this.checkAnyStatus;
  }

  /**
   * いずれかのチェックボックスが選択されているかどうか
   * @returns boolean 選択されている場合はTrue
   */
  get checkAnyStatus(): boolean {
    return this.forms.some((form) => {
      return form.formGroup.controls["select"].value === true;
    });
  }

  // 疑似Submit
  onSubmit() {
    console.log("forms", this.forms);
  }
}
