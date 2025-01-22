import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UserCardComponent } from "./components/user-card/user-card.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, UserCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the AppComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should render the title in the template", () => {
    const element = fixture.nativeElement;
    expect(element.querySelector("h1").textContent).toContain(
      "Welcome to the Testing Demo"
    );
  });

  it("should pass user data to UserCardComponent", () => {
    const userCardElement =
      fixture.nativeElement.querySelector("app-user-card");
    expect(userCardElement).toBeTruthy();

    const userCardComponent = fixture.debugElement.query(
      By.directive(UserCardComponent)
    ).componentInstance as UserCardComponent;

    expect(userCardComponent.user).toEqual(component.user);
  });

  it("should handle deleteUser event from UserCardComponent", () => {
    spyOn(console, "log"); 

    const userCardComponent = fixture.debugElement.query(
      By.directive(UserCardComponent)
    ).componentInstance as UserCardComponent;

    // Simulate the deleteUser event
    userCardComponent.deleteUser.emit(1);

    // Verify that the event handler was called
    expect(console.log).toHaveBeenCalledWith("User deleted:", 1);
  });
});
