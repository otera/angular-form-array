import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
} from "@angular/core";
import { FormBuilder, FormArray } from "@angular/forms";
import { ciFormSetting } from "../../common/icommon";

@Component({
  selector: "app-idea-forms",
  templateUrl: "./idea-forms.component.html",
  styleUrls: ["./idea-forms.component.scss"],
})
export class IdeaFormsComponent implements OnInit {
  @ViewChildren("ideaInput") ideaInputElement: QueryList<ElementRef>;
  @Input() ideaForm: ciFormSetting;

  // 削除ボタンを非活性にするかどうか
  isDisabled = true;

  constructor(private fb: FormBuilder) {}

  /**
   * getter ideas
   */
  get ideas(): FormArray {
    return this.ideaForm.formGroup.get("ideas") as FormArray;
  }

  ngOnInit() {}

  /**
   * 項目が1つになった場合、削除ボタンを非活性にする
   */
  private determination() {
    this.isDisabled = this.ideas.length === 1 ? true : false;
  }

  /**
   * 項目追加
   */
  addItem() {
    this.ideas.push(this.fb.control(""));
    // 最後の要素にfocusをset
    setTimeout(() => this.ideaInputElement.last.nativeElement.focus());
    this.determination();
  }

  /**
   * 項目削除
   * @param  {number} index 削除する配列index
   */
  removeItem(index: number) {
    // 項目1つの時は処理中断
    if (this.ideas.length <= 1) return;
    // 削除
    this.ideas.removeAt(index);
    this.determination();
  }

  // 疑似Submit
  onSubmit() {
    console.log(this.ideaForm.formGroup.controls);
  }
}
