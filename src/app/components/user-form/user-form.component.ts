import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-user-form",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./user-form.component.html",
  styleUrl: "./user-form.component.css",
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log("Form submitted:", this.userForm.value);
  }
}
