import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { UserAccount } from "../../../core/model/userAccount";
import { Employee } from "../../../core/model/employee";
import {Observable} from "rxjs";
import {User} from "../../../user";
import {Vendor} from "../../../vendor";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = "http://localhost:8080/user-service/api/vendor";
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(vendor: Vendor) {
    return this.http.post<Vendor>(this.usersUrl, vendor);
  }

  public saveUser(employee: Employee, vendorId: string) {
    console.log("this is in user service " + employee.userAccount.username);
    return this.http.post<UserAccount>(
      this.usersUrl + "/addEmployee/" + vendorId,
      employee
    );
  }

  public remove(vendor: Vendor) {
    this.http.delete<Vendor>(this.usersUrl + "/" + vendor.id);
  }
}
