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

  constructor(private fb: FormBuilder) {}

  /**
   * getter ideas
   */
  get ideas(): FormArray {
    return this.ideaForm.formGroup.get("ideas") as FormArray;
  }

  ngOnInit() {}

  /**
   * 項目追加
   */
  addItem() {
    this.ideas.push(this.fb.control(""));
    // 最後の要素にfocusをset
    setTimeout(() => this.ideaInputElement.last.nativeElement.focus());
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
  }

  // 疑似Submit
  onSubmit() {
    console.log(this.ideaForm.formGroup.controls);
  }
}
