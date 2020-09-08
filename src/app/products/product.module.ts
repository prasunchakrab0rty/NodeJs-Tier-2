import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetailsGuard } from "../shared/guards/product-details.guard";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
