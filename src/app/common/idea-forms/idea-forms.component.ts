import { Component, OnInit, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-idea-forms",
  templateUrl: "./idea-forms.component.html",
  styleUrls: ["./idea-forms.component.scss"],
})
export class IdeaFormsComponent implements OnInit {
  @Input() ideaForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  /**
   * getter ideas
   */
  get ideas(): FormArray {
    return this.ideaForm.get("ideas") as FormArray;
  }

  ngOnInit() {}

  /**
   * 項目追加
   */
  addItem() {
    this.ideas.push(this.fb.control(""));
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
    console.log(this.ideaForm.controls);
  }
}
