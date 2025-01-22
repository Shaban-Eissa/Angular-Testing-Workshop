import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { UserService, User } from "./user.service";
describe("UserService", () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should fetch users", () => {
    const mockUsers: User[] = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ];

    service.getUsers().subscribe((users) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(req.request.method).toBe("GET");
    req.flush(mockUsers);
  });

  it("should delete a user", () => {
    service.deleteUser(1).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    expect(req.request.method).toBe("DELETE");
    req.flush(null);
  });
});
