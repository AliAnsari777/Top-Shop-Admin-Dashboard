// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// Partials
import { PartialsModule } from "../partials/partials.module";
// Pages
import { CoreModule } from "../../core/core.module";
import { ECommerceModule } from "./apps/e-commerce/e-commerce.module";
import { UserManagementModule } from "./user-management/user-management.module";
import { VendorManagementModule } from "./Vendor/vendor-management.module";
import { vendorManagementComponent } from "./Vendor/vendor-management/vendor-management/vendor-management.component";
import { UserListComponent } from "./Vendor/user-list/user-list.component";
import { UserFormComponent } from "./Vendor/user-form/user-form.component";
import { MainPageComponent } from "./Vendor/main-page/main-page.component";

@NgModule({
  declarations: [
    vendorManagementComponent,
    UserListComponent,
    UserFormComponent,
    MainPageComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    PartialsModule,
    ECommerceModule,
    UserManagementModule,
    VendorManagementModule,
  ],
  providers: [],
})
export class PagesModule {}
