import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserCardComponent } from "./user-card.component";

describe("UserCardComponent", () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display user information", () => {
    component.user = { id: 1, name: "John Doe", email: "john@example.com" };
    fixture.detectChanges();

    const element = fixture.nativeElement;
    expect(element.querySelector("h3").textContent).toContain("John Doe");
    expect(element.querySelector("p").textContent).toContain(
      "john@example.com"
    );
  });

  it("should emit delete event when delete button is clicked", () => {
    component.user = { id: 1, name: "John Doe", email: "john@example.com" };
    fixture.detectChanges();

    spyOn(component.deleteUser, "emit");
    const button = fixture.nativeElement.querySelector("button");
    button.click();

    expect(component.deleteUser.emit).toHaveBeenCalledWith(1);
  });
});
