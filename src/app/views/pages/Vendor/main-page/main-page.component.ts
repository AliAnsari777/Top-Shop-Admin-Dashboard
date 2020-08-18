import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  OnDestroy,
  Injectable,
} from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { Cookie } from "ng2-cookies";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnDestroy {
  http: HttpClient;
  viewLoading = false;
  customers: any[];
  userPath: "http://localhost:8080/user-service/api/";
  productPath: "http://localhost:8080/product-service/api/";
  title: string;
  load: true;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.title = "Vendor Home Page";
    // this.customers =  new Array();
    // this.getAllVendors('pending');
  }

  // getAllVendors(path){

  //   if(path=="pending"){
  //     this.title = "Pending Vendors"
  //   }
  //   if(path=="getAll"){
  //     this.title = "All Vendors"
  //   }
  //   if(path=="deleted"){
  //     this.title = "Deleted Vendors"
  //   }
  //   if(path=="rejected"){
  //     this.title = "Rejected Vendors"
  //   }

  //   this.viewLoading = true;

  //   return this.http.get("http://localhost:8080/user-service/api/vendor/"+path)
  //     .subscribe(
  //       (data: any)=>{
  //         console.log(data);
  //        this.customers = data;
  //       },
  //       error => {
  //         this.viewLoading = false;
  //         console.log(error);
  //       }
  //     );
  // }

  // disapprove(id) {

  //   this.getRequest("http://localhost:8080/user-service/api/admin/reject/"+id);

  //   this.removeDocument(id)
  // }

  // approve(id){
  //   this.getRequest("http://localhost:8080/user-service/api/admin/activate/"+id);

  //   this.removeDocument(id)

  // }

  // delete(id){
  //   this.deleteRequest("http://localhost:8086/api/vendor/"+id);
  //   this.removeDocument(id)
  // }

  // removeDocument(id){
  //   this.customers.forEach( (item, index) => {
  //     if(item.userAccount.id === id) this.customers.splice(index,1);
  //   });
  // }

  // public getRequest(path) {

  //   this.http.post(path,null)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }
  // public deleteRequest(path) {

  //   this.http.delete(path)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }
}
