import { Component, OnInit, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-idea-forms",
  templateUrl: "./idea-forms.component.html",
  styleUrls: ["./idea-forms.component.scss"],
})
export class IdeaFormsComponent implements OnInit {
  @Input() naming: string;
  @Output() ideaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ideaForm = this.fb.group({
      ideas: this.fb.array([""]),
    });
  }

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

  // 疑似Submit
  onSubmit() {
    console.log(this.ideaForm.controls);
  }
}
