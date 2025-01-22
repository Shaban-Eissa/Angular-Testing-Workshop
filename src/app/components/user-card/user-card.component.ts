import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-user-card",
  standalone: true,
  imports: [],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.css",
})
export class UserCardComponent {
  @Input() user: { id: number; name: string; email: string } = {
    id: 0,
    name: "",
    email: "",
  };
  @Output() deleteUser = new EventEmitter<number>();

  onDelete() {
    this.deleteUser.emit(this.user.id);
  }
}
