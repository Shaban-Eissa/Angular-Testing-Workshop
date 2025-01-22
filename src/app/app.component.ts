import { Component } from "@angular/core";
import { UserCardComponent } from "./components/user-card/user-card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Welcome to the Testing Demo";

  constructor() {}

  user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  onDeleteUser(userId: number) {
    console.log("User deleted:", userId);
  }
}
