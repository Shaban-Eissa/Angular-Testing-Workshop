import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserFormComponent } from "./user-form.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [UserFormComponent, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should validate the form", () => {
    const nameControl = component.userForm.get("name");
    const emailControl = component.userForm.get("email");

    nameControl?.setValue("");
    emailControl?.setValue("invalid-email");
    expect(component.userForm.invalid).toBeTrue();

    nameControl?.setValue("John Doe");
    emailControl?.setValue("john@example.com");
    expect(component.userForm.valid).toBeTrue();
  });

  it("should call onSubmit when form is submitted", () => {
    spyOn(component, "onSubmit");
    const form = fixture.nativeElement.querySelector("form");
    form.dispatchEvent(new Event("submit"));
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
