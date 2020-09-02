import { FormGroup } from "@angular/forms";
export interface questionSetting {
  question: string;
  placeholder: string;
}
export interface ciFormSetting {
  formGroup: FormGroup;
  placeholder: string;
}

/** 選択記入式:問 */
export interface selEntryQuestionSetting {
  question: string;
  placeholder: string;
  rows: number;
}
/** 選択記入式:Form */
export interface seFormSetting {
  formGroup: FormGroup;
  placeholder: string;
  rows: number;
}
