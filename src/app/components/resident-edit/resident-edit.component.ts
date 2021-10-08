import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { NameValuePair } from "src/app/interfaces/name-value";
import { Resident } from "src/app/interfaces/resident";
import { AVATAR_LIST } from "src/app/utils/avatar-list";

@Component({
  selector: "app-resident-edit",
  templateUrl: "./resident-edit.component.html",
  styleUrls: ["./resident-edit.component.scss"],
})
export class ResidentEditComponent implements OnInit {

  @Output() onSave = new EventEmitter<Resident>();
  @Output() onCancel = new EventEmitter();

  @Input() resident?: Resident;  
  @Input() cancelText : string = '';

  avatarOpts = AVATAR_LIST;
  
  residentForm = this.fb.group({
    id: [],
    name: ["", Validators.required],
    avatar: ["", Validators.required],
    description: this.fb.group({
      animal: ["", Validators.required],
      personality: ["", Validators.required],
    }),
    notes: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.residentForm.patchValue({
      id: this.resident?.id,
      name: this.resident?.name,
      avatar: this.resident?.avatar,
      description: {
        animal: this.resident?.description.animal,
        personality: this.resident?.description.personality,
      }      
    });

    this.resident?.notes.forEach(e => 
      this.notes.push(this.fb.control(e))  
    );

  }

  get notes() {
    return this.residentForm.get("notes") as FormArray;
  }

  compareFn(c1: string, c2: string): boolean {
    return c1 && c2 ? c1 === c2 : false;
  }

  // Add a note to the form
  addNote() {
    this.notes.push(this.fb.control("", Validators.required));
  }

  // Emit the save event
  save() {
    this.onSave.emit(this.residentForm.value);
  }

  // Emit the cancel event
  cancel() {
    this.onCancel.emit();
  }
}
