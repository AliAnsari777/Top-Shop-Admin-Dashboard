import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { Vendor } from "src/app/vendor";
import { UserService } from "../user-service.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: Vendor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.users = new Vendor();
  }

  ngOnInit() {
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });
  }

  onReject() {
    this.userService.remove(this.users);
    this.gotoUserList();
  }

  onApprove() {
    this.userService
      .save(this.users)
      .subscribe((result) => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(["/validation"]);
  }
}
