import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HighlightDirective } from "./highlight.directive";

@Component({
  template: `<div appHighlight>Hover over me</div>`,
})
class TestComponent {}
describe("HighlightDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let div: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HighlightDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    div = fixture.debugElement.query(By.css("div"));
  });

  it("should change background color on mouse enter", () => {
    div.triggerEventHandler("mouseenter", null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe("yellow");
  });

  it("should remove background color on mouse leave", () => {
    div.triggerEventHandler("mouseenter", null);
    fixture.detectChanges();
    div.triggerEventHandler("mouseleave", null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe("");
  });
});
